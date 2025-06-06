import React from 'react';
import '../styles/QuizLauncher.css';
import { motion } from 'framer-motion';
import mascot from '../assets/images/mascot.png';

export default function QuizLauncher() {
  return (
    <section className="quiz-launcher" id="quiz">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Ready to Begin Your Adventure?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Discover your inner athlete! KLIMB’s quick and fun quiz helps kids and parents explore sports that fit personality, energy, and passion.
      </motion.p>

      <motion.button
        className="start-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Your Adventure
      </motion.button>

      <motion.div
        className="quiz-visuals"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <img src={mascot} alt="KLIMB Mascot" className="quiz-mascot" />
        <iframe
          className="quiz-video"
          src="https://www.youtube.com/embed/5qap5aO4i9A"
          title="KLIMB teaser"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowFullScreen
        ></iframe>
      </motion.div>
    </section>
  );
}
