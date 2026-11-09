// 실사(PBR) 셰이딩: three.js 물리 기반 재질(MeshStandardMaterial)로 그림. avatar.json shading = "pbr"일 때 rig-three.ts가 씀.
// glTF는 불러온 PBR 재질을 그대로 쓰고, FBX(Phong·Lambert)·VRM(MToon)·조명 없는(unlit) 재질은 바탕색·텍스처를 옮긴 물리 재질로 바꿈.
// 조명은 내장 실내 환경광(RoomEnvironment, IBL) + 방향광이고 출력은 Neutral 톤 매핑. 구운 AO는 onBeforeCompile로 간접광에 곱함.
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import type { BakedAoUniforms } from "./toon-material.ts";
import type { MaterialSpec } from "./rig-three.ts";

/** 셰이딩 방식: toon = 자체 툰 재질, pbr = 물리 기반 재질 + 실내 환경광 */
export type Shading = "toon" | "pbr";
/** 거칠기 정보가 없는 재질(unlit·MToon)을 물리 재질로 바꿀 때의 거칠기 */
export const DEFAULT_ROUGHNESS = 0.8;
/** 실사 셰이딩 조명 기본값 (환경광이 간접광을 맡아 AmbientLight는 0, 흰 옷이 날아가지 않는 세기) */
export const PBR_LIGHT = { intensity: 1, ambient: 0, environment: 0.8, exposure: 1 } as const;

/**
 * Blinn-Phong 반짝임(shininess) → 물리 재질 거칠기: α = √(2/(n+2)), three.js 거칠기 = √α
 * @returns 0.04~1 (값이 없으면 DEFAULT_ROUGHNESS)
 */
export const roughnessFromShininess = (shininess?: number) =>
  shininess === undefined ? DEFAULT_ROUGHNESS : Math.min(1, Math.max(0.04, Math.pow(2 / (shininess + 2), 0.25)));

/** 바꿀 때 읽는 재질 값 (Phong·Lambert·Basic·MToon·Standard가 같은 이름으로 가짐) */
type SurfaceValues = THREE.Material & Partial<Pick<THREE.MeshPhongMaterial, "color" | "map" | "alphaMap" | "normalMap" | "normalScale"
  | "emissive" | "emissiveMap" | "emissiveIntensity" | "aoMap" | "aoMapIntensity" | "shininess">>;

/**
 * 조명 모델이 다른 재질 → 물리 재질 (바탕색·텍스처·투명 처리·양면만 옮기고 금속성 0). 원래 재질은 정리하지 않음
 * @returns 새 물리 재질 (텍스처는 같은 객체)
 */
export function standardFrom(source: THREE.Material): THREE.MeshStandardMaterial {
  const s = source as SurfaceValues;
  const material = new THREE.MeshStandardMaterial({
    name: source.name, color: s.color?.clone() ?? 0xffffff, map: s.map ?? null, alphaMap: s.alphaMap ?? null,
    normalMap: s.normalMap ?? null, ...(s.normalScale && { normalScale: s.normalScale.clone() }),
    emissive: s.emissive?.clone() ?? 0x000000, emissiveMap: s.emissiveMap ?? null, emissiveIntensity: s.emissiveIntensity ?? 1,
    aoMap: s.aoMap ?? null, aoMapIntensity: s.aoMapIntensity ?? 1,
    roughness: roughnessFromShininess(s.shininess), metalness: 0,
    opacity: source.opacity, transparent: source.transparent, alphaTest: source.alphaTest, side: source.side,
    depthWrite: source.depthWrite, vertexColors: source.vertexColors,
  });
  material.visible = source.visible;
  return material;
}

/** 물리 재질인지 (Standard·Physical) */
export const isStandard = (material: THREE.Material): material is THREE.MeshStandardMaterial => !!(material as THREE.MeshStandardMaterial).isMeshStandardMaterial;

/**
 * 실사 셰이딩에서 물리 재질로 바꿀 재질인지: Phong·Lambert(FBX)는 늘, unlit(MeshBasicMaterial)은 avatar.json pbr.unlit = lit일 때만
 * 물리 재질·그 밖의 재질은 그대로 둠
 */
export const convertsToStandard = (material: THREE.Material, unlit?: "keep" | "lit") =>
  (material as THREE.MeshBasicMaterial).isMeshBasicMaterial ? unlit === "lit"
    : !!(material as THREE.MeshPhongMaterial).isMeshPhongMaterial || !!(material as THREE.MeshLambertMaterial).isMeshLambertMaterial;

/**
 * avatar.json 재질 설정을 실사 재질에 반영: 바탕 맵·AO 맵(물리 재질만, 세기 = aoScale)·투명 처리·알파 테스트·양면 (그늘·경계·HighColor는 툰 전용이라 무시)
 * @param texture 모델 폴더 기준 텍스처 (linear = 색 공간 변환 없이 읽는 수치 맵)
 */
export function applyPbrSpec(material: THREE.Material, spec: MaterialSpec | undefined, texture: (file?: string, linear?: boolean) => THREE.Texture | undefined) {
  if (!spec) return;
  const map = texture(spec.map), ao = texture(spec.ao, true);
  if (map) (material as THREE.MeshStandardMaterial).map = map;
  if (ao && isStandard(material)) { material.aoMap = ao; material.aoMapIntensity = spec.aoScale ?? 1; }
  if (spec.transparent !== undefined) material.transparent = spec.transparent;
  if (spec.alphaTest !== undefined) material.alphaTest = spec.alphaTest;
  if (spec.doubleSided !== undefined) material.side = spec.doubleSided ? THREE.DoubleSide : THREE.FrontSide;
}

// ---------- 구운 AO (ao-bake.ts가 정점 속성 bakedAo를 붙임) ----------
// 셰이더 끼워 넣기는 재질을 정할 때 한 번 걸어 두고(preparePbrMaterial) define으로만 켜고 끔.
// TAA 속도 출력(taa-velocity.ts enableVelocity)은 이 끼워 넣기를 먼저 부르고 자기 것을 더함 → 둘 중 무엇을 먼저 켜도 됨
const AO_VERTEX_PARS = /* glsl */ `
#ifdef DSC_BAKED_AO
  attribute float bakedAo;
  varying float vBakedAo;
#endif
`;
const AO_VERTEX_MAIN = /* glsl */ `
#ifdef DSC_BAKED_AO
  vBakedAo = bakedAo;
#endif
`;
const AO_FRAGMENT_PARS = /* glsl */ `
#ifdef DSC_BAKED_AO
  uniform float aoStrength;
  varying float vBakedAo;
#endif
`;
// three.js aomap_fragment와 같은 방식: 간접 확산광에 곱하고, 환경광 반사는 거칠기에 맞춘 반사 차폐로 줄임
const AO_FRAGMENT_APPLY = /* glsl */ `
#ifdef DSC_BAKED_AO
  float dscBakedAo = mix( 1.0, vBakedAo, aoStrength );
  reflectedLight.indirectDiffuse *= dscBakedAo;
  #if defined( USE_ENVMAP ) && defined( STANDARD )
    reflectedLight.indirectSpecular *= computeSpecularOcclusion( saturate( dot( geometryNormal, geometryViewDir ) ), dscBakedAo, material.roughness );
  #endif
#endif
`;
const AO_FRAGMENT_DEBUG = /* glsl */ `
#ifdef DSC_BAKED_AO_DEBUG
  gl_FragColor.rgb = vec3( vBakedAo * vBakedAo );   // 확인용: AO만 회색으로 (툰 재질 TOON_BAKED_AO_DEBUG와 같은 밝기)
#endif
`;

/** 셰이더 문자열의 #include 조각 뒤에 코드 넣기 (조각이 없으면 오류: three.js 셰이더가 바뀌면 바로 알게) */
const after = (source: string, chunk: string, code: string) => {
  const include = `#include <${chunk}>`;
  if (!source.includes(include)) throw new Error(`물리 재질 셰이더에 ${include}가 없습니다`);
  return source.replace(include, include + "\n" + code);
};
/** 물리 재질 셰이더에 구운 AO 끼워 넣기 (onBeforeCompile에서 부름, 테스트는 ShaderLib.physical로 확인) */
export function injectPbrAo(shader: { vertexShader: string; fragmentShader: string }) {
  shader.vertexShader = after(AO_VERTEX_PARS + shader.vertexShader, "begin_vertex", AO_VERTEX_MAIN);
  shader.fragmentShader = after(after(AO_FRAGMENT_PARS + shader.fragmentShader, "aomap_fragment", AO_FRAGMENT_APPLY), "opaque_fragment", AO_FRAGMENT_DEBUG);
}

/** 준비한 물리 재질 → 지금 쓰는 AO uniform (켜기 전에는 null) */
const prepared = new WeakMap<THREE.Material, { uniforms: BakedAoUniforms | null }>();
const NO_AO = { value: 0 };

/**
 * 물리 재질 준비: 구운 AO 끼워 넣기를 걸어 둠 (TAA 속도 출력보다 먼저, 재질을 정할 때 한 번). 켜기 전에는 define이 없어 three.js 기본 프로그램과 같음
 */
export function preparePbrMaterial(material: THREE.MeshStandardMaterial) {
  if (prepared.has(material)) return;
  const state: { uniforms: BakedAoUniforms | null } = { uniforms: null };
  prepared.set(material, state);
  material.onBeforeCompile = (shader) => { shader.uniforms.aoStrength = state.uniforms?.aoStrength ?? NO_AO; injectPbrAo(shader); };
  material.customProgramCacheKey = () => "dsc-pbr";
}

/** AO를 받는 물리 재질인지: 준비했고, 보이고, 불투명 */
export const isPbrAoSurface = (material: THREE.Material) => prepared.has(material) && material.visible && !material.transparent;

/**
 * 물리 재질에 구운 AO 켜기 (DSC_BAKED_AO define, 다시 컴파일)
 * @param uniforms 같이 쓰는 AO uniform (aoStrength만 씀, 그림자 경계를 미는 aoShade는 툰 전용) @param debug AO만 회색으로
 */
export function enablePbrBakedAo(material: THREE.MeshStandardMaterial, uniforms: BakedAoUniforms, debug = false) {
  const state = prepared.get(material);
  if (!state) return;
  state.uniforms = uniforms;
  material.defines = { ...material.defines, DSC_BAKED_AO: "", ...(debug ? { DSC_BAKED_AO_DEBUG: "" } : {}) };
  material.needsUpdate = true;
}

/** 물리 재질의 구운 AO 끄기 (define을 빼 켜기 전과 같은 프로그램으로, uniform은 남겨 다시 켤 때 그대로 씀) */
export function disablePbrBakedAo(material: THREE.MeshStandardMaterial) {
  if (!material.defines || !("DSC_BAKED_AO" in material.defines)) return;
  const { DSC_BAKED_AO: _ao, DSC_BAKED_AO_DEBUG: _debug, ...rest } = material.defines;
  material.defines = rest;
  material.needsUpdate = true;
}

// ---------- 조명 ----------
/**
 * 실사 셰이딩 장면 준비: 내장 실내 환경광(RoomEnvironment를 PMREM으로 구움)과 Neutral 톤 매핑
 * @param options environment = 환경광 세기, exposure = 톤 매핑 노출
 * @returns 정리 함수 (환경 텍스처 해제)
 */
export function setupPbrScene(renderer: THREE.WebGLRenderer, scene: THREE.Scene, options: { environment?: number; exposure?: number } = {}) {
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = options.exposure ?? PBR_LIGHT.exposure;
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const target = pmrem.fromScene(room, 0.04);
  room.dispose();
  pmrem.dispose();
  scene.environment = target.texture;
  scene.environmentIntensity = options.environment ?? PBR_LIGHT.environment;
  return () => target.dispose();
}
