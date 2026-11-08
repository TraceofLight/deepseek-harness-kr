// 3D 모델(FBX) 렌더러. three.js FBXLoader로 모델을 불러와 MToon 재질로 그리고, 동작 코드가 쓰는 채널을 뼈·모프로 옮김.
// 모델 파일과 모델별 대응표(avatar.json)는 저장소 밖 사용자 폴더에 있고, 플러그인 호스트가 /deepseek-harness-kr/avatar/로 서빙함.
// 이 파일은 따로 묶여(assets/vendor/rig-three.js) 3D 모델을 켰을 때만 불러옴 (window.DscRigThree).
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { MToonMaterial } from "@pixiv/three-vrm-materials-mtoon";
import { PARAMS } from "./model-profile.ts";
import { OUTFIT_ITEMS } from "../shared/settings.js";
import type { Lifetime } from "./lifetime.ts";
import type { AvatarRig, RigFeature, RigMetrics, TouchShape } from "./rig.ts";

/** 동작 코드가 움직이는 사람형 뼈 이름 (VRM 사람형 뼈 이름과 같음) */
export type HumanBone = "hips" | "spine" | "chest" | "neck" | "head" | "leftEye" | "rightEye"
  | "leftUpperArm" | "rightUpperArm" | "leftLowerArm" | "rightLowerArm" | "leftHand" | "rightHand"
  | "leftUpperLeg" | "rightUpperLeg" | "leftLowerLeg" | "rightLowerLeg" | "leftFoot" | "rightFoot";
/** 채널 값 → 모프 세기 변환. linear = 값×scale, invert = (1-값)×scale, positive·negative = 양수·음수 쪽만 */
export type MorphBinding = { morph: string; map?: "linear" | "invert" | "positive" | "negative"; scale?: number };
/** 모델 폴더의 avatar.json 형식 (모델별 대응표) */
export type AvatarProfile = {
  /** 모델 파일 (폴더 기준 상대 경로, FBX) */
  model: string;
  /** 숨길 오브젝트 이름 (외곽선용 복제 메시 등) */
  hide?: string[];
  /** 재질 이름 → MToon 설정 (텍스처는 폴더 기준 상대 경로) */
  materials?: Record<string, { map?: string; shade?: string; alphaTest?: number; transparent?: boolean; shadingShift?: number; shadingToony?: number; hidden?: boolean; doubleSided?: boolean }>;
  /** 사람형 뼈 → 모델 뼈 이름 */
  bones: Partial<Record<HumanBone, string>>;
  /** 의미 채널(PARAMS 키, 모음은 mouthVowel.A 등) → 모프 대응 */
  channels?: Record<string, MorphBinding[]>;
  /** 표정 이름 → 모프 세기 (0~1) */
  expressions?: Record<string, Record<string, number>>;
  /** 소품·옷 키(shared/settings.js) → 모프 (invert면 켰을 때 0, 껐을 때 1 = 숨김 모프) */
  outfit?: Record<string, Array<{ morph: string; invert?: boolean }>>;
  /** 늘 걸어 두는 모프 (기본 옷차림 등) */
  baseMorphs?: Record<string, number>;
  /** 기본 자세: 위팔을 아래로 내리는 정도(도, 0이면 그대로) */
  armDown?: number;
  /** 지원하는 기능 (기본은 없음) */
  features?: RigFeature[];
  /** 외곽선 (MToon 외곽선): width = 모델 키 대비 두께, color = 선 색, skip = 외곽선을 빼는 재질 이름 */
  outline?: { width: number; color?: string; skip?: string[] };
  /** 림 라이트: color = 색, power = 가장자리에 모이는 정도(클수록 얇음), mix = 조명 영향 */
  rim?: { color: string; power?: number; mix?: number };
  /** 몸 애니메이션 (폴더 기준 FBX): idle = 대기 반복 클립, gestures = 몸짓 이름(동작 코드의 play) → 클립 */
  animations?: { idle?: string; gestures?: Record<string, string> };
  /** 흔들림(스프링) 사슬: roots 아래 모든 뼈. stiffness = 제자리로 돌아오는 힘, drag = 감쇠(0~1), gravity = 아래로 끄는 힘 */
  springs?: Array<{ roots: string[]; stiffness?: number; drag?: number; gravity?: number }>;
};

const DEG = Math.PI / 180;
/** 값 자르기 */
const clamp = (value: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, value));

// 동작 코드는 Live2D 파라미터 ID(PARAMS 값)·소품 ID로 쓰므로 의미 이름으로 되찾는 표
const CHANNEL_OF: Record<string, string> = {};
for (const [key, id] of Object.entries(PARAMS)) {
  if (typeof id === "string") CHANNEL_OF[id] = key;
  else if (Array.isArray(id)) for (const each of id) CHANNEL_OF[each] = key;
  else for (const [vowel, vowelId] of Object.entries(id as Record<string, string>)) CHANNEL_OF[vowelId] = `mouthVowel.${vowel}`;
}
const OUTFIT_OF: Record<string, { key: string; on: number }> = {};
for (const item of OUTFIT_ITEMS) if (item.param) OUTFIT_OF[item.param] = { key: item.key, on: item.on || 1 };

/** 모프 이름의 마지막 부분 (FBX는 "Facials.Eye_Close"처럼 묶음 이름이 붙음) */
export const morphKey = (name: string) => name.slice(name.lastIndexOf(".") + 1);
/**
 * 동작 코드가 쓴 채널 ID의 저장 키
 * @param id PARAMS 값(Live2D 파라미터 ID) 또는 소품 정의의 ID
 * @returns 의미 이름(모음은 mouthVowel.A 등, 소품은 outfit.<키>), 모르는 ID는 null
 */
export const channelKeyOf = (id: string) => CHANNEL_OF[id] || (OUTFIT_OF[id] ? "outfit." + OUTFIT_OF[id].key : null);
/**
 * 채널 값 하나를 모프 세기로 변환
 * @param value 이번 프레임 채널 값
 * @returns 모프에 더할 세기 (자르기 전)
 */
export const bindingWeight = (binding: MorphBinding, value: number) => {
  const scale = binding.scale ?? 1;
  switch (binding.map || "linear") {
    case "invert": return (1 - value) * scale;
    case "positive": return Math.max(0, value) * scale;
    case "negative": return Math.max(0, -value) * scale;
    default: return value * scale;
  }
};

/** 흔들림 사슬 하나의 설정: roots 아래 모든 뼈. stiffness = 제자리로 돌아오는 힘, drag = 감쇠(0~1), gravity = 아래로 끄는 힘 */
export type SpringSpec = { roots: THREE.Object3D[]; stiffness?: number; drag?: number; gravity?: number };
/**
 * 흔들림(스프링) 뼈 준비: 뼈마다 끝점(자식 뼈 위치)이 관성·복원력·중력으로 따라가고, 뼈를 끝점 쪽으로 돌림 (VRM 스프링 본과 같은 방식)
 * 힘은 뼈 길이에 비례해 모델 단위(cm·m)와 무관. 부르기 전에 뼈의 월드 행렬이 지금 자세로 갱신돼 있어야 함
 * @returns step(dt): 사슬 위쪽부터 한 프레임 진행
 */
export function createSprings(specs: SpringSpec[]) {
  type Joint = { node: THREE.Object3D; restLocal: THREE.Quaternion; axis: THREE.Vector3; length: number; prev: THREE.Vector3; tail: THREE.Vector3; stiffness: number; drag: number; gravity: number };
  const joints: Joint[] = [];
  const head = new THREE.Vector3(), restDir = new THREE.Vector3(), next = new THREE.Vector3(), inertia = new THREE.Vector3(), turn = new THREE.Quaternion(), parentQ = new THREE.Quaternion();
  for (const spec of specs) for (const root of spec.roots) {
    root.updateWorldMatrix(true, true);
    root.traverse((node) => {
      const child = node.children.find((each) => (each as THREE.Bone).isBone);
      if (!child || child.position.lengthSq() < 1e-12) return;
      const tail = child.getWorldPosition(new THREE.Vector3());
      joints.push({ node, restLocal: node.quaternion.clone(), axis: child.position.clone().normalize(), length: tail.distanceTo(node.getWorldPosition(head)),
        prev: tail.clone(), tail, stiffness: spec.stiffness ?? 1, drag: spec.drag ?? 0.4, gravity: spec.gravity ?? 0 });
    });
  }
  return {
    count: joints.length,
    /** 한 프레임 진행 @param dt 초 */
    step(dt: number) {
      for (const joint of joints) {
        const { node } = joint;
        node.quaternion.copy(joint.restLocal);
        node.parent!.getWorldQuaternion(parentQ);
        node.getWorldPosition(head);
        restDir.copy(joint.axis).applyQuaternion(turn.copy(parentQ).multiply(joint.restLocal));   // 기본 자세의 뼈 방향 (월드)
        // 다음 끝점 = 지금 끝점 + 관성(감쇠) + 제자리 방향으로 당기는 힘 + 중력
        inertia.copy(joint.tail).sub(joint.prev).multiplyScalar(1 - joint.drag);
        next.copy(joint.tail).add(inertia).addScaledVector(restDir, joint.stiffness * dt * joint.length * 10);
        next.y -= joint.gravity * dt * joint.length * 10;
        next.sub(head).normalize().multiplyScalar(joint.length).add(head);   // 뼈 길이 유지
        joint.prev.copy(joint.tail); joint.tail.copy(next);
        turn.setFromUnitVectors(restDir, next.clone().sub(head).normalize());
        node.quaternion.copy(parentQ.clone().invert().multiply(turn).multiply(parentQ).multiply(joint.restLocal));
        node.updateMatrixWorld(true);
      }
    },
  };
}

/**
 * 3D rig 생성: avatar.json과 모델을 불러와 캔버스에 그릴 준비
 * @param base 모델 폴더 주소 (끝에 /)
 * @param pet 펫 창(전신)이면 true, 창 안(상반신)이면 false
 * @returns rig, 불러오는 사이 꺼졌으면 null
 */
export async function createThreeRig({ base, life, canvas, W, H, pet }: {
  base: string; life: Lifetime; canvas: HTMLCanvasElement; W: number; H: number; pet: boolean;
}): Promise<AvatarRig | null> {
  const profile = await (await fetch(base + "avatar.json")).json() as AvatarProfile;
  const textureLoader = new THREE.TextureLoader();
  const loader = new FBXLoader();
  const root = await loader.loadAsync(base + profile.model);
  if (life.stopped) return null;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, premultipliedAlpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  scene.add(root);
  const light = new THREE.DirectionalLight(0xffffff, 2.2);
  light.position.set(0.6, 1.2, 1.6);
  scene.add(light, new THREE.AmbientLight(0xffffff, 0.9));
  life.add(() => {
    root.traverse((node) => {
      const mesh = node as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
      for (const material of ([] as THREE.Material[]).concat(mesh.material || [])) material.dispose();
    });
    renderer.dispose();
  });

  // ---------- 재질: MToon으로 바꾸고 숨길 것은 숨김 ----------
  const textures = new Map<string, THREE.Texture>();
  /** 폴더 기준 텍스처 (같은 파일은 한 번만) */
  const texture = (file?: string) => {
    if (!file) return undefined;
    let found = textures.get(file);
    if (!found) { found = textureLoader.load(base + file); found.colorSpace = THREE.SRGBColorSpace; textures.set(file, found); life.add(() => found!.dispose()); }
    return found;
  };
  const hidden = new Set(profile.hide || []);
  root.traverse((node) => {
    if (hidden.has(node.name)) node.visible = false;
    const mesh = node as THREE.Mesh;
    if (!mesh.isMesh) return;
    mesh.frustumCulled = false;   // 뼈로 움직인 메시가 경계 밖으로 잘리지 않게
    const swap = (material: THREE.Material) => {
      const spec = profile.materials?.[material.name];
      if (!spec) return material;
      const toon = new MToonMaterial({
        ...(spec.map ? { map: texture(spec.map) } : {}), ...(spec.shade ? { shadeMultiplyTexture: texture(spec.shade) } : {}),
        shadeColorFactor: new THREE.Color(1, 1, 1),
        shadingShiftFactor: spec.shadingShift ?? -0.05, shadingToonyFactor: spec.shadingToony ?? 0.95,
        transparent: !!spec.transparent, alphaTest: spec.alphaTest ?? 0,
        side: spec.doubleSided ? THREE.DoubleSide : THREE.FrontSide,
        ...(profile.rim ? { parametricRimColorFactor: new THREE.Color(profile.rim.color), parametricRimFresnelPowerFactor: profile.rim.power ?? 4, rimLightingMixFactor: profile.rim.mix ?? 0.5 } : {}),
      });
      toon.name = material.name;
      toon.visible = !spec.hidden;
      material.dispose();
      return toon;
    };
    mesh.material = Array.isArray(mesh.material) ? mesh.material.map(swap) : swap(mesh.material);
  });

  // ---------- 외곽선: 같은 뼈·모프를 쓰는 복제 메시에 MToon 외곽선 재질(뒤집어 부풀려 그림) ----------
  if (profile.outline) {
    const height = new THREE.Box3().setFromObject(root).getSize(new THREE.Vector3()).y;
    const skip = new Set(profile.outline.skip || []);
    const outlineMaterial = (source: THREE.Material) => {
      const material = new MToonMaterial({
        isOutline: true, outlineWidthMode: "worldCoordinates", outlineWidthFactor: profile.outline!.width * height,
        outlineColorFactor: new THREE.Color(profile.outline!.color || "#2b2430"), outlineLightingMixFactor: 0.3, side: THREE.BackSide,
        alphaTest: (source as THREE.Material & { alphaTest?: number }).alphaTest ?? 0,
        ...((source as MToonMaterial).map ? { map: (source as MToonMaterial).map! } : {}),
      });
      material.visible = source.visible && !skip.has(source.name);
      life.add(() => material.dispose());
      return material;
    };
    const meshes: THREE.SkinnedMesh[] = [];
    root.traverse((node) => { const mesh = node as THREE.SkinnedMesh; if (mesh.isSkinnedMesh && mesh.visible && !hidden.has(mesh.parent?.name || "")) meshes.push(mesh); });
    for (const mesh of meshes) {
      const materials = ([] as THREE.Material[]).concat(mesh.material);
      const outline = new THREE.SkinnedMesh(mesh.geometry, Array.isArray(mesh.material) ? materials.map(outlineMaterial) : outlineMaterial(materials[0]));
      outline.bind(mesh.skeleton, mesh.bindMatrix);
      outline.morphTargetInfluences = mesh.morphTargetInfluences;   // 같은 배열을 써서 표정·옷 모프를 그대로 따름
      outline.morphTargetDictionary = mesh.morphTargetDictionary;
      outline.frustumCulled = false; outline.renderOrder = -1;
      outline.name = mesh.name + "__outline";
      mesh.parent!.add(outline);
      outline.position.copy(mesh.position); outline.quaternion.copy(mesh.quaternion); outline.scale.copy(mesh.scale);
    }
  }

  // ---------- 뼈 ----------
  const byName = new Map<string, THREE.Object3D>();
  root.traverse((node) => { if (!byName.has(node.name)) byName.set(node.name, node); });
  // 모델의 원래 지역 회전 (애니메이션 클립을 옮길 때 기준, 팔 내림 보정 전)
  const bindLocal = new Map<string, THREE.Quaternion>();
  for (const [name, node] of byName) bindLocal.set(name, node.quaternion.clone());
  const bone = (name: HumanBone) => { const id = profile.bones[name]; return id ? byName.get(id) || null : null; };
  root.updateMatrixWorld(true);
  const worldOf = (node: THREE.Object3D | null) => node ? node.getWorldPosition(new THREE.Vector3()) : null;
  /** 월드 축 기준 회전(delta)을 뼈의 지역 회전에 반영: L' = L × (W⁻¹ × D × W) */
  const turnWorld = (node: THREE.Object3D, delta: THREE.Quaternion, restLocal: THREE.Quaternion, restWorld: THREE.Quaternion) => {
    node.quaternion.copy(restLocal).multiply(restWorld.clone().invert().multiply(delta).multiply(restWorld));
  };
  // 기본 자세: T자로 벌린 위팔을 몸 옆으로 내림 (뼈 방향으로 계산해 모델 축과 무관)
  const hipsPos = worldOf(bone("hips")) || new THREE.Vector3();
  for (const side of ["left", "right"] as const) {
    const upper = bone(`${side}UpperArm`), lower = bone(`${side}LowerArm`);
    if (!upper || !lower || !profile.armDown) continue;
    const from = worldOf(lower)!.sub(worldOf(upper)!).normalize();
    const out = Math.sign(worldOf(upper)!.x - hipsPos.x) || 1;
    const angle = profile.armDown * DEG;
    const target = new THREE.Vector3(out * Math.cos(angle), -Math.sin(angle), 0.08).normalize();
    const delta = new THREE.Quaternion().setFromUnitVectors(from, target);
    turnWorld(upper, delta, upper.quaternion.clone(), upper.getWorldQuaternion(new THREE.Quaternion()));
    root.updateMatrixWorld(true);
  }
  // 채널을 덧씌우는 뼈의 바탕 자세 (애니메이션이 정한 자세, 없으면 기본 자세). 매 프레임 여기서 시작해 덧씌움이 쌓이지 않게 함
  // AnimationMixer는 값이 직전 프레임과 같으면 뼈에 쓰지 않으므로, 기본 자세가 아니라 직전 바탕 자세로 되돌려야 함
  // (기본 자세로 되돌리면 클립 값이 몇 프레임 그대로인 구간에서 뼈가 기본 자세로 튐)
  const MOVED: HumanBone[] = ["hips", "spine", "chest", "neck", "head", "leftEye", "rightEye"];
  const basePose = new Map<THREE.Object3D, THREE.Quaternion>();
  for (const name of MOVED) { const node = bone(name); if (node) basePose.set(node, node.quaternion.clone()); }

  // ---------- 크기·카메라 ----------
  const box = new THREE.Box3().setFromObject(root);
  const top = box.max.y, bottom = box.min.y, fullH = top - bottom;
  const shoulders = (() => { const l = worldOf(bone("leftUpperArm")), r = worldOf(bone("rightUpperArm")); return l && r ? l.distanceTo(r) : fullH * 0.2; })();
  const bodyWidthWorld = shoulders * 2.1;
  const centerX = (worldOf(bone("head")) || hipsPos).x;
  const cutY = top - fullH * 0.47;   // 창 안은 허리 위만 (Live2D 모델의 상반신 잘림선과 같은 비율)
  const bustScale = Math.min((W * 0.98) / bodyWidthWorld, (H * 0.95) / (top - cutY));
  const fullScale = Math.min((W * 0.98) / bodyWidthWorld, (H * 0.95) / fullH);
  const scale = pet ? fullScale : bustScale;   // 캔버스 px / 월드 단위
  const camera = new THREE.OrthographicCamera(-W / 2 / scale, W / 2 / scale, H / 2 / scale, -H / 2 / scale, -100 * fullH, 100 * fullH);
  // 모델 위 끝이 캔버스 y = H×0.05, 가로 가운데가 캔버스 가운데에 오게
  const camTop = top + (H * 0.05) / scale;
  camera.position.set(centerX, camTop - H / 2 / scale, 10 * fullH);
  camera.lookAt(centerX, camTop - H / 2 / scale, 0);
  camera.updateMatrixWorld(true);
  const projected = new THREE.Vector3();
  /** 월드 좌표 → 캔버스(배율 1) 좌표 */
  const toCanvas = (point: THREE.Vector3) => { projected.copy(point).project(camera); return { x: (projected.x + 1) / 2 * W, y: (1 - projected.y) / 2 * H }; };
  const headPos = worldOf(bone("head")) || new THREE.Vector3(centerX, top - fullH * 0.1, 0);
  const PET_BUBBLE = 150;
  const metrics: RigMetrics = {
    W, H, visW: bodyWidthWorld * scale, noseX: toCanvas(headPos).x, chibiHeadDrop: 0, walkBodyWidth: bodyWidthWorld * scale,
    waistPet: H * 0.05 + (top - cutY) * fullScale, waistWin: H * 0.05 + (top - cutY) * bustScale, waistPct: (H * 0.05 + (top - cutY) * fullScale) / H * 100,
    petHeadRatio: bustScale / fullScale, headGain: bustScale / scale,
    petKMin: 0.45, petKMax: Math.max(1.2, ((typeof screen !== "undefined" && screen.availHeight ? screen.availHeight : 1080) - PET_BUBBLE) / H), petBubble: PET_BUBBLE,
    petBustOffset: 0,
  };

  // ---------- 모프 ----------
  const morphSlots = new Map<string, Array<[THREE.Mesh, number]>>();
  root.traverse((node) => {
    const mesh = node as THREE.Mesh;
    if (!mesh.isMesh || !mesh.morphTargetDictionary) return;
    for (const [name, index] of Object.entries(mesh.morphTargetDictionary)) {
      const key = morphKey(name);
      (morphSlots.get(key) || morphSlots.set(key, []).get(key)!).push([mesh, index]);
    }
  });

  // ---------- 몸 애니메이션 ----------
  const springRoots = new Set<THREE.Object3D>();
  for (const spec of profile.springs || []) for (const id of spec.roots) { const node = byName.get(id); if (node) springRoots.add(node); }
  const springBones = new Set<THREE.Object3D>();
  for (const node of springRoots) node.traverse((child) => { springBones.add(child); });
  /**
   * 클립 불러오기: 모델에 있는 뼈의 회전 트랙만 (흔들림 뼈·위치·모프 트랙은 뺌)
   * 다른 도구(UE 등)가 내보낸 클립은 좌표 변환이 기본 자세에 섞여 있어, 뼈마다 기본 자세 차이를 빼서 옮김:
   * 모델 회전 = 모델 기본 자세 × (클립 기본 자세)⁻¹ × 클립 회전
   */
  const loadClip = async (file: string) => {
    const source = await loader.loadAsync(base + file);
    const clip = source.animations[0];
    if (!clip) return null;
    const clipBind = new Map<string, THREE.Quaternion>();
    source.traverse((node) => { if (!clipBind.has(node.name)) clipBind.set(node.name, node.quaternion.clone()); });
    const q = new THREE.Quaternion(), offset = new THREE.Quaternion();
    clip.tracks = clip.tracks.filter((track) => {
      const dot = track.name.lastIndexOf("."), name = track.name.slice(0, dot), node = byName.get(name);
      if (track.name.slice(dot) !== ".quaternion" || !node || springBones.has(node)) return false;
      offset.copy(bindLocal.get(name)!).multiply(clipBind.get(name)?.clone().invert() || new THREE.Quaternion());
      for (let i = 0; i < track.values.length; i += 4) {
        q.fromArray(track.values, i).premultiply(offset).normalize().toArray(track.values, i);
      }
      return true;
    });
    return clip;
  };
  const mixer = new THREE.AnimationMixer(root);
  const idleClip = profile.animations?.idle ? await loadClip(profile.animations.idle).catch(() => null) : null;
  const idleAction = idleClip ? mixer.clipAction(idleClip) : null;
  idleAction?.play();
  const gestureActions = new Map<string, THREE.AnimationAction>();
  for (const [name, file] of Object.entries(profile.animations?.gestures || {})) {
    const clip = await loadClip(file).catch(() => null);
    if (!clip) continue;
    const action = mixer.clipAction(clip);
    action.setLoop(THREE.LoopOnce, 1);
    action.clampWhenFinished = true;   // 끝 자세를 붙잡은 채 대기 동작으로 섞여 돌아감
    gestureActions.set(name, action);
  }
  if (life.stopped) return null;
  let gesture: { action: THREE.AnimationAction; until: number } | null = null;
  /** 몸짓이 끝났으면 대기 동작으로 섞어 돌아가기 */
  const endGesture = (now: number) => {
    if (!gesture || now < gesture.until) return;
    gesture.action.fadeOut(0.3);
    if (idleAction) { idleAction.enabled = true; idleAction.fadeIn(0.3).play(); }
    gesture = null;
  };

  // ---------- 흔들림(스프링) ----------
  const springs = createSprings((profile.springs || []).map((spec) => ({ ...spec, roots: spec.roots.map((id) => byName.get(id)).filter((node): node is THREE.Object3D => !!node) })));

  // ---------- 매 프레임 ----------
  const values = new Map<string, number>();
  const expressionWeights = new Map<string, number>();
  let frameFn: (() => void) | null = null;
  let lastTick = performance.now();
  const keyOf = channelKeyOf;
  const euler = new THREE.Euler(), deltaQ = new THREE.Quaternion(), parentQ = new THREE.Quaternion(), worldQ = new THREE.Quaternion();
  // 고개 채널은 Live2D 물리 입력값(±30)이라 실제 각도로 그대로 쓰면 크고 딱딱함 → 배율을 줄이고 관성을 줘서 따라가게 함
  const HEAD_GAIN = { yaw: 0.6, pitch: 0.5, roll: 0.5 }, HEAD_FOLLOW = 7;   // 배율, 따라가는 빠르기(초당)
  // 고개·몸 채널은 Live2D에선 물리 입력이라 늦게 따라감 → 3D에선 뼈마다 덧씌움 회전을 들고 목표 쪽으로 slerp로 따라가게 함
  /** 고개·몸 뼈의 지금 덧씌움 회전 */
  const smoothed = new Map<HumanBone, THREE.Quaternion>((["neck", "head", "chest", "spine"] as HumanBone[]).map((name) => [name, new THREE.Quaternion()]));
  /**
   * 덧씌울 회전을 뼈의 지금 자세(애니메이션 포함) 월드 회전 앞에 곱함: L' = P⁻¹ × D × P × L
   * @param delta 월드 축 기준 회전
   */
  const applyDelta = (node: THREE.Object3D, delta: THREE.Quaternion) => {
    node.parent!.getWorldQuaternion(parentQ);
    worldQ.copy(parentQ).multiply(node.quaternion).premultiply(delta);
    node.quaternion.copy(parentQ.invert().multiply(worldQ));
  };
  /**
   * 이번 프레임 채널 값으로 뼈 회전 (고개는 목 40%·머리 60%로 나누고 쿼터니언 slerp로 따라감)
   * @param dt 지난 프레임부터 흐른 시간(초)
   */
  const applyBones = (dt: number) => {
    const v = (key: string) => values.get(key) || 0;
    const yaw = clamp(v("headTurn"), -30, 30) * HEAD_GAIN.yaw, pitch = clamp(v("headTilt"), -30, 30) * HEAD_GAIN.pitch, roll = clamp(v("headRoll"), -30, 30) * HEAD_GAIN.roll;
    const follow = Math.min(1, dt * HEAD_FOLLOW);
    /** 목표 회전(월드 축, 도)을 쿼터니언으로 만들고 지금 회전에서 slerp로 따라가 적용 */
    const turnSmooth = (name: HumanBone, x: number, y: number, z: number) => {
      const node = bone(name), current = smoothed.get(name)!;
      if (!node || !node.parent) return;
      current.slerp(deltaQ.setFromEuler(euler.set(x * DEG, y * DEG, z * DEG, "YXZ")), follow);
      applyDelta(node, current);
    };
    /** 월드 축 회전(도) 바로 적용 */
    const turn = (name: HumanBone, x: number, y: number, z: number) => {
      const node = bone(name);
      if (!node || !node.parent || (!x && !y && !z)) return;
      applyDelta(node, deltaQ.setFromEuler(euler.set(x * DEG, y * DEG, z * DEG, "YXZ")));
    };
    turnSmooth("neck", -pitch * 0.4, yaw * 0.4, roll * 0.4);
    turnSmooth("head", -pitch * 0.6, yaw * 0.6, roll * 0.6);
    turnSmooth("chest", v("bodyLean") * 0.25 - v("breath") * 1.2, clamp(v("bodyShiftX"), -30, 30) * 0.2, 0);
    turnSmooth("spine", 0, 0, clamp(v("bodyShiftZ"), -30, 30) * 0.2);
    const eyeX = clamp(v("eyeLookX"), -1, 1) * 18, eyeY = clamp(v("eyeLookY"), -1, 1) * 14;
    turn("leftEye", -eyeY, eyeX, 0);
    turn("rightEye", -eyeY, eyeX, 0);
  };
  /** 이번 프레임 채널·표정·소품으로 모프 세기 계산·적용 */
  const applyMorphs = () => {
    const weights = new Map<string, number>(Object.entries(profile.baseMorphs || {}));
    const add = (morph: string, w: number) => weights.set(morph, (weights.get(morph) || 0) + w);
    for (const [channel, bindings] of Object.entries(profile.channels || {})) {
      const value = values.get(channel) || 0;
      for (const binding of bindings) { const w = bindingWeight(binding, value); if (w) add(binding.morph, w); }
    }
    for (const [name, w] of expressionWeights) for (const [morph, amount] of Object.entries(profile.expressions?.[name] || {})) add(morph, amount * w);
    for (const [key, bindings] of Object.entries(profile.outfit || {})) {
      const raw = values.get("outfit." + key) || 0, item = OUTFIT_ITEMS.find((each) => each.key === key);
      const on = clamp(raw / ((item && item.on) || 1), 0, 1);
      for (const binding of bindings) add(binding.morph, binding.invert ? 1 - on : on);
    }
    for (const slots of morphSlots.values()) for (const [mesh, index] of slots) mesh.morphTargetInfluences![index] = 0;
    for (const [morph, w] of weights) for (const [mesh, index] of morphSlots.get(morph) || []) mesh.morphTargetInfluences![index] = clamp(w, 0, 1);
  };

  // ---------- 터치: 뼈를 화면에 투영한 캡슐 ----------
  const SEGMENTS: Array<{ part: string; from: HumanBone; to: HumanBone; radius: number }> = [
    { part: "waist", from: "neck", to: "hips", radius: shoulders * 0.55 },
    { part: "arm", from: "leftUpperArm", to: "leftLowerArm", radius: shoulders * 0.16 },
    { part: "arm", from: "leftLowerArm", to: "leftHand", radius: shoulders * 0.14 },
    { part: "arm", from: "rightUpperArm", to: "rightLowerArm", radius: shoulders * 0.16 },
    { part: "arm", from: "rightLowerArm", to: "rightHand", radius: shoulders * 0.14 },
    { part: "leg", from: "leftUpperLeg", to: "leftLowerLeg", radius: shoulders * 0.2 },
    { part: "leg", from: "leftLowerLeg", to: "leftFoot", radius: shoulders * 0.16 },
    { part: "leg", from: "rightUpperLeg", to: "rightLowerLeg", radius: shoulders * 0.2 },
    { part: "leg", from: "rightLowerLeg", to: "rightFoot", radius: shoulders * 0.16 },
  ];
  const PARTS = ["head", ...SEGMENTS.map((segment) => segment.part)];
  /** 점과 선분 사이 거리의 제곱 */
  const segDist2 = (px: number, py: number, a: { x: number; y: number }, b: { x: number; y: number }) => {
    const dx = b.x - a.x, dy = b.y - a.y, len2 = dx * dx + dy * dy;
    const t = len2 > 1e-6 ? clamp(((px - a.x) * dx + (py - a.y) * dy) / len2, 0, 1) : 0;
    const qx = a.x + dx * t - px, qy = a.y + dy * t - py;
    return qx * qx + qy * qy;
  };
  const headRadiusWorld = Math.max(fullH * 0.07, (top - headPos.y) * 0.75);

  return {
    metrics,
    supports: (feature) => (profile.features || []).includes(feature),
    set(id, value, weight = 1) { const key = keyOf(id); if (!key) return; const current = values.get(key) || 0; values.set(key, weight === 1 ? value : current + (value - current) * weight); },
    add(id, value, weight = 1) { const key = keyOf(id); if (key) values.set(key, (values.get(key) || 0) + value * weight); },
    multiply(id, value, weight = 1) { const key = keyOf(id); if (key) values.set(key, (values.get(key) || 0) * (1 + (value - 1) * weight)); },
    expressionNames: () => Object.keys(profile.expressions || {}),
    expression(name, weight) { expressionWeights.set(name, weight); },
    earHide() {},
    bodyShape() {},
    onFrame(fn) { frameFn = fn; },
    pick(x, y) {
      root.updateMatrixWorld(true);
      const head = toCanvas(worldOf(bone("head")) || headPos);
      const headTop = toCanvas(new THREE.Vector3(head.x, top, 0));
      const headR = headRadiusWorld * (metrics.visW / bodyWidthWorld);
      const headCenterY = (head.y + headTop.y) / 2;
      if ((x - head.x) ** 2 + (y - headCenterY) ** 2 <= headR * headR) return 0;
      for (let i = 0; i < SEGMENTS.length; i++) {
        const segment = SEGMENTS[i], a = worldOf(bone(segment.from)), b = worldOf(bone(segment.to));
        if (!a || !b) continue;
        const r = segment.radius * (metrics.visW / bodyWidthWorld);
        if (segDist2(x, y, toCanvas(a), toCanvas(b)) <= r * r) return i + 1;
      }
      return -1;
    },
    touchShape(_x, y, handle): TouchShape {
      const topY = toCanvas(new THREE.Vector3(centerX, top, 0)).y, bottomY = toCanvas(new THREE.Vector3(centerX, bottom, 0)).y;
      return { part: PARTS[handle] ?? null, ratioY: (y - topY) / (bottomY - topY), inChest: false };
    },
    chibiRegion(y) { return y < toCanvas(worldOf(bone("neck")) || headPos).y ? "head" : "body"; },
    setResolution(k) {
      const ratio = (devicePixelRatio || 1) * 1.5 * Math.max(1, k);
      if (renderer.getPixelRatio() === ratio && canvas.width > 0) return;
      renderer.setPixelRatio(ratio);
      renderer.setSize(W, H, false);
    },
    resetClock() { lastTick = performance.now(); },
    tick(time) {
      const dt = clamp((time - lastTick) / 1000, 0, 0.05); lastTick = time;
      values.clear(); expressionWeights.clear();
      frameFn?.();
      for (const [node, pose] of basePose) node.quaternion.copy(pose);   // 지난 프레임의 덧씌움을 걷어 내고 바탕 자세에서 시작
      endGesture(performance.now());
      mixer.update(dt);
      for (const [node, pose] of basePose) pose.copy(node.quaternion);   // 믹서가 바꾼 값(안 바꿨으면 그대로)을 바탕 자세로 기억
      applyBones(dt);
      applyMorphs();
      root.updateMatrixWorld(true);
      if (dt > 0) springs.step(dt);
      renderer.render(scene, camera);
    },
    gesture(name, ms) {
      const action = gestureActions.get(name);
      if (!action) return;
      if (gesture && gesture.action !== action) gesture.action.fadeOut(0.2);
      idleAction?.fadeOut(0.25);
      action.reset().setEffectiveWeight(1).fadeIn(0.25).play();
      gesture = { action, until: performance.now() + Math.max(action.getClip().duration * 1000, ms) };
    },
    systemTicker() {},
  };
}
