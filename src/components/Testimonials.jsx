import React from 'react';
import '../styles/Testimonials.css';
import { motion } from 'framer-motion';
import avatar1 from '../assets/images/avatar1.png';
import avatar2 from '../assets/images/avatar2.png';
import avatar3 from '../assets/images/avatar3.png';

const testimonials = [
  {
    name: 'Riya – Parent of 9-year-old',
    quote: "KLIMB helped my daughter discover her love for badminton! She’s more confident and active now.",
    sport: '🏸 Badminton',
    image: avatar1,
  },
  {
    name: 'Kunal – Parent of 11-year-old',
    quote: "As a parent, KLIMB gave me insight into what sport suits my son’s personality. It’s fun and educational!",
    sport: '⚽ Football',
    image: avatar2,
  },
  {
    name: 'Megha – Parent of 8-year-old',
    quote: "The quiz was quick and fun. We never thought of gymnastics — now she’s loving it!",
    sport: '🤸‍♀️ Gymnastics',
    image: avatar3,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Parents Are Saying
      </motion.h2>

      <div className="testimonial-carousel">
        {testimonials.map((item, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <img src={item.image} alt={item.name} className="testimonial-avatar" />
            <h4>{item.name}</h4>
            <p className="quote">“{item.quote}”</p>
            <p className="sport">{item.sport}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
