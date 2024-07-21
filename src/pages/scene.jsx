import React, { useRef, useState, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import "./Work.css"

// Spinning spheres around a central black hole
const SpinningSpheres = ({ numSpheres }) => {
  const spheres = useRef([]);

  const sphereData = Array.from({ length: numSpheres }, () => ({
    radius: 1 + Math.random() * 1.5,
    speed: 0.005 + Math.random() * 0.002,
    angle: Math.random() * Math.PI * 2,
  }));

  useFrame(() => {
    sphereData.forEach((sphere, index) => {
      const { radius, speed, angle } = sphere;
      const currentSphere = spheres.current[index];
      if (currentSphere) {
        currentSphere.position.x = radius * Math.cos(angle);
        currentSphere.position.y = radius * Math.sin(angle);
        sphere.angle += speed;
        currentSphere.rotation.y += 0.05;
      }
    });
  });

  return (
    <>
      {sphereData.map((sphere, index) => (
        <mesh key={index} ref={(ref) => (spheres.current[index] = ref)} position={[-20, 2, -0.5]}>
          <sphereGeometry args={[0.01, 32, 32]} />
          <meshPhongMaterial color="orange" emissive="orange" emissiveIntensity={1} shininess={1000} />
        </mesh>
      ))}
    </>
  );
};

// Solar System with planets orbiting the sun
const SolarSystem = () => {
  const planets = useRef([]);

  const planetData = [
    { color: 'red', radius: 2, speed: 0.5, size: 0.2 },
    { color: 'blue', radius: 3, speed: 0.4, size: 0.3 },
    { color: 'green', radius: 4, speed: 0.3, size: 0.25 },
    { color: 'yellow', radius: 5, speed: 0.25, size: 0.35 },
    { color: 'purple', radius: 6, speed: 0.2, size: 0.28 },
    { color: 'orange', radius: 7, speed: 0.15, size: 0.22 },
    { color: 'pink', radius: 8, speed: 0.1, size: 0.3 },
    { color: 'cyan', radius: 9, speed: 0.05, size: 0.26 }
  ];

  useFrame(() => {
    const time = Date.now() * 0.001;
    planetData.forEach((planet, index) => {
      const currentPlanet = planets.current[index];
      if (currentPlanet) {
        const angle = time * planet.speed;
        currentPlanet.position.x = planet.radius * Math.cos(angle);
        currentPlanet.position.z = planet.radius * Math.sin(angle);
      }
    });
  });

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={1} />
      </mesh>
      {planetData.map((planet, index) => (
        <mesh key={index} ref={(ref) => (planets.current[index] = ref)} position={[0, 0, 0]}>
          <sphereGeometry args={[planet.size, 32, 32]} />
          <meshPhongMaterial color={planet.color} emissive={planet.color} emissiveIntensity={0.5} shininess={100} />
        </mesh>
      ))}
    </>
  );
};

// Scene for the black hole with rotating spheres
export const BlackHoleScene = () => {
  const [rotation, setRotation] = useState(0);

  const rotateButton = () => {
    setRotation((prevRotation) => prevRotation + 15);
  };

  return (
    <div className="scene-container">
      <Canvas className="canvas-container">
        <PerspectiveCamera makeDefault position={[-4.5, -30, -20]} fov={5} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        
        <mesh position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
        
        <SpinningSpheres numSpheres={2508} />

        <OrbitControls enableZoom={false} enablePan={true} />
        <Environment preset="night" />
      </Canvas>
     
    </div>
  );
};

// Scene for the solar system
export const SolarSystemScene = () => {
  return (
    <div className="scene-container">
      <Canvas className="canvas-container">
        <PerspectiveCamera makeDefault position={[0, 10, 10]} fov={50} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />

        <Suspense fallback={null}>
          <SolarSystem />
        </Suspense>

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
          <h1>My ThreeJS work</h1>
          <p>3D Space models on my Github</p>
          <a href="https://crypto-site-git-main-haithamaljabbaris-projects.vercel.app/"><button className="rotate-button" >Next work Example</button></a>
        </motion.div>
      </div>
    </div>
  );
};

// Main application component
const App = () => {
  return (
    <div>
      <BlackHoleScene />
      <div className="description-content">
        <h1 className="title-space">Experience the Vastness of Space</h1>
        <p>I can provide 3d content to your page such as a star with simplistic planets orbiting it or a black hole</p>
        
      </div>
      <SolarSystemScene />
    </div>
  );
};

// Render the app
const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);

