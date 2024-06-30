import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';


const SpinningSpheres = ({ numSpheres }) => {
  const spheres = useRef([]);

  const sphereData = Array.from({ length: numSpheres }, () => ({
    radius: 1 + Math.random() * 1.5,
    speed: 0.05 + Math.random() * 0.02,
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
        currentSphere.rotation.y += 0.1;
      }
    });
  });

  return (
    <>
      {sphereData.map((sphere, index) => (
        <mesh key={index} ref={(ref) => (spheres.current[index] = ref)} position={[0, 0, 0]}>
          <sphereGeometry args={[0.01, 32, 32]} />
          <meshPhongMaterial color="orange" emissive="orange" emissiveIntensity={1} shininess={1000} />
        </mesh>
      ))}
    </>
  );
};

export default SpinningSpheres;
