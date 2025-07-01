import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = ({ title }) => (
  <section className="hero-section-shared">
    <div className="hero-section-shared-content">
      <h1>{title}</h1>
      <p>Where Innovation Meets IT Excellence</p>
    </div>
  </section>
);

export default HeroSection; 