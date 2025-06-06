import React from 'react';
import '../styles/JourneyTracker.css';
import academyIcon from '../assets/icons/academy.svg';
import quizIcon from '../assets/icons/quiz.svg';
import discoverIcon from '../assets/icons/discover.svg';
import progressIcon from '../assets/icons/progress.svg';
import revealIcon from '../assets/icons/reveal.svg';

const steps = [
  {
    id: 1,
    title: 'Discover Klimb',
    description: 'Learn about the platform and its offerings.',
    icon: discoverIcon,
  },
  {
    id: 2,
    title: 'Take the Quiz',
    description: 'Answer fun questions to find your best sports match.',
    icon: quizIcon,
  },
  {
    id: 3,
    title: 'Reveal Your Sport Matches',
    description: 'See which sports fit your personality and skills.',
    icon: revealIcon,
  },
  {
    id: 4,
    title: 'Visit an Academy',
    description: 'Get connected with local academies for training.',
    icon: academyIcon,
  },
  {
    id: 5,
    title: 'Track your Progress',
    description: 'Keep tabs on your growth and achievements.',
    icon: progressIcon,
  },
];

export default function JourneyTracker() {
  return (
    <section id="tracker" className="journey-tracker">
      <h2>Your Journey with KLIMB</h2>
      <div className="tracker-container">
        {steps.map((step) => (
          <div key={step.id} className="tracker-card">
            <img src={step.icon} alt={step.title} className="tracker-icon" />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
