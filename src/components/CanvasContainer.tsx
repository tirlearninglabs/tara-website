import { Canvas } from "@react-three/fiber";
import HeroJourney from "./HeroJourney";

export default function CanvasContainer() {
  return (
    <div className="w-full h-full min-h-[600px]">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 45,
        }}
      >
        <HeroJourney />
      </Canvas>
    </div>
  );
}