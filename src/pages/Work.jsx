import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { BlackHoleScene, SolarSystemScene } from './scene';
import './Work.css';

const WorkComponent = () => {
  return (
    <div className="space">
      <BlackHoleScene />
      <SolarSystemScene />
      <div className="description-content">
        
        <p>I can provide 3d content to your page such as a star with simplistic planets orbiting it or black hole</p>
      </div>
    </div>
  );
};

export default WorkComponent;
