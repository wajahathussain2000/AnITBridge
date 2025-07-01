import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServiceSidebar from '../components/ServiceSidebar';
import ContactSection from '../components/ContactSection';
import './UiUxService.css';

const NetworkService = () => (
  <div className="network-service">
    <Navbar />
    <HeroSection
      title="IT Network & Support"
      slogan="Reliable Networking and Support for Seamless Operations"
    />
    <div className="service-detail-layout">
      <ServiceSidebar active="network" />
      <main className="service-detail-main">
        <div className="service-badge">RELIABLE IT SOLUTIONS</div>
        <h2>Ensuring Secure and Efficient IT Networks</h2>
        <p>
          Our IT network and support services keep your business connected, secure, and running smoothly. We design, implement, and manage robust network infrastructures tailored to your needs.
        </p>
        <p>
          From troubleshooting to proactive monitoring, our team ensures your IT environment is always optimized and protected.
        </p>
        <div className="service-why-choose">
          <div className="why-choose-content">
            <div className="why-badge">WHY CHOOSE US</div>
            <h3>Stay Connected and Secure</h3>
            <ul className="why-list">
              <li><span className="why-icon">✔</span> <b>24/7 Support</b><br /><span className="why-desc">Our experts are available around the clock to resolve any IT issues quickly.</span></li>
              <li><span className="why-icon">✔</span> <b>Network Security</b><br /><span className="why-desc">We implement advanced security measures to protect your data and systems.</span></li>
              <li><span className="why-icon">✔</span> <b>Performance Monitoring</b><br /><span className="why-desc">We continuously monitor your network to ensure optimal performance and uptime.</span></li>
              <li><span className="why-icon">✔</span> <b>Scalable Solutions</b><br /><span className="why-desc">Our services grow with your business, adapting to your changing needs.</span></li>
            </ul>
          </div>
          <div className="why-choose-image">
            <img src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=400&q=80" alt="IT Network Support" />
          </div>
        </div>
      </main>
    </div>
    <ContactSection />
  </div>
);

export default NetworkService; 