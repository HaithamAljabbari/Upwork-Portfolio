import React from 'react';
import { motion } from 'framer-motion';
import crypto from "./crypto.png";
import './HeroSection.css';
import city from "./city.jpeg"; // Ensure the path is correct

const HeroSection = () => {
    return (
        <div className="hero-container">
             {/* Background image container */}
            <div className="content-wrapper">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 5 }}
                    transition={{ duration: 2 }}
                >
                    <h1>XCrypto</h1>
                    

                    <p className="catch">Your Assets Your Money Our technology We Win</p>
                    <button className="button-59" role="button">Learn More</button>
                    <button class="button-29" role="button">Download</button>

                    <p className="earning1">24 Hour Volume<br/>24,251,220$</p>
                    <p className="earning2">30 Day Volume<br/>204,251,220$</p>
                    <p className="earning3">7 Day Volume<br/>124,251,220$</p>
                    


                </motion.div>
                

            </div>

        </div>
    );
};

export default HeroSection;
