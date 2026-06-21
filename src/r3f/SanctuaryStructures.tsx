import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SanctuaryStructuresProps {
  alignment: React.MutableRefObject<number>;
}

export default function SanctuaryStructures({ alignment }: SanctuaryStructuresProps) {
  const groupRef = useRef<THREE.Group>(null);
  const archCount = 8;

  // Generates individual concentric parameters representing a sanctuary structural framework of understanding
  const archParams = useMemo(() => {
    const params = [];
    for (let i = 0; i < archCount; i++) {
      const radius = 0.5 + i * 0.38;
      const tubularRadius = 0.012;
      const radialSegments = 8;
      const tubularSegments = 48;
      const arc = Math.PI; // Perfect geometric semicircular arch profile

      params.push({ radius, tubularRadius, radialSegments, tubularSegments, arc, index: i });
    }
    return params;
  }, []);

  useFrame((state, delta) => {
    const align = alignment.current;
    if (!groupRef.current) return;

    // The entire light framework emerges dynamically out from nothing during growth phase transformation
    // Visible scaling factors only engage efficiently past the clarity threshold (> 0.6)
    const architecturalGrowthFactor = Math.max(0, (align - 0.5) * 2.0);

    groupRef.current.scale.set(
      architecturalGrowthFactor,
      architecturalGrowthFactor,
      architecturalGrowthFactor
    );

    // Subtle breathing animation vector mapped onto structural elements
    if (align > 0.5) {
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.7, 0]}>
      {archParams.map((param) => (
        <group key={param.index} rotation={[0, (param.index * Math.PI) / archCount, 0]}>
          <mesh rotation={[0, 0, 0]}>
            <torusGeometry args={[param.radius, param.tubularRadius, param.radialSegments, param.tubularSegments, param.arc]} />
            <meshStandardMaterial
              color="#E5A93C"
              emissive="#E5A93C"
              emissiveIntensity={1.8}
              transparent
              opacity={0.85}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        </group>
      ))}

      {/* Concentric Floating Foundation Structural Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <ringGeometry args={[0.4, 2.5, 32]} />
        <meshBasicMaterial color="#E5A93C" transparent opacity={0.12} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}