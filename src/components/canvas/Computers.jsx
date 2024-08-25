import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";

const Computers = ({isMobile}) => {
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
        scale={isMobile ? 0.5 :0.75}
        position={isMobile? [0, -3, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false)
  useEffect(()=>{
    const mediaQuery = window.matchMedia(
      '(max-width: 500px)');
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return ()=> {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return (
    <div className="w-full h-full">
      {/* Ensures full width and height for the canvas */}
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
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
          <Computers isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
