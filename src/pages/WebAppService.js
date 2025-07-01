import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServiceSidebar from '../components/ServiceSidebar';
import ContactSection from '../components/ContactSection';
import './UiUxService.css';

const WebAppService = () => (
  <div className="webapp-service">
    <Navbar />
    <HeroSection
      title="Web & App Development"
      slogan="Building Modern Web and Mobile Experiences"
    />
    <div className="service-detail-layout">
      <ServiceSidebar active="webapp" />
      <main className="service-detail-main">
        <div className="service-badge">INNOVATIVE DIGITAL SOLUTIONS</div>
        <h2>Developing Robust Web and App Solutions for Your Business</h2>
        <p>
          Our web and app development services are designed to help your business thrive in the digital age. We create scalable, secure, and user-friendly applications tailored to your unique needs.
        </p>
        <p>
          From initial concept to deployment, our team ensures your digital products are built with the latest technologies and best practices for performance and reliability.
        </p>
        <div className="service-why-choose">
          <div className="why-choose-content">
            <div className="why-badge">WHY CHOOSE US</div>
            <h3>Accelerate Your Digital Transformation</h3>
            <ul className="why-list">
              <li><span className="why-icon">✔</span> <b>Custom Development</b><br /><span className="why-desc">We deliver solutions tailored to your business goals and user needs.</span></li>
              <li><span className="why-icon">✔</span> <b>Cross-Platform Expertise</b><br /><span className="why-desc">Our apps work seamlessly across web, iOS, and Android platforms.</span></li>
              <li><span className="why-icon">✔</span> <b>Agile Process</b><br /><span className="why-desc">We use agile methodologies for faster delivery and continuous improvement.</span></li>
              <li><span className="why-icon">✔</span> <b>Ongoing Support</b><br /><span className="why-desc">We provide maintenance and updates to keep your apps running smoothly.</span></li>
            </ul>
          </div>
          <div className="why-choose-image">
            <img src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=400&q=80" alt="Web App Development" />
          </div>
        </div>
      </main>
    </div>
    <ContactSection />
  </div>
);

export default WebAppService; 