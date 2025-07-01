import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServiceSidebar from '../components/ServiceSidebar';
import ContactSection from '../components/ContactSection';
import './UiUxService.css';

const CloudService = () => (
  <div className="cloud-service">
    <Navbar />
    <HeroSection
      title="Cloud & Solutions Architecture"
      slogan="Empowering Growth with Scalable Cloud Solutions"
    />
    <div className="service-detail-layout">
      <ServiceSidebar active="cloud" />
      <main className="service-detail-main">
        <div className="service-badge">SCALABLE CLOUD SOLUTIONS</div>
        <h2>Designing Secure and Scalable Cloud Architectures</h2>
        <p>
          Our cloud architecture services help you leverage the power of the cloud to drive business growth and innovation. We design, implement, and manage cloud solutions tailored to your needs.
        </p>
        <p>
          From migration to optimization, we ensure your cloud infrastructure is secure, cost-effective, and future-ready.
        </p>
        <div className="service-why-choose">
          <div className="why-choose-content">
            <div className="why-badge">WHY CHOOSE US</div>
            <h3>Unlock the Power of the Cloud</h3>
            <ul className="why-list">
              <li><span className="why-icon">✔</span> <b>Cloud Strategy</b><br /><span className="why-desc">We develop a cloud roadmap aligned with your business goals.</span></li>
              <li><span className="why-icon">✔</span> <b>Security & Compliance</b><br /><span className="why-desc">We implement best practices to protect your data and ensure compliance.</span></li>
              <li><span className="why-icon">✔</span> <b>Cost Optimization</b><br /><span className="why-desc">We help you maximize ROI by optimizing cloud resources and spend.</span></li>
              <li><span className="why-icon">✔</span> <b>Seamless Migration</b><br /><span className="why-desc">We ensure a smooth transition to the cloud with minimal disruption.</span></li>
            </ul>
          </div>
          <div className="why-choose-image">
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=400&q=80" alt="Cloud Solutions" />
          </div>
        </div>
      </main>
    </div>
    <ContactSection />
  </div>
);

export default CloudService; 