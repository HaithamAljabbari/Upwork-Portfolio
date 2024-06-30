import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    return (
        <motion.nav
            className="navbar"
            initial={{ opacity: 0, y: -220 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
        >
            <div className="navbar-brand">XCrypto</div>
            <ul className="navbar-links">
                <li><a href="#home" ><p><button class="button-30" role="button">Download</button></p></a></li>
                <li><a href="#features"><p>Features</p></a></li>
                <li><a href="#about"><p>About</p></a></li>
                <li><a href="#contact"><p>Contact</p></a></li>
            </ul>
        </motion.nav>
    );
};

export default Navbar;
