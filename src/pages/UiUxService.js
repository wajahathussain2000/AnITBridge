import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServiceSidebar from '../components/ServiceSidebar';
import ContactSection from '../components/ContactSection';
import './UiUxService.css';

const UiUxService = () => (
  <div className="uiux-service">
    <Navbar />
    <HeroSection
      title="UI/UX Design"
      slogan="Crafting Intuitive and Engaging Digital Interfaces"
    />
    <div className="service-detail-layout">
      <ServiceSidebar active="uiux" />
      <main className="service-detail-main">
        <div className="service-badge">INSPIRING & ELEVATING EXPERIENCES</div>
        <h2>Crafting Engaging User Experiences That Inspire and Delight</h2>
        <p>
          Great design is more than just aesthetics—it's about creating a seamless, enjoyable experience for your users. Our UI/UX design services focus on human-centered design principles to create engaging and intuitive digital experiences.
        </p>
        <p>
          From wireframes to high-fidelity prototypes, we guide you through every step of the design process to ensure that your users' needs are met and exceeded.
        </p>
        <div className="service-why-choose">
          <div className="why-choose-content">
            <div className="why-badge">WHY CHOOSE US</div>
            <h3>Save Time and Effort</h3>
            <ul className="why-list">
              <li><span className="why-icon">✔</span> <b>User-Centric Approach</b><br /><span className="why-desc">We conduct thorough user research and usability tests to create designs that resonate with your audience.</span></li>
              <li><span className="why-icon">✔</span> <b>Creative Visuals</b><br /><span className="why-desc">Our designs are crafted to reflect your brand identity, combining beauty with functionality.</span></li>
              <li><span className="why-icon">✔</span> <b>Interaction Design</b><br /><span className="why-desc">We focus on smooth, interactive experiences to engage users across multiple platforms (web, mobile, and tablets).</span></li>
              <li><span className="why-icon">✔</span> <b>Consistency</b><br /><span className="why-desc">We ensure design consistency across your entire digital ecosystem, including websites and apps.</span></li>
            </ul>
          </div>
          <div className="why-choose-image">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=400&q=80" alt="Teamwork" />
          </div>
        </div>
      </main>
    </div>
    <ContactSection />
  </div>
);

export default UiUxService; 