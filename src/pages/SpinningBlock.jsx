// src/SpinningBlock.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function SpinningBlock() {
  const meshRef = useRef();

  // Rotate the block on each frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[300, 300, 2]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <SpinningBlock />
    </Canvas>
  );
}

export default Scene;
