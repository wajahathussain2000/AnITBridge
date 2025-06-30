import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Building bridges between technology and success</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            AnITBridge was founded with a vision to bridge the gap between businesses
            and technology. We understand that in today's digital age, technology
            is not just a tool but a crucial driver of business success.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To provide innovative and sustainable IT solutions that help businesses
            transform, grow, and succeed in the digital era. We are committed to
            delivering excellence through our expertise and dedication.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Constantly evolving and adapting to new technologies</p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>Delivering the highest quality in everything we do</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>Building trust through honest and ethical practices</p>
            </div>
            <div className="value-card">
              <h3>Partnership</h3>
              <p>Creating lasting relationships with our clients</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Our Leadership</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image"></div>
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Mike Johnson</h3>
            <p>Head of Operations</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 