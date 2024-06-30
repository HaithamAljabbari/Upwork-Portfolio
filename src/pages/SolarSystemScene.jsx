import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei';
import SolarSystem from './SolarSystem'; // Adjust path based on your project structure
import { motion } from 'framer-motion';

const SolarSystemScene = () => {
  return (
    <div className="scene-container">
      <Canvas className="canvas-container">
        <PerspectiveCamera makeDefault position={[0, 10, 10]} fov={50} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />

        <SolarSystem />

        <OrbitControls enableZoom={false} enablePan={true} />

        <Environment preset="sunset" />

      </Canvas>
      <div className="overlay-content">
        <motion.div
          className="overlay-button"
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1>Discover Our Solar System</h1>
          <p>Explore the colorful planets orbiting our central star. Dive into the beauty of the cosmos with this interactive 3D model.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SolarSystemScene;
