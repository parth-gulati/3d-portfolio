import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.25} groundColor="black" />
      <spotLight
        position={[-1, 2, 1]}
        angle={2}
        intensity={100}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[0, 0, 0]} intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 top-[120px]">
      {/* Ensures full width and height for the canvas */}
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            mouseButtons={{
              LEFT: THREE.MOUSE.ROTATE,
              RIGHT: THREE.MOUSE.NONE,
              MIDDLE: THREE.MOUSE.NONE,
            }}
          />
          <Computers />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
