// src/components/FeatureSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './FeatureSection.css';

const features = [
    { id: 1, title: 'Feature One', description: 'Description for feature one.' },
    { id: 2, title: 'Feature Two', description: 'Description for feature two.' },
    { id: 3, title: 'Feature Three', description: 'Description for feature three.' },
];

const FeatureSection = () => {
    return (
        <div className="features-container">
            {features.map((feature) => (
                <motion.div
                    key={feature.id}
                    className="feature"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.1 }}
                >
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default FeatureSection;
