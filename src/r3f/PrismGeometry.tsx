import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PrismGeometryProps {
  alignment: React.MutableRefObject<number>;
}

export default function PrismGeometry({ alignment }: PrismGeometryProps) {
  const topHalfRef = useRef<THREE.Mesh>(null);
  const bottomHalfRef = useRef<THREE.Mesh>(null);

  // Generate an elegant custom extrusion profile representing a high-end cut crystal prism
  const prismGeometry = useMemo(() => {
    const geom = new THREE.CylinderGeometry(0.8, 1.2, 1.4, 3, 1, false);
    geom.computeVertexNormals();
    return geom;
  }, []);

  useFrame((state, delta) => {
    const align = alignment.current;
    
    // State 1 Dynamics: Complete separation and vertical offset shift
    // Maximum displacement is 1.6 units out when unaligned, merging seamlessly to 0.0 at center execution
    const maxDisplacement = 1.6;
    const targetYOffset = maxDisplacement * (1 - align);

    if (topHalfRef.current && bottomHalfRef.current) {
      topHalfRef.current.position.y = targetYOffset + 0.7; // 0.7 is resting stacked location
      bottomHalfRef.current.position.y = -(targetYOffset + 0.7);

      // Desynchronised subtle rotation vectors simulating uncertainty state oscillations
      const time = state.clock.getElapsedTime();
      const rotationalOscillation = Math.sin(time * 0.4) * 0.15 * (1 - align);
      
      topHalfRef.current.rotation.y = (time * 0.05) + rotationalOscillation;
      bottomHalfRef.current.rotation.y = -(time * 0.03) - rotationalOscillation;
    }
  });

  return (
    <group>
      {/* Upper Domain Element */}
      <mesh ref={topHalfRef} geometry={prismGeometry}>
        <meshPhysicalMaterial
          color="#E5ECF4"
          transparent
          opacity={0.85}
          roughness={0.05}
          metalness={0.1}
          clearcoat={1.0}
          clearcoatRoughness={0.02}
          transmission={0.6}
          thickness={1.5}
          ior={1.45}
        />
      </mesh>

      {/* Inverted Lower Domain Mirror Element */}
      <mesh ref={bottomHalfRef} geometry={prismGeometry} rotation={[Math.PI, 0, 0]}>
        <meshPhysicalMaterial
          color="#A0C4DF"
          transparent
          opacity={0.75}
          roughness={0.1}
          metalness={0.2}
          clearcoat={0.8}
          transmission={0.5}
          thickness={1.2}
          ior={1.45}
        />
      </mesh>
    </group>
  );
}