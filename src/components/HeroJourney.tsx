import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function HeroJourney() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(t * 0.2) * 0.02;
    }
  });

  const createLine = (
    a: [number, number],
    b: [number, number],
    key: string
  ) => {
    const points = [
      new THREE.Vector3(a[0], a[1], 0),
      new THREE.Vector3(b[0], b[1], 0),
    ];

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    return (
      <line key={key} geometry={geometry}>
        <lineBasicMaterial
          color="#D6B36A"
          transparent
          opacity={0.4}
        />
      </line>
    );
  };

  const learner: [number, number] = [-3, 0];

  const tara: [number, number] = [0, 0];

  const growth: [number, number] = [3, 0];

  const satellites = [
    [1.0, 1.2],
    [1.8, 0.6],
    [1.8, -0.6],
    [1.0, -1.2],
  ];

  return (
    <group ref={groupRef} scale={1.4}>
      {/* learner */}
      <mesh position={[learner[0], learner[1], 0]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshBasicMaterial color="#93B5E1" />
      </mesh>

      {/* TARA */}
      <mesh position={[tara[0], tara[1], 0]}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshBasicMaterial color="#D6B36A" />
      </mesh>

      {/* glow ring */}
      <mesh position={[tara[0], tara[1], -0.01]}>
        <ringGeometry args={[0.42, 0.47, 64]} />
        <meshBasicMaterial
          color="#D6B36A"
          transparent
          opacity={0.35}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* growth */}
      <mesh position={[growth[0], growth[1], 0]}>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshBasicMaterial color="#D6B36A" />
      </mesh>

      {/* main flow */}
      {createLine(learner, tara, "a")}
      {createLine(tara, growth, "b")}

      {/* satellites */}
      {satellites.map((p, i) => (
        <group key={i}>
          {createLine(tara, [p[0], p[1]], `s-${i}`)}

          <mesh position={[p[0], p[1], 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#D6B36A" />
          </mesh>
        </group>
      ))}

      {/* subtle stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 5,
            -0.5,
          ]}
        >
          <sphereGeometry args={[0.01, 8, 8]} />
          <meshBasicMaterial
            color="#D6B36A"
            transparent
            opacity={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}