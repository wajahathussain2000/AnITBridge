import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const services = [
  {
    number: 1,
    title: 'Cloud Infrastructure',
    desc: 'Scalable, secure cloud solutions for modern business.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    to: '/services/cloud',
  },
  {
    number: 2,
    title: 'Web Development',
    desc: 'Modern, responsive web apps and digital platforms.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    to: '/services/webapp',
  },
  {
    number: 3,
    title: 'IT Network & Support',
    desc: 'Reliable, secure networking and expert support.',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    to: '/services/network',
  },
  {
    number: 4,
    title: 'UI/UX Designing',
    desc: 'Intuitive, beautiful user experiences and interfaces.',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    to: '/services/uiux',
  },
];

const ConsultingServicesSection = () => (
  <section className="consulting-section redesigned-consulting-section glass-consulting-section">
    <div className="consulting-badge redesigned-badge">Our Consulting Services</div>
    <h2 className="consulting-title redesigned-title">Providing Technical Expertise for Business Advancement</h2>
    <div className="consulting-services-grid glass-grid">
      {services.map((service) => (
        <Link to={service.to} className="glass-card-link" key={service.number} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="glass-card">
            <div className="glass-card-image-wrapper">
              <img src={service.img} alt={service.title} className="glass-card-image" />
              <div className="glass-card-number">{service.number}</div>
            </div>
            <div className="glass-card-content">
              <div className="glass-card-title">{service.title}</div>
              <div className="glass-card-desc">{service.desc}</div>
              <button className="glass-card-btn">Learn More →</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default ConsultingServicesSection; 