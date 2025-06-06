import React from 'react';
import '../styles/Footer.css';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      id="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-top">
        <div className="footer-branding">
          <h3 className="footer-logo">KLIMB</h3>
          <p className="footer-tagline">
            Helping every child discover their dream sport 🏆
          </p>
        </div>

        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>🌟 Over <strong>12,000</strong> kids have taken the KLIMB Quiz!</p>
        <p>© {new Date().getFullYear()} KLIMB. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
