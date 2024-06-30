import React from 'react';
import { motion } from 'framer-motion';
import './InformationSection.css';
import gif from './city.jpeg';
import gif2 from "./doge.gif";

const InformationSection = () => {
    return (
        <div className="information">
            <motion.div
                className="header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img className="header-img" src={gif} alt="City" />
                <h1 className="header-text">World Class Trading</h1>
            </motion.div>
            <div className="info-container">
                {['Trading Platform', 'Market Analysis', 'Real-Time Data', 'Customer Support'].map((title, index) => (
                    <motion.div
                        key={index}
                        className="info-box"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3>{title}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </motion.div>
                ))}
            </div>
            <motion.div
                className="trade-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <img className="GIF" src={gif2} alt="Doge" />
                <div className="trade-content">
                    <h1 className="trade">Let's Go Trade rn!</h1>
                    <a href="/workTwo">
                    <motion.button
                        className="button-60"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Next Example
                    </motion.button>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default InformationSection;
