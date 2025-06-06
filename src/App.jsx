import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JourneyTracker from './components/JourneyTracker';
import QuizLauncher from './components/QuizLauncher';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="tracker">
        <JourneyTracker />
      </section>
      <section id="quiz">
        <QuizLauncher />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <Footer />
    </div>
  );
}
