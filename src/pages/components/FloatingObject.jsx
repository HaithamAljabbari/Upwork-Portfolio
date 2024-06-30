// src/FloatingObject.js

import React, { useEffect, useRef } from 'react';
import './FloatingObject.css';

const FloatingObject = () => {
    const floatingRef = useRef(null);

    useEffect(() => {
        const floatingObject = floatingRef.current;
        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;

        const amplitude = 100;  // Maximum height of the tangent curve
        const speed = 0.01;     // Speed of movement
        let x = 0;              // Initial x position

        const animate = () => {
            // Calculate the y position using the tangent function
            const y = Math.tan(x) * amplitude;

            // Set the new position, constraining the y value to within container bounds
            floatingObject.style.transform = `translate(${x % containerWidth}px, ${Math.min(Math.max(y, -containerHeight / 2), containerHeight / 2) + containerHeight / 2}px)`;

            // Increment the x value
            x += speed;

            // Request the next frame of the animation
            requestAnimationFrame(animate);
        };

        animate();

        // Cleanup on component unmount
        return () => cancelAnimationFrame(animate);
    }, []);

    return <div className="floating-object" ref={floatingRef}></div>;
};

export default FloatingObject;
