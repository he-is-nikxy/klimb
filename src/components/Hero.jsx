import React from 'react';
import '../styles/Hero.css';
import { motion } from 'framer-motion';
import mascot from '../assets/images/mascot.png';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Find Your Perfect <span className="highlight">Sport</span> with KLIMB
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          KLIMB helps young explorers discover sports that fit their personality and passion - in just a few fun questions!
        </motion.p>

        <motion.button
          className="hero-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Start Your Quiz
        </motion.button>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <img src={mascot} alt="KLIMB mascot" />
      </motion.div>
    </section>
  );
}
