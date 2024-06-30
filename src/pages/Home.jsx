import React from 'react';
import { motion } from 'framer-motion';
import "./Home.css";
import haitham from "./haitham.png";
import web1 from "./images/web1.png";
import web2 from "./images/web2.mp4";
import web3 from "./images/web3.png";
import block from './SpinningBlock.jsx';

// Define animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5, staggerChildren: 0.3 }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 }
};

const sliderVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 }
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const scrollVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 1 }
  }
};

const Home = () => (
  <>
    <motion.div 
      className="container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="title" variants={titleVariants}>
        <h2 data-text="Haitham Jabbari">Haitham Jabbari</h2>
        <motion.div id="textSlider" className="row" variants={sliderVariants}>
          <div className="scroller">
            <div className="inner">
              <p>Landing Page Designer</p>
              <p>Web Developer</p>
              <p>ReactJS Developer</p>
              <p>Personal Brand</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.img src={haitham} alt="Haitham Aljabbari" variants={imageVariants} />
    </motion.div>
    <br/>
    <br/>
    <motion.section 
      className="description"
      initial="hidden"
      animate="visible"
      variants={descriptionVariants}
    >
      <h3>About My Freelancing Services and examples</h3>
      <motion.div className="scroll-content" variants={scrollVariants}>
        <motion.div className="scroll-inner" variants={scrollVariants}>
          <p>
            I specialize in creating engaging and professional landing pages that help businesses convert visitors into customers. 
            With a strong background in web development and expertise in ReactJS, I provide solutions that are not only visually appealing but also highly functional.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>

    <motion.div 
      className="gallery"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <ul>

        <motion.li variants={imageVariants}>
          <img src={web1} alt="Web 1" />
        </motion.li>
        <motion.li variants={imageVariants}>
          <img src={web2} alt="Web 2" />
        </motion.li>
        <motion.li variants={imageVariants}>
          <img src={web3} alt="Web 3" />
        </motion.li>
        <br/>
        <br/>
        {/* Add more list items as needed */}
      </ul>
    </motion.div>
    <a href="/workTwo"><button className="button-89" role="button">Check out my work</button></a>
  </>
);

export default Home;


