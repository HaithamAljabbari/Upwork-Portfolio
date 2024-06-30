import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';

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

export default SolarSystem;

