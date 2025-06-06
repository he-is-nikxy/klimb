
import React, { useState } from 'react';
import '../styles/Navbar.css';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <motion.nav
      className={`navbar ${darkMode ? 'dark' : ''}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-logo">KLIMB</div>

      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li onClick={() => scrollToSection('hero')}>Home</li>
        <li onClick={() => scrollToSection('tracker')}>How It Works</li>
        <li onClick={() => scrollToSection('tracker')}>Tracker</li>
        <li onClick={() => scrollToSection('testimonials')}>Testimonials</li>
        <li onClick={() => scrollToSection('quiz')}>Get Started</li>
      </ul>

      <button className="darkmode-toggle" onClick={toggleDarkMode}>
        {darkMode ? '🌞' : '🌙'}
      </button>
    </motion.nav>
  );
}
