import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Work1 from "./pages/work1"
import './App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <header>
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" className="navbar-brand">MyPortfolio</NavLink>
          <button className="menu-toggle" onClick={toggleMenu}>☰</button>
          <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/workOne" activeClassName="active">Work</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workTwo" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workOne" element={<Work1 />}/>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
