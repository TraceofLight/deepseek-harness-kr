// avatar.json 재질 설정·glTF 재질 → 자체 툰 재질 설정 (toon-material.ts ToonMaterialOptions). rig-three.ts가 재질을 바꿀 때 씀.
// 예전 avatar.json 키(N·L 기준 shadingShift·shadingToony, 경계를 미는 ao, 림 power)는 같은 경계·굵기가 되게 바꿔 읽음.
import * as THREE from "three";
import { asRampTexture, DEFAULT_SHADE, type FaceSdfUniforms, type RimOptions, type ToonMaterialOptions } from "./toon-material.ts";
import type { AvatarProfile, MaterialSpec } from "./rig-three.ts";

/** 폴더 기준 텍스처 (linear = 색 공간 변환 없이 읽는 수치 맵) */
type TextureOf = (file?: string, linear?: boolean) => THREE.Texture | undefined;
/**
 * avatar.json 재질 설정 → 툰 그림자 설정 (문턱값·경계 반폭·램프·그림자 맵·AO 맵·HighColor)
 * 예전 키는 같은 경계가 되게 바꿈: 문턱값 = 0.5 − (shadingShift + aoScale)/2, 경계 반폭 = (1 − shadingToony)/2, AO 세기 = aoScale/2
 * (예전엔 N·L에 shadingShift와 AO 맵 R × aoScale을 더했고, 지금은 half-Lambert에서 AO가 어두운 만큼 뺌)
 * @param texture 폴더 기준 텍스처 (linear = 색 공간 변환 없이 읽는 수치 맵)
 */
export function toonShadowOptions(spec: MaterialSpec | undefined, texture: TextureOf):
  Pick<ToonMaterialOptions, "shadowThreshold" | "shadowSoftness" | "ramp" | "lightMap" | "lightMapStrength" | "occlusionMap" | "occlusionStrength" | "highColor"> {
  const occlusionMap = texture(spec?.ao, true), occlusionStrength = occlusionMap ? (spec?.aoScale ?? 1) / 2 : 0;
  const rampMap = texture(spec?.ramp?.map);
  return {
    shadowThreshold: spec?.shadowThreshold ?? 0.5 - (spec?.shadingShift ?? -0.05) / 2 - occlusionStrength,
    shadowSoftness: spec?.shadowSoftness ?? (1 - (spec?.shadingToony ?? 0.95)) / 2,
    ...(rampMap && { ramp: { map: asRampTexture(rampMap), rows: spec?.ramp?.rows, row: spec?.ramp?.row } }),
    ...(spec?.lightMap && { lightMap: texture(spec.lightMap, true), lightMapStrength: spec.lightMapStrength }),
    ...(occlusionMap && { occlusionMap, occlusionStrength }),
    highColor: spec?.highColor && { ...spec.highColor, mask: texture(spec.highColor.mask, true) },
  };
}
/**
 * avatar.json 림 → 툰 림 설정. width가 없으면 예전 power 곡선 (1−N·V)^power가 절반이 되는 곳을 폭으로
 * @param screen 화면 공간 림 (TAA 깊이 uniform·옆 깊이를 읽을 거리, 없거나 mode = fresnel이면 프레넬 림)
 */
export const toonRimOptions = (rim: AvatarProfile["rim"], screen?: RimOptions["screen"]): ToonMaterialOptions["rim"] => rim && {
  color: rim.color, width: rim.width ?? 1 - Math.pow(0.5, 1 / (rim.power ?? 4)), softness: rim.softness, lightMask: rim.lightMask, lightingMix: rim.mix ?? 0.5,
  ...(screen && rim.mode !== "fresnel" && { screen }),
};
/**
 * avatar.json 재질 설정 → 툰 재질 설정 (FBX: 맵은 모두 avatar.json에서. 그늘 맵이 없으면 바탕 × 기본 그늘 색)
 * @param texture 폴더 기준 텍스처 (linear = 색 공간 변환 없이 읽는 수치 맵)
 * @param rim 툰 림 설정 (toonRimOptions, 없으면 림 없음)
 * @param faceSdf 이 재질이 얼굴 SDF 재질이면 공유 uniform
 */
export function toonOptionsOf(name: string, spec: MaterialSpec, texture: TextureOf,
  rim?: ToonMaterialOptions["rim"], faceSdf?: FaceSdfUniforms): ToonMaterialOptions {
  const shadeMap = texture(spec.shade);
  return {
    name, map: texture(spec.map), shadeColor: shadeMap ? 0xffffff : DEFAULT_SHADE, shadeMap,
    ...toonShadowOptions(spec, texture),
    transparent: !!spec.transparent, alphaTest: spec.alphaTest ?? 0, side: spec.doubleSided ? THREE.DoubleSide : THREE.FrontSide,
    rim, faceSdf,
  };
}
/** glTF 재질에서 읽는 값 (MeshStandardMaterial·MeshPhysicalMaterial·MeshBasicMaterial이 같은 이름으로 가짐) */
type SurfaceValues = THREE.Material & Partial<Pick<THREE.MeshStandardMaterial, "color" | "map" | "normalMap" | "normalScale" | "emissive" | "emissiveMap" | "emissiveIntensity" | "aoMap">>;

/** 텍스처에 변환(KHR_texture_transform)이 걸렸는지 */
const transformed = (texture?: THREE.Texture | null) => !!texture && (texture.offset.x !== 0 || texture.offset.y !== 0 || texture.repeat.x !== 1 || texture.repeat.y !== 1 || texture.rotation !== 0);

/**
 * glTF 재질 → 툰 재질 설정: 바탕색·바탕 맵·노멀 맵·발광·투명 처리를 옮기고, 그늘은 바탕 × 기본 그늘 색. glTF AO 맵(occlusion)은 그림자 쪽으로 미는 AO 맵으로
 * avatar.json 재질 설정이 있으면 그 값(맵·그늘 맵·문턱값·램프·그림자 맵·AO 맵·HighColor·투명 처리·양면)이 먼저
 * @param texture 모델 폴더 기준 텍스처 (linear = 색 공간 변환 없이 읽는 수치 맵)
 * @param rim 툰 림 설정 (toonRimOptions) @param faceSdf 얼굴 SDF 재질이면 공유 uniform
 */
export function toonOptionsFromSurface(source: THREE.Material, spec: MaterialSpec | undefined, texture: TextureOf,
  rim?: ToonMaterialOptions["rim"], faceSdf?: FaceSdfUniforms): ToonMaterialOptions {
  const s = source as SurfaceValues;
  const color = s.color ?? new THREE.Color(0xffffff);
  const map = texture(spec?.map) ?? s.map ?? null, shadeMap = texture(spec?.shade);
  const emissive = s.emissive && (s.emissiveMap || s.emissive.getHex() !== 0) ? s.emissive : undefined;
  const shadow = toonShadowOptions(spec, texture);
  return {
    name: source.name, color, map, opacity: source.opacity,
    shadeColor: shadeMap ? 0xffffff : DEFAULT_SHADE, shadeMap,
    ...shadow,
    ...(!shadow.occlusionMap && s.aoMap && { occlusionMap: s.aoMap, occlusionStrength: 0.5 }),
    ...(s.normalMap && { normalMap: s.normalMap, normalScale: s.normalScale }),
    ...(emissive && { emissive, emissiveIntensity: s.emissiveIntensity ?? 1, emissiveMap: s.emissiveMap ?? null }),
    transparent: spec?.transparent ?? source.transparent, alphaTest: spec?.alphaTest ?? source.alphaTest,
    side: spec?.doubleSided === undefined ? source.side : spec.doubleSided ? THREE.DoubleSide : THREE.FrontSide,
    rim, faceSdf,
    uvTransforms: [map, s.normalMap, s.emissiveMap, s.aoMap].some(transformed),
  };
}
