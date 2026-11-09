// 뼈 포즈: 표정을 모프 대신 얼굴 뼈(눈꺼풀·입술·눈썹 등)로 짓는 모델용. avatar.json bonePoses의 이름은 모프 이름처럼
// 채널·표정·소품 대응에서 쓰이고, 그 세기(0~1)만큼 뼈를 옮기고 돌림. 애니메이션이 같은 뼈를 움직여도 그 위에 더함.
import * as THREE from "three";

/**
 * 뼈 하나의 움직임 (기본 자세에서 정해 부모 뼈에 붙음: 고개를 돌려도 같이 돎)
 * move = 화면 기준(+x 오른쪽·+y 위·+z 카메라 쪽) 이동, 모델 키 비율
 * toward = 다른 뼈 쪽으로 기본 자세 거리의 amount배만큼 이동 (음수면 반대쪽. 예: 위 눈꺼풀 → 아래 눈꺼풀 0.9 = 눈 감기)
 * rotate = 화면 기준 축 회전(도, x·y·z 순)
 */
export type BonePoseEntry = { bone: string; move?: [number, number, number]; toward?: { bone: string; amount: number }; rotate?: [number, number, number] };
/** 포즈 이름 → 뼈 움직임 목록 */
export type BonePoseSpec = Record<string, BonePoseEntry[]>;

type Prepared = { node: THREE.Object3D; move: THREE.Vector3 | null; rotate: THREE.Quaternion | null };
const IDENTITY = new THREE.Quaternion();
const partial = new THREE.Quaternion();

/**
 * 뼈 포즈 준비: 기본 자세(방향 보정·팔 내림 뒤, 월드 행렬 갱신된 상태)에서 화면 기준 움직임을 각 뼈의 지역 값으로 바꿔 둠
 * @param findNode 뼈 이름 → 노드 (없는 뼈는 경고 후 건너뜀)
 * @param unit 이동 단위 (모델 키, 월드 단위)
 * @returns names = 쓸 수 있는 포즈 이름, reset·record = 애니메이션 전후 바탕 자세 관리, apply = 이번 프레임 세기 적용
 */
export function createBonePoses(spec: BonePoseSpec | undefined, findNode: (name: string) => THREE.Object3D | null | undefined, unit: number, warn: (message: string) => void = () => {}) {
  const poses = new Map<string, Prepared[]>();
  const base = new Map<THREE.Object3D, { position: THREE.Vector3; quaternion: THREE.Quaternion }>();
  for (const [name, entries] of Object.entries(spec ?? {})) {
    const prepared: Prepared[] = [];
    for (const entry of entries) {
      const node = findNode(entry.bone);
      if (!node) { warn(`뼈 포즈 ${name}: 뼈를 찾지 못함 (${entry.bone})`); continue; }
      const target = entry.toward ? findNode(entry.toward.bone) : null;
      if (entry.toward && !target) warn(`뼈 포즈 ${name}: 뼈를 찾지 못함 (${entry.toward.bone})`);
      const world = new THREE.Vector3();
      if (entry.move) world.set(...entry.move).multiplyScalar(unit);
      if (target && entry.toward) world.add(target.getWorldPosition(new THREE.Vector3()).sub(node.getWorldPosition(new THREE.Vector3())).multiplyScalar(entry.toward.amount));
      prepared.push({ node, move: world.lengthSq() > 0 ? toParentLocal(node, world) : null, rotate: entry.rotate ? localTurn(node, entry.rotate) : null });
      if (!base.has(node)) base.set(node, { position: node.position.clone(), quaternion: node.quaternion.clone() });
    }
    if (prepared.length) poses.set(name, prepared);
  }
  return {
    names: [...poses.keys()],
    /** 지난 프레임 덧씌움을 걷어 냄 (애니메이션 믹서 전) */
    reset() { for (const [node, pose] of base) { node.position.copy(pose.position); node.quaternion.copy(pose.quaternion); } },
    /** 믹서가 정한 값을 바탕 자세로 기억 (믹서 후) */
    record() { for (const [node, pose] of base) { pose.position.copy(node.position); pose.quaternion.copy(node.quaternion); } },
    /** 포즈 세기(0~1, 범위 밖은 자름)만큼 더함. 같은 뼈를 여러 포즈가 움직이면 합침 */
    apply(weights: ReadonlyMap<string, number>) {
      for (const [name, prepared] of poses) {
        const w = Math.min(1, Math.max(0, weights.get(name) || 0));
        if (!w) continue;
        for (const { node, move, rotate } of prepared) {
          if (move) node.position.addScaledVector(move, w);
          if (rotate) node.quaternion.multiply(partial.slerpQuaternions(IDENTITY, rotate, w));
        }
      }
    },
  };
}
export type BonePoses = ReturnType<typeof createBonePoses>;

/** 월드 이동 → 부모 지역 좌표 이동 (부모 회전·배율을 되돌림) */
function toParentLocal(node: THREE.Object3D, world: THREE.Vector3) {
  if (!node.parent) return world;
  return world.applyMatrix3(new THREE.Matrix3().setFromMatrix4(node.parent.matrixWorld).invert());
}

/** 화면 기준 축 회전 → 지역 회전에 곱할 값 (W⁻¹ × D × W, W = 뼈의 기본 월드 회전) */
function localTurn(node: THREE.Object3D, rotate: [number, number, number]) {
  const d = Math.PI / 180;
  const delta = new THREE.Quaternion().setFromEuler(new THREE.Euler(rotate[0] * d, rotate[1] * d, rotate[2] * d, "XYZ"));
  const world = node.getWorldQuaternion(new THREE.Quaternion());
  return world.clone().invert().multiply(delta).multiply(world);
}
