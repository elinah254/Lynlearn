import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to LynLearn</h1>
        <p>Empowering learners through hands-on coding experiences</p>
        <a href="#courses" className="cta">Explore Courses</a>
      </div>
    </section>
  );
};

export default HeroSection;
