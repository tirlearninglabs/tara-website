import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SilverFilamentsProps {
  alignment: React.MutableRefObject<number>;
}

export default function SilverFilaments({ alignment }: SilverFilamentsProps) {
  const lineSegmentsRef = useRef<THREE.LineSegments>(null);
  const count = 180;

  // Initialize random baseline properties for noise vectors
  const [initialData] = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const seedVectors: THREE.Vector3[] = [];
    
    for (let i = 0; i < count; i++) {
      // Create random floating root starts inside the lower abyss domain matrix
      const startX = (Math.random() - 0.5) * 4.5;
      const startY = -4.0 - Math.random() * 3.0;
      const startZ = (Math.random() - 0.5) * 4.5;

      points.push(new THREE.Vector3(startX, startY, startZ));
      points.push(new THREE.Vector3(startX * 0.4, -0.7, startZ * 0.4)); // Fixed resting anchor baseline near prism base

      seedVectors.push(new THREE.Vector3(Math.random() * 5, Math.random() * 5, Math.random() * 5));
    }
    return [ { points, seedVectors } ];
  }, []);

  const [positions, colors] = useMemo(() => {
    const posArr = new Float32Array(count * 2 * 3);
    const colArr = new Float32Array(count * 2 * 3);
    const c1 = new THREE.Color('#171F38');
    const c2 = new THREE.Color('#8A95A5');

    for (let i = 0; i < count * 2; i++) {
      const idx = i * 3;
      // Alternate assignment maps
      const colorSource = i % 2 === 0 ? c1 : c2;
      colArr[idx] = colorSource.r;
      colArr[idx + 1] = colorSource.g;
      colArr[idx + 2] = colorSource.b;
    }
    return [posArr, colArr];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const align = alignment.current;
    const geo = lineSegmentsRef.current?.geometry;
    if (!geo) return;

    const posAttr = geo.attributes.position;
    let index = 0;

    for (let i = 0; i < count; i++) {
      const startPt = initialData.points[i * 2];
      const endPt = initialData.points[i * 2 + 1];
      const seed = initialData.seedVectors[i];

      // State 1: Organic wander curl velocity logic (Simulates unformed floating ideas)
      const driftX = Math.sin(time * 0.6 + seed.x) * 0.8 * (1 - align);
      const driftZ = Math.cos(time * 0.5 + seed.z) * 0.8 * (1 - align);

      // State 2: Pull rigid, align tips perfectly to lock positions on prism threshold
      // Transition dynamically scales tracking coordinates out of noise vectors straight to target vectors
      posAttr.setXYZ(index++, startPt.x + driftX, startPt.y, startPt.z + driftZ);
      
      // End coordinates convergence mapping to the base of the structural crystal
      const targetAnchorX = THREE.MathUtils.lerp(endPt.x + driftX * 0.2, (Math.random() - 0.5) * 0.1, align);
      const targetAnchorY = THREE.MathUtils.lerp(endPt.y, -0.7, align);
      const targetAnchorZ = THREE.MathUtils.lerp(endPt.z + driftZ * 0.2, (Math.random() - 0.5) * 0.1, align);
      
      posAttr.setXYZ(index++, targetAnchorX, targetAnchorY, targetAnchorZ);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <lineSegments ref={lineSegmentsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <lineBasicMaterial vertexColors linewidth={1} transparent opacity={0.65} depthWrite={false} />
    </lineSegments>
  );
}