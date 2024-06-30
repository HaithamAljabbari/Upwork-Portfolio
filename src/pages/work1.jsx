// src/App.jsx
import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import FeatureSection from './components/FeatureSection.jsx';
import Footer from './components/Footer.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';
import InformationSection from "./components/InformationSection.jsx"
import ImageScroller from "./components/ImageSlider"
import './work1.css';



const work1 = () => {
    return (
      <>
        <ParallaxProvider>
            <div className="AppTwo">
               
                <HeroSection />

                <FeatureSection />
                <InformationSection/>
                <Footer />

            </div>
        </ParallaxProvider>
        </>
    );
}

export default work1;
