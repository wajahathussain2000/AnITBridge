import React from 'react';
import { FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-bg-circles">
      <div className="footer-bg-circle circle1"></div>
      <div className="footer-bg-circle circle2"></div>
      <div className="footer-bg-circle circle3"></div>
    </div>
    <div className="footer-content">
      {/* Left: Logo, description, social */}
      <div className="footer-col footer-col-left">
        <div className="footer-logo-row">
          <img src="images/logo.png" alt="AnITBridge Logo" className="footer-logo" />
          <span className="footer-logo-text">AnITBridge<br /><span className="footer-logo-sub">CONSULTING</span></span>
        </div>
        <div className="footer-desc">
          AnITBridge is more than simply a cloud operations consulting firm; we are a strategic partner committed to achieving business success with innovative, bespoke solutions.
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Instagram" className="footer-social-icon"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn" className="footer-social-icon"><FaLinkedin /></a>
        </div>
      </div>
      {/* Middle: Services */}
      <div className="footer-col footer-col-mid">
        <div className="footer-col-title">Our Services</div>
        <ul className="footer-services-list">
          <li>Cloud infrastructure and Solutions</li>
          <li>IT Network & Support</li>
          <li>Web Development</li>
          <li>UI/UX Designing</li>
        </ul>
      </div>
      {/* Right: Contact */}
      <div className="footer-col footer-col-right">
        <div className="footer-col-title">Get Connected</div>
        <div className="footer-contact-row"><FaMapMarkerAlt className="footer-contact-icon" /> Ottawa, ON, Canada</div>
        <div className="footer-contact-row"><FaEnvelope className="footer-contact-icon" /> sales@AnITBridge.com</div>
        <div className="footer-contact-row"><FaPhone className="footer-contact-icon" /> (343) 254-4596</div>
      </div>
    </div>
    <hr className="footer-divider" />
    <div className="footer-bottom-row">
      <span className="footer-copyright">Copyright © 2025 AnITBridge - All Rights Reserved.</span>
      <span className="footer-links">
        <a href="#">Home</a> · <a href="#">Contact</a> · <a href="#">Privacy Policy</a> · <a href="#">Terms & Conditions</a>
      </span>
    </div>
  </footer>
);

export default Footer; 