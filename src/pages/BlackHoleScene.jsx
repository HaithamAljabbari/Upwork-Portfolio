import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import SpinningSpheres from './SpinningSpheres'; // Adjust path based on your project structure


const BlackHoleScene = () => {
  const [rotation, setRotation] = useState(0);

  const rotateButton = () => {
    setRotation((prevRotation) => prevRotation + 15);
  };

  return (
    <div className="scene-container">
      <Canvas className="canvas-container">
        <PerspectiveCamera makeDefault position={[-10.5, 20, 10]} fov={20} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        
        <mesh position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
        
        <SpinningSpheres numSpheres={2208} />

        <OrbitControls enableZoom={false} enablePan={true} />

        <Environment preset="night" />

      </Canvas>
      <div className="overlay-content">
        <motion.div
          className="overlay-button"
          animate={{ rotate: rotation, scale: 1, opacity: 1 }}
          initial={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1>Explore the Mysteries of Black Holes</h1>
          <p>Discover the captivating phenomena of black holes with our interactive 3D simulation.</p>
          <button className="rotate-button" onClick={rotateButton}>Rotate View</button>
        </motion.div>
      </div>
    </div>
  );
};

export default BlackHoleScene;
