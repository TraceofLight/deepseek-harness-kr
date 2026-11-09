// 3D 모델용 자체 툰 재질 (THREE.ShaderMaterial, FBX·glTF용. VRM은 three-vrm MToonMaterial을 그대로 씀).
// 그림자: half-Lambert를 문턱값·경계 폭(smoothstep)으로 자르거나, 램프 텍스처로 색을 정함. 그림자 맵(lightmap) 채널로 문턱값·반사 마스크·램프 줄을 텍셀마다 바꿈.
// 얼굴 SDF 그림자, UTS식 HighColor, 빛 방향으로 가린 프레넬 림, 구운 AO, 외곽선은 켠 기능(define)만 셰이더에 들어감.
import * as THREE from "three";

/** 얼굴 SDF 그림자 uniform (여러 재질이 같은 객체를 같이 쓰고 매 프레임 머리·빛 방향으로 문턱값·채널을 갱신) */
export type FaceSdfUniforms = {
  faceSdfMap: THREE.IUniform<THREE.Texture | null>; faceSdfThreshold: THREE.IUniform<number>;
  faceSdfUseR: THREE.IUniform<number>; faceSdfSoft: THREE.IUniform<number>;
};
/** UTS HighColor(스페큘러 하이라이트): power = 날카로움(0~1), mask = 마스크 맵(G), onShadow = 그림자 쪽 세기, strength = 전체 세기, toon = 경계가 딱 떨어지는 툰 모드 */
export type HighColorOptions = { color: THREE.ColorRepresentation; power?: number; mask?: THREE.Texture | null; onShadow?: number; strength?: number; toon?: boolean };
/**
 * 림 라이트 (프레넬): width = 가장자리에서 안쪽으로 들어오는 폭(0~1), softness = 경계 부드러움, lightMask = 빛을 받는 쪽만 남기는 정도(0~1),
 * lightingMix = 받은 빛 세기를 따르는 정도(0 = 늘 같은 밝기)
 */
export type RimOptions = { color: THREE.ColorRepresentation; width?: number; softness?: number; lightMask?: number; lightingMix?: number };
/** 램프: map = 가로(왼쪽 그늘 → 오른쪽 빛)·세로(줄, 0 = 맨 위) 텍스처, rows = 줄 수, row = 쓸 줄 또는 "lightMap"(그림자 맵 A 채널로 텍셀마다 고름) */
export type RampOptions = { map: THREE.Texture; rows?: number; row?: number | "lightMap" };
/** 툰 재질 설정 */
export type ToonMaterialOptions = {
  name?: string;
  /** 바탕색과 바탕 맵 */
  color?: THREE.ColorRepresentation; map?: THREE.Texture | null;
  /** 그늘 색: 바탕(색 × 맵)에 곱함. 그늘 맵을 주면 바탕 대신 그늘 맵에 곱함 (램프가 없을 때만) */
  shadeColor?: THREE.ColorRepresentation; shadeMap?: THREE.Texture | null;
  /** 그림자 문턱값(half-Lambert 0~1, 이보다 어두우면 그늘)과 경계 반폭 (램프가 없을 때만) */
  shadowThreshold?: number; shadowSoftness?: number;
  /** 램프 텍스처 (있으면 문턱값·그늘 색 대신 램프가 경계와 그늘 색을 정함) */
  ramp?: RampOptions;
  /** 그림자 맵(lightmap, 수치 맵): R = HighColor 마스크, G = 문턱값 보정(0.5 = 그대로, 낮을수록 그늘), A = 램프 줄. strength = G 보정 세기 */
  lightMap?: THREE.Texture | null; lightMapStrength?: number;
  /** AO 맵(R, 1 = 막힘 없음): 막힌 만큼 그림자 쪽으로. strength = half-Lambert로 미는 최대 양 */
  occlusionMap?: THREE.Texture | null; occlusionStrength?: number;
  rim?: RimOptions;
  /** 얼굴 SDF 그림자 (createFaceSdfUniforms로 만든 공유 uniform) */
  faceSdf?: FaceSdfUniforms;
  highColor?: HighColorOptions;
  alphaTest?: number; transparent?: boolean; side?: THREE.Side;
  /** 불투명도 (기본 1) */
  opacity?: number;
  /** 접선 공간 노멀 맵과 세기 (접선은 화면 미분으로 구함) */
  normalMap?: THREE.Texture | null; normalScale?: THREE.Vector2;
  /** 발광: 조명과 무관하게 더함. emissive를 주면 켜짐 */
  emissive?: THREE.ColorRepresentation; emissiveIntensity?: number; emissiveMap?: THREE.Texture | null;
  /** 맵마다 텍스처 변환(offset·repeat·rotation, glTF KHR_texture_transform)을 적용. 값은 updateUvTransforms로 갱신 */
  uvTransforms?: boolean;
};
/** 외곽선 재질 설정: width = 두께(월드 단위), widthAttribute = 정점 속성 outlineWidth를 두께에 곱함, lightingMix = 표면 조명 결과를 따르는 정도 */
export type OutlineMaterialOptions = ToonMaterialOptions & { width: number; outlineColor?: THREE.ColorRepresentation; lightingMix?: number; widthAttribute?: boolean };

/** 그늘 색 기본값 (바탕에 곱함: 살짝 붉은 보라 쪽으로 어둡게) */
export const DEFAULT_SHADE = new THREE.Color(0.86, 0.78, 0.84);
/** 문턱값·경계 반폭 기본값 (half-Lambert 0.525에서 거의 딱 끊김) */
export const DEFAULT_SHADOW = { threshold: 0.525, softness: 0.025 } as const;

/**
 * 얼굴 SDF 그림자 uniform 만들기
 * @param map SDF 맵 (R·G = 양쪽 빛용 문턱값, 색 공간 변환 없이 읽는 맵)
 * @param softness 경계 부드러움
 */
export const createFaceSdfUniforms = (map: THREE.Texture | null, softness = 0.02): FaceSdfUniforms => ({
  faceSdfMap: { value: map }, faceSdfThreshold: { value: 0.5 }, faceSdfUseR: { value: 1 }, faceSdfSoft: { value: softness },
});

/**
 * HighColor 설정 → uniform. 지수 = 2^(11-10×power) (UTS _HighColor_Power), 툰 경계 = 1-power⁵ (툰이 아니면 -1)
 */
export function highColorUniforms(spec: HighColorOptions) {
  const power = spec.power ?? 0.7;
  return {
    highColor: { value: new THREE.Color(spec.color) }, highColorExponent: { value: Math.pow(2, 11 - 10 * power) },
    highColorOnShadow: { value: spec.onShadow ?? 0.5 }, highColorMask: { value: spec.mask ?? null },
    highColorStrength: { value: spec.strength ?? 1 }, highColorToonEdge: { value: spec.toon ? 1 - Math.pow(power, 5) : -1 },
  };
}

/** 림 설정 → uniform (기본: 폭 0.2·부드러움 0.1·빛 방향으로 가림·받은 빛을 따름) */
const rimUniforms = (rim: RimOptions) => ({
  rimColor: { value: new THREE.Color(rim.color) }, rimWidth: { value: rim.width ?? 0.2 }, rimSoftness: { value: rim.softness ?? 0.1 },
  rimLightMask: { value: rim.lightMask ?? 1 }, rimLightingMix: { value: rim.lightingMix ?? 1 },
});

/** 램프 텍스처 준비: 줄끼리 섞이지 않게 가장자리 고정·밉맵 없음 (같은 텍스처를 다시 넣어도 됨) */
export function asRampTexture(texture: THREE.Texture) {
  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  if (texture.image) texture.needsUpdate = true;   // 이미 올린 텍스처만 다시 올림 (불러오는 중이면 다 받은 뒤 올라감)
  return texture;
}

/** 텍스처 uniform → 그 텍스처 변환 행렬 uniform (uvTransforms 기능) */
const UV_TRANSFORMS = [
  ["map", "mapUvTransform"], ["shadeMap", "shadeMapUvTransform"], ["lightMap", "lightMapUvTransform"], ["occlusionMap", "occlusionMapUvTransform"],
  ["normalMap", "normalMapUvTransform"], ["emissiveMap", "emissiveMapUvTransform"],
] as const;

/** 켠 기능에만 있는 uniform (램프·그림자 맵·AO 맵·림·노멀 맵·발광·텍스처 변환) */
function featureUniforms(options: ToonMaterialOptions): Record<string, THREE.IUniform> {
  const row = options.ramp?.row;
  return {
    ...options.ramp && { rampMap: { value: options.ramp.map }, rampRows: { value: Math.max(1, options.ramp.rows ?? 1) }, rampRow: { value: typeof row === "number" ? row : 0 } },
    ...options.lightMap && { lightMap: { value: options.lightMap }, lightMapStrength: { value: options.lightMapStrength ?? 1 } },
    ...options.occlusionMap && { occlusionMap: { value: options.occlusionMap }, occlusionStrength: { value: options.occlusionStrength ?? 0.5 } },
    ...options.rim && rimUniforms(options.rim),
    ...options.normalMap && { normalMap: { value: options.normalMap }, normalScale: { value: (options.normalScale ?? new THREE.Vector2(1, 1)).clone() } },
    ...options.emissive !== undefined && { emissive: { value: new THREE.Color(options.emissive) }, emissiveIntensity: { value: options.emissiveIntensity ?? 1 }, emissiveMap: { value: options.emissiveMap ?? null } },
    ...options.uvTransforms && Object.fromEntries(UV_TRANSFORMS.map(([, transform]) => [transform, { value: new THREE.Matrix3() }])),
  };
}

/**
 * 텍스처 변환 행렬 uniform을 지금 텍스처의 offset·repeat·rotation으로 갱신
 * @param uniforms uvTransforms로 만든 툰 재질의 uniform
 */
export function updateUvTransforms(uniforms: Record<string, THREE.IUniform>) {
  for (const [map, transform] of UV_TRANSFORMS) {
    const texture = uniforms[map]?.value as THREE.Texture | null | undefined;
    if (!texture || !uniforms[transform]) continue;
    if (texture.matrixAutoUpdate) texture.updateMatrix();
    (uniforms[transform].value as THREE.Matrix3).copy(texture.matrix);
  }
}

/**
 * 툰 재질 설정 → uniform (three.js 조명·공통 uniform 포함)
 * 텍스처는 UniformsUtils.merge가 복제하지 않게 합친 뒤에 넣음. 얼굴 SDF uniform은 같은 객체를 그대로 씀
 */
export function toonUniforms(options: ToonMaterialOptions): Record<string, THREE.IUniform> {
  const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.lights]);
  Object.assign(uniforms, {
    diffuse: { value: new THREE.Color(options.color ?? 0xffffff) }, map: { value: options.map ?? null },
    shadeColor: { value: new THREE.Color(options.shadeColor ?? DEFAULT_SHADE) }, shadeMap: { value: options.shadeMap ?? null },
    shadowThreshold: { value: options.shadowThreshold ?? DEFAULT_SHADOW.threshold }, shadowSoftness: { value: Math.max(1e-4, options.shadowSoftness ?? DEFAULT_SHADOW.softness) },
  }, options.highColor ? highColorUniforms(options.highColor) : {}, options.faceSdf ?? {}, featureUniforms(options));
  uniforms.alphaTest.value = options.alphaTest ?? 0;
  uniforms.opacity.value = options.opacity ?? 1;
  return uniforms;
}

/**
 * 셰이더 기능 define (켠 기능만). three.js는 define이 다르면 다른 프로그램으로 컴파일함
 * @param outline 외곽선 재질 설정 (외곽선이 아니면 없음)
 */
export function toonDefines(options: ToonMaterialOptions, outline?: Pick<OutlineMaterialOptions, "widthAttribute">) {
  const flags: Record<string, boolean> = {
    TOON_MAP: !!options.map, TOON_SHADE_MAP: !!options.shadeMap, TOON_RAMP: !!options.ramp,
    TOON_RAMP_ROW_LIGHT_MAP: !!options.ramp && options.ramp.row === "lightMap" && !!options.lightMap,
    TOON_LIGHT_MAP: !!options.lightMap, TOON_OCCLUSION_MAP: !!options.occlusionMap, TOON_RIM: !!options.rim,
    TOON_FACE_SDF: !!options.faceSdf, TOON_HIGHCOLOR: !!options.highColor, TOON_HIGHCOLOR_MASK: !!options.highColor?.mask,
    TOON_NORMAL_MAP: !!options.normalMap, TOON_EMISSIVE: options.emissive !== undefined, TOON_EMISSIVE_MAP: options.emissive !== undefined && !!options.emissiveMap,
    TOON_UV_TRANSFORM: !!options.uvTransforms,
    OUTLINE: !!outline, OUTLINE_WIDTH_ATTRIBUTE: !!outline?.widthAttribute,
  };
  return Object.fromEntries(Object.entries(flags).filter(([, on]) => on).map(([name]) => [name, ""]));
}

const VERTEX = /* glsl */ `
// 툰 재질 정점 셰이더: 스키닝·모프는 three.js 조각, 외곽선은 법선 방향으로 부풀림 (inverted hull)
#include <common>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <normal_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
varying vec3 vViewPosition;
#ifdef TOON_BAKED_AO
  attribute float bakedAo;
  varying float vBakedAo;
#endif
#ifdef OUTLINE
  uniform float outlineWidthFactor;
  #ifdef OUTLINE_WIDTH_ATTRIBUTE
    attribute float outlineWidth;
  #endif
#endif

void main() {
  vUv = uv;
  #ifdef TOON_BAKED_AO
    vBakedAo = bakedAo;
  #endif
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  objectNormal = normalize( objectNormal );   // 외곽선 두께를 법선 길이와 무관하게
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <clipping_planes_vertex>
  vViewPosition = - mvPosition.xyz;
  #ifdef OUTLINE
    // 외곽선: 법선 방향으로 월드 단위 두께만큼 부풀림 (모델 배율만큼 보정)
    float worldNormalLength = length( transformedNormal );
    #ifdef OUTLINE_WIDTH_ATTRIBUTE
      vec3 outlineOffset = outlineWidthFactor * outlineWidth * worldNormalLength * objectNormal;
    #else
      vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;
    #endif
    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );
    gl_Position.z += 1E-6 * gl_Position.w;   // 본체와 깊이가 겹쳐 깨지는 것 방지
  #endif
}
`;

const FRAGMENT = /* glsl */ `
// 툰 재질 조각 셰이더: 직접광은 half-Lambert 문턱값(또는 램프)으로 빛·그늘 두 색, 간접광은 바탕색만, 림·발광은 더함
uniform vec3 diffuse;
uniform float opacity;
uniform vec3 shadeColor;
uniform float shadowThreshold;
uniform float shadowSoftness;
#ifdef TOON_MAP
  uniform sampler2D map;
#endif
#ifdef TOON_SHADE_MAP
  uniform sampler2D shadeMap;
#endif
#ifdef TOON_RAMP
  uniform sampler2D rampMap;
  uniform float rampRows;
  uniform float rampRow;
#endif
#ifdef TOON_LIGHT_MAP
  uniform sampler2D lightMap;
  uniform float lightMapStrength;
#endif
#ifdef TOON_OCCLUSION_MAP
  uniform sampler2D occlusionMap;
  uniform float occlusionStrength;
#endif
#ifdef TOON_RIM
  uniform vec3 rimColor;
  uniform float rimWidth;
  uniform float rimSoftness;
  uniform float rimLightMask;
  uniform float rimLightingMix;
#endif
#ifdef TOON_FACE_SDF
  uniform sampler2D faceSdfMap;
  uniform float faceSdfThreshold;
  uniform float faceSdfUseR;
  uniform float faceSdfSoft;
#endif
#ifdef TOON_HIGHCOLOR
  uniform vec3 highColor;
  uniform float highColorExponent;
  uniform float highColorOnShadow;
  uniform float highColorStrength;
  uniform float highColorToonEdge;
  #ifdef TOON_HIGHCOLOR_MASK
    uniform sampler2D highColorMask;
  #endif
#endif
#ifdef OUTLINE
  uniform vec3 outlineColor;
  uniform float outlineLightingMix;
#endif
#ifdef TOON_NORMAL_MAP
  uniform sampler2D normalMap;
  uniform vec2 normalScale;
#endif
#ifdef TOON_EMISSIVE
  uniform vec3 emissive;
  uniform float emissiveIntensity;
  #ifdef TOON_EMISSIVE_MAP
    uniform sampler2D emissiveMap;
  #endif
#endif
#ifdef TOON_BAKED_AO
  uniform float aoStrength;
  uniform float aoShade;
  varying float vBakedAo;
  // 구운 AO를 세기만큼 (1 = 막힘 없음)
  float bakedAoAmount() {
    return mix( 1.0, vBakedAo, aoStrength );
  }
#endif
// 맵마다 텍스처 변환 (glTF KHR_texture_transform). 끄면 UV 그대로
#ifdef TOON_UV_TRANSFORM
  uniform mat3 mapUvTransform;
  uniform mat3 shadeMapUvTransform;
  uniform mat3 lightMapUvTransform;
  uniform mat3 occlusionMapUvTransform;
  uniform mat3 normalMapUvTransform;
  uniform mat3 emissiveMapUvTransform;
  #define TOON_UV( transform, base ) ( ( transform * vec3( base, 1.0 ) ).xy )
#else
  #define TOON_UV( transform, base ) ( base )
#endif

#include <common>
#include <alphatest_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vUv;
varying vec3 vViewPosition;

struct ToonMaterial {
  vec3 diffuseColor;   // 빛 쪽 색 (바탕색 × 바탕 맵)
  vec3 shadeColor;     // 그늘 쪽 색 (램프가 없을 때)
  float bias;          // half-Lambert에 더하는 문턱값 보정 (그림자 맵·AO 맵·구운 AO)
  float rampV;         // 램프 세로 좌표 (줄 가운데)
  float specularMask;  // HighColor 마스크 (그림자 맵 R, 없으면 1)
};
// 조명 루프가 모으는 값: 빛을 향한 정도(림을 빛 쪽에만 남김)와 받은 빛 합(림 밝기)
float toonTowardLight = 0.0;
vec3 toonLightSum = vec3( 0.0 );

#ifdef TOON_FACE_SDF
  // 얼굴 SDF: 빛이 얼굴 정면에서 돌아간 각도(문턱값)로 SDF 맵을 잘라 경계를 정함. R·G가 모두 0인 곳(귀·목 등)은 원래 값
  float faceSdfShading( const in float shading ) {
    vec3 sdfTexel = texture2D( faceSdfMap, vUv ).rgb;
    if ( max( sdfTexel.r, sdfTexel.g ) <= 0.02 ) return shading;
    float sdfValue = mix( sdfTexel.g, sdfTexel.r, faceSdfUseR );
    return smoothstep( faceSdfThreshold - faceSdfSoft, faceSdfThreshold + faceSdfSoft, sdfValue );
  }
#endif

#ifdef TOON_NORMAL_MAP
  // 화면 미분으로 만든 접선 공간 (three.js getTangentFrame과 같음, 모델에 접선 속성이 없어도 됨)
  mat3 toonTangentFrame( const in vec3 eyePos, const in vec3 surfNormal, const in vec2 mapUv ) {
    vec3 q0 = dFdx( eyePos.xyz );
    vec3 q1 = dFdy( eyePos.xyz );
    vec2 st0 = dFdx( mapUv.st );
    vec2 st1 = dFdy( mapUv.st );
    vec3 q1perp = cross( q1, surfNormal );
    vec3 q0perp = cross( surfNormal, q0 );
    vec3 T = q1perp * st0.x + q0perp * st1.x;
    vec3 B = q1perp * st0.y + q0perp * st1.y;
    float det = max( dot( T, T ), dot( B, B ) );
    float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
    return mat3( T * scale, B * scale, surfNormal );
  }
#endif

#ifdef TOON_HIGHCOLOR
  // UTS2 HighColor: half-Lambert(N·H)를 거듭제곱(툰이면 1 - power⁵에서 딱 끊음)해 빛 색·마스크와 곱함. 그림자 쪽은 onShadow만큼
  vec3 highColorLight( const in IncidentLight directLight, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in float lit, const in float mask ) {
    float highHalfLambert = 0.5 * dot( normalize( directLight.direction + geometryViewDir ), geometryNormal ) + 0.5;
    float highAmount = highColorToonEdge >= 0.0
      ? smoothstep( highColorToonEdge - 0.005, highColorToonEdge + 0.005, highHalfLambert )
      : pow( clamp( highHalfLambert, 0.0, 1.0 ), highColorExponent );
    #ifdef TOON_HIGHCOLOR_MASK
      highAmount *= texture2D( highColorMask, vUv ).g;
    #endif
    return highColor * directLight.color * highAmount * mask * highColorStrength * mix( highColorOnShadow, 1.0, lit );
  }
#endif

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
  float halfLambert = dot( geometryNormal, directLight.direction ) * 0.5 + 0.5;
  toonTowardLight = max( toonTowardLight, halfLambert );
  toonLightSum += directLight.color;
  float shade = halfLambert + material.bias;
  float lit = smoothstep( shadowThreshold - shadowSoftness, shadowThreshold + shadowSoftness, shade );
  #ifdef TOON_FACE_SDF
    lit = faceSdfShading( lit );
  #endif
  #ifdef TOON_RAMP
    // 램프: 가로 = 보정한 half-Lambert (얼굴 SDF 영역은 SDF 결과), 세로 = 줄. 램프 색을 바탕에 곱함
    #ifdef TOON_FACE_SDF
      float rampU = faceSdfShading( shade );
    #else
      float rampU = shade;
    #endif
    vec3 surface = material.diffuseColor * texture2D( rampMap, vec2( clamp( rampU, 0.005, 0.995 ), material.rampV ) ).rgb;
  #else
    vec3 surface = mix( material.shadeColor, material.diffuseColor, lit );
  #endif
  #ifdef TOON_HIGHCOLOR
    reflectedLight.directDiffuse += highColorLight( directLight, geometryNormal, geometryViewDir, lit, material.specularMask );
  #endif
  reflectedLight.directDiffuse += directLight.color * BRDF_Lambert( surface );
}

// 간접광: 그늘 색 없이 바탕색에 받은 환경광 (구운 AO는 막힌 만큼 줄임)
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
  toonLightSum += irradiance;
  vec3 indirect = irradiance * BRDF_Lambert( material.diffuseColor );
  #ifdef TOON_BAKED_AO
    indirect *= bakedAoAmount();
  #endif
  reflectedLight.indirectDiffuse += indirect;
}

#define RE_Direct RE_Direct_Toon
#define RE_IndirectDiffuse RE_IndirectDiffuse_Toon

void main() {
  #include <clipping_planes_fragment>
  vec4 diffuseColor = vec4( diffuse, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  #ifdef TOON_MAP
    diffuseColor *= texture2D( map, TOON_UV( mapUvTransform, vUv ) );
  #endif
  #include <alphatest_fragment>

  vec3 normal = normalize( vNormal );
  #ifdef DOUBLE_SIDED
    normal *= gl_FrontFacing ? 1.0 : -1.0;
  #endif
  #ifdef TOON_NORMAL_MAP
    // 접선 공간은 뒤집기 전 법선으로 (외곽선이면 노멀 맵 법선이 뒤집기를 덮어씀)
    vec2 normalMapUv = TOON_UV( normalMapUvTransform, vUv );
    mat3 tbn = toonTangentFrame( - vViewPosition, normal, normalMapUv );
    #ifdef DOUBLE_SIDED
      tbn[0] *= gl_FrontFacing ? 1.0 : -1.0;
      tbn[1] *= gl_FrontFacing ? 1.0 : -1.0;
    #endif
  #endif
  #ifdef OUTLINE
    normal *= -1.0;   // 뒤집어 그린 면의 법선을 바깥쪽으로 되돌림
  #endif
  #ifdef TOON_NORMAL_MAP
    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;
    normal = normalize( tbn * mapN );
  #endif

  ToonMaterial material;
  material.diffuseColor = diffuseColor.rgb;
  #ifdef TOON_SHADE_MAP
    material.shadeColor = shadeColor * texture2D( shadeMap, TOON_UV( shadeMapUvTransform, vUv ) ).rgb;
  #else
    material.shadeColor = shadeColor * diffuseColor.rgb;
  #endif
  material.bias = 0.0;
  material.specularMask = 1.0;
  #ifdef TOON_LIGHT_MAP
    vec4 lightTexel = texture2D( lightMap, TOON_UV( lightMapUvTransform, vUv ) );
    material.bias += ( lightTexel.g - 0.5 ) * lightMapStrength;
    material.specularMask = lightTexel.r;
  #endif
  #ifdef TOON_OCCLUSION_MAP
    material.bias -= ( 1.0 - texture2D( occlusionMap, TOON_UV( occlusionMapUvTransform, vUv ) ).r ) * occlusionStrength;
  #endif
  #ifdef TOON_BAKED_AO
    material.bias -= aoShade * 0.5 * ( 1.0 - bakedAoAmount() );   // 막힌 곳은 그림자 쪽으로
  #endif
  #ifdef TOON_RAMP
    #ifdef TOON_RAMP_ROW_LIGHT_MAP
      float rampLine = floor( lightTexel.a * ( rampRows - 1.0 ) + 0.5 );
    #else
      float rampLine = rampRow;
    #endif
    material.rampV = 1.0 - ( clamp( rampLine, 0.0, rampRows - 1.0 ) + 0.5 ) / rampRows;   // 줄 0 = 맨 위
  #else
    material.rampV = 0.0;
  #endif

  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef TOON_RIM
    // 프레넬 림: 시선과 비껴갈수록 가장자리부터 폭만큼, 빛을 향한 쪽만 남기고(lightMask) 받은 빛만큼 밝힘(lightingMix)
    float fresnel = 1.0 - saturate( dot( normalize( vViewPosition ), normal ) );
    float rimAmount = smoothstep( 1.0 - rimWidth - rimSoftness, 1.0 - rimWidth + rimSoftness, fresnel );
    rimAmount *= mix( 1.0, smoothstep( 0.5, 1.0, toonTowardLight ), rimLightMask );
    col += rimColor * rimAmount * mix( vec3( 1.0 ), toonLightSum * RECIPROCAL_PI, rimLightingMix );
  #endif

  #ifdef TOON_EMISSIVE
    vec3 totalEmissive = emissive * emissiveIntensity;
    #ifdef TOON_EMISSIVE_MAP
      totalEmissive *= texture2D( emissiveMap, TOON_UV( emissiveMapUvTransform, vUv ) ).rgb;
    #endif
    col += totalEmissive;
  #endif

  #ifdef OUTLINE
    col = outlineColor * mix( vec3( 1.0 ), col, outlineLightingMix );   // 외곽선 색에 표면 조명 결과를 섞음
  #endif
  #ifdef TOON_BAKED_AO_DEBUG
    col = vec3( vBakedAo * vBakedAo );   // 확인용: AO만 회색으로 (출력 sRGB 변환을 대략 되돌려 화면 밝기 ≈ AO 값)
  #endif
  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif
  gl_FragColor = vec4( col, diffuseColor.a );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <premultiplied_alpha_fragment>
}
`;

/**
 * 툰 재질 만들기 (스키닝·모프 위치·모프 법선·클리핑·알파 테스트·색 공간·톤 매핑은 three.js 셰이더 조각 그대로)
 * @param defines 기능 define (외곽선이면 외곽선 define 포함)
 */
function buildMaterial(options: ToonMaterialOptions, uniforms: Record<string, THREE.IUniform>, defines: Record<string, string>) {
  const material = new THREE.ShaderMaterial({
    vertexShader: VERTEX, fragmentShader: FRAGMENT, uniforms, defines, lights: true, clipping: true,
    transparent: !!options.transparent, alphaTest: options.alphaTest ?? 0, side: options.side ?? THREE.FrontSide,
  });
  material.name = options.name ?? "";
  return material;
}

/** 표면 툰 재질 만들기 */
export const createToonMaterial = (options: ToonMaterialOptions = {}) => buildMaterial(options, toonUniforms(options), toonDefines(options));

/**
 * 외곽선 재질 만들기: 뒷면만 법선 방향으로 부풀려 그리고, 표면 조명 결과를 lightingMix만큼 외곽선 색에 곱함
 * 표면 설정(map·alphaTest 등)은 툰 재질과 같음
 */
export function createOutlineMaterial(options: OutlineMaterialOptions) {
  const uniforms = toonUniforms(options);
  Object.assign(uniforms, {
    outlineWidthFactor: { value: options.width }, outlineColor: { value: new THREE.Color(options.outlineColor ?? 0x000000) },
    outlineLightingMix: { value: options.lightingMix ?? 1 },
  });
  return buildMaterial({ ...options, side: THREE.BackSide }, uniforms, toonDefines(options, options));
}

/** 구운 AO uniform (여러 재질이 같은 객체를 같이 쓰고 매 프레임 설정 화면 세기로 갱신): aoStrength = 세기(0~1), aoShade = 막힌 만큼 그림자 쪽으로 미는 정도 */
export type BakedAoUniforms = { aoStrength: THREE.IUniform<number>; aoShade: THREE.IUniform<number> };
/** 구운 AO uniform 만들기 */
export const createBakedAoUniforms = (strength: number, shade: number): BakedAoUniforms => ({ aoStrength: { value: strength }, aoShade: { value: shade } });
/**
 * 표면 툰 재질에 구운 AO 켜기 (TOON_BAKED_AO: 정점 속성 bakedAo로 간접광을 줄이고 그림자 경계를 밈). 처음 그리기 전에 불러야 함
 * 켜지 않은 재질은 define·uniform이 그대로라 예전과 같은 프로그램. 외곽선 재질은 켜지 않음
 * @param uniforms 같이 쓰는 AO uniform @param debug true면 AO만 회색으로 그림 (TOON_BAKED_AO_DEBUG, 확인용)
 */
export function enableBakedAo(material: THREE.ShaderMaterial, uniforms: BakedAoUniforms, debug = false) {
  if ("OUTLINE" in material.defines) return;
  material.defines.TOON_BAKED_AO = "";
  if (debug) material.defines.TOON_BAKED_AO_DEBUG = "";
  Object.assign(material.uniforms, uniforms);
  material.needsUpdate = true;
}

/**
 * 구운 AO 끄기: enableBakedAo로 넣은 define을 빼 처음부터 AO를 끈 재질과 같은 프로그램으로 다시 컴파일 (uniform·정점 속성은 남겨 다시 켤 때 굽지 않음)
 */
export function disableBakedAo(material: THREE.ShaderMaterial) {
  if (!("TOON_BAKED_AO" in material.defines)) return;
  delete material.defines.TOON_BAKED_AO;
  delete material.defines.TOON_BAKED_AO_DEBUG;
  material.needsUpdate = true;
}

/** 재질의 바탕 맵 (툰 재질은 uniform, three.js 기본 재질은 map 속성) */
export const mapOf = (material: THREE.Material): THREE.Texture | null =>
  (material as THREE.MeshBasicMaterial).map ?? (material as THREE.ShaderMaterial).uniforms?.map?.value ?? null;

/** 자체 툰 재질인지 (그림자 문턱값 uniform으로 알아봄, MToon 등 다른 ShaderMaterial과 구분) */
export const isToonMaterial = (material: THREE.Material) => !!(material as THREE.ShaderMaterial).uniforms?.shadowThreshold;
