// glTF(.glb·.gltf, VRM이 아닌 것) 모델 불러오기. three.js GLTFLoader로 읽고, 디코더가 필요한 압축 확장(Draco·meshopt·KTX2)은 알아보기 쉬운 오류로 거절.
// 사람형 뼈·표정 대응은 FBX처럼 avatar.json이 맡음 (glTF에는 정해진 뼈 이름이 없음). 내장 애니메이션은 avatar.json animations에 클립 이름으로 씀.
// 툰 셰이딩이면 glTF 재질(물리 재질·unlit)의 바탕색·텍스처를 자체 툰 재질 설정으로 옮김 (toonOptionsFromSurface).
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { FaceSdfUniforms, ToonMaterialOptions } from "./toon-material.ts";
import type { AvatarProfile, MaterialSpec } from "./rig-three.ts";
import type { Lifetime } from "./lifetime.ts";

/** 디코더가 필요해 아직 읽지 못하는 glTF 확장 */
export const UNSUPPORTED_GLTF_EXTENSIONS: readonly string[] = ["KHR_draco_mesh_compression", "EXT_meshopt_compression", "KHR_meshopt_compression", "KHR_texture_basisu"];
/** glTF JSON에서 읽는 값 */
export type GltfJson = { extensionsUsed?: string[] };

const GLB_MAGIC = 0x46546c67;   // "glTF"
const GLB_JSON_CHUNK = 0x4e4f534a;   // "JSON"
/**
 * glTF 파일 내용에서 JSON 부분 읽기 (.glb는 첫 JSON 청크, .gltf는 파일 전체)
 * @returns JSON, 읽을 수 없으면 null
 */
export function gltfJsonOf(buffer: ArrayBuffer): GltfJson | null {
  try {
    const view = new DataView(buffer);
    if (buffer.byteLength >= 20 && view.getUint32(0, true) === GLB_MAGIC) {
      if (view.getUint32(16, true) !== GLB_JSON_CHUNK) return null;
      return JSON.parse(new TextDecoder().decode(new Uint8Array(buffer, 20, view.getUint32(12, true))));
    }
    return JSON.parse(new TextDecoder().decode(buffer));
  } catch { return null; }
}

/** 쓰인 확장 중 읽지 못하는 압축 확장 */
export const unsupportedGltfExtensions = (json: GltfJson) => (json.extensionsUsed ?? []).filter((name) => UNSUPPORTED_GLTF_EXTENSIONS.includes(name));

/** 재질이 쓰는 텍스처 (불러온 텍스처를 꺼질 때 정리하려고 모음) */
const texturesOf = (material: THREE.Material) => Object.values(material).filter((value): value is THREE.Texture => !!(value as THREE.Texture | null)?.isTexture);

/**
 * glTF 불러오기: 파일을 받아 압축 확장을 먼저 확인하고 GLTFLoader로 읽음 (.gltf의 바깥 버퍼·텍스처는 모델 파일 옆에서 읽음)
 * @returns 모델 장면(방향 보정 전)과 내장 애니메이션 클립
 */
export async function loadGltf(url: string, life: Lifetime) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`glTF 모델을 받지 못했습니다 (${response.status}): ${url}`);
  const buffer = await response.arrayBuffer();
  const json = gltfJsonOf(buffer);
  if (!json) throw new Error(`glTF 파일 형식이 아닙니다: ${url}`);
  const blocked = unsupportedGltfExtensions(json);
  if (blocked.length) throw new Error(`압축된 glTF는 아직 지원하지 않습니다 (${blocked.join("·")}). 압축 없이 다시 내보낸 파일을 써 주세요`);
  const gltf = await new GLTFLoader().parseAsync(buffer, THREE.LoaderUtils.extractUrlBase(url));
  const textures = new Set<THREE.Texture>();
  gltf.scene.traverse((node) => { for (const material of ([] as THREE.Material[]).concat((node as THREE.Mesh).material || [])) for (const texture of texturesOf(material)) textures.add(texture); });
  life.add(() => { for (const texture of textures) texture.dispose(); });   // 재질·지오메트리는 rig-three가 정리
  return { model: gltf.scene, animations: gltf.animations };
}

/** 툰 그늘 색 = 바탕색 × 이 색 (그늘 맵이 없으면 바탕 맵을 그늘 맵으로 같이 씀) */
export const SHADE_TINT = new THREE.Color(0.86, 0.78, 0.84);

/** glTF 재질에서 읽는 값 (MeshStandardMaterial·MeshPhysicalMaterial·MeshBasicMaterial이 같은 이름으로 가짐) */
type SurfaceValues = THREE.Material & Partial<Pick<THREE.MeshStandardMaterial, "color" | "map" | "normalMap" | "normalScale" | "emissive" | "emissiveMap" | "emissiveIntensity" | "aoMap">>;

/** 텍스처에 변환(KHR_texture_transform)이 걸렸는지 */
const transformed = (texture?: THREE.Texture | null) => !!texture && (texture.offset.x !== 0 || texture.offset.y !== 0 || texture.repeat.x !== 1 || texture.repeat.y !== 1 || texture.rotation !== 0);

/**
 * glTF 재질 → 툰 재질 설정: 바탕색·바탕 맵·노멀 맵·발광·투명 처리를 옮기고, 그늘은 바탕 맵 × SHADE_TINT. AO 맵은 그림자 경계 맵(lilToon식 AO)으로
 * avatar.json 재질 설정이 있으면 그 값(맵·그늘 맵·AO 맵·경계·HighColor·투명 처리·양면)이 먼저
 * @param texture 모델 폴더 기준 텍스처 (linear = 색 공간 변환 없이 읽는 수치 맵)
 * @param rim avatar.json 림 라이트 @param faceSdf 얼굴 SDF 재질이면 공유 uniform
 */
export function toonOptionsFromSurface(source: THREE.Material, spec: MaterialSpec | undefined, texture: (file?: string, linear?: boolean) => THREE.Texture | undefined,
  rim?: AvatarProfile["rim"], faceSdf?: FaceSdfUniforms): ToonMaterialOptions {
  const s = source as SurfaceValues;
  const color = s.color ?? new THREE.Color(0xffffff);
  const map = texture(spec?.map) ?? s.map ?? null, shadeMap = texture(spec?.shade);
  const emissive = s.emissive && (s.emissiveMap || s.emissive.getHex() !== 0) ? s.emissive : undefined;
  return {
    name: source.name, color, map, opacity: source.opacity,
    shadeColor: shadeMap ? 0xffffff : color.clone().multiply(SHADE_TINT), shadeMap: shadeMap ?? map,
    shadingShiftMap: texture(spec?.ao, true) ?? s.aoMap ?? null, shadingShiftMapScale: spec?.aoScale ?? 1,
    shadingShift: spec?.shadingShift ?? -0.05, shadingToony: spec?.shadingToony ?? 0.95,
    ...(s.normalMap && { normalMap: s.normalMap, normalScale: s.normalScale }),
    ...(emissive && { emissive, emissiveIntensity: s.emissiveIntensity ?? 1, emissiveMap: s.emissiveMap ?? null }),
    transparent: spec?.transparent ?? source.transparent, alphaTest: spec?.alphaTest ?? source.alphaTest,
    side: spec?.doubleSided === undefined ? source.side : spec.doubleSided ? THREE.DoubleSide : THREE.FrontSide,
    rim: rim && { color: rim.color, fresnelPower: rim.power ?? 4, lightingMix: rim.mix ?? 0.5 },
    faceSdf, highColor: spec?.highColor && { ...spec.highColor, mask: texture(spec.highColor.mask, true) },
    uvTransforms: [map, s.normalMap, s.emissiveMap].some(transformed),
  };
}
