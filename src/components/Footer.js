import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const handleGetStartedClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
  <footer className="modern-footer">
    {/* 3D Geometric Background Elements */}
    <div className="floating-shapes"></div>
    <div className="cube-shape"></div>
    
    <div className="modern-footer-shapes">
      <div className="footer-blob blob1" />
      <div className="footer-blob blob2" />
      <div className="footer-blob blob3" />
      <div className="footer-blob blob4" />
    </div>
    <div className="modern-footer-cta">
      <div className="modern-footer-cta-title">Want to partner with us?</div>
      <div className="modern-footer-cta-desc">
        If you're interested in our partnership and would like to find out some more information, one of our advisors is excited to help.
      </div>
      <button className="modern-footer-cta-btn" onClick={handleGetStartedClick}>Get started</button>
    </div>
    <div className="modern-footer-content">
      <div className="modern-footer-logo-col">
        <img src="/images/itbridgelogo-removebg-preview.png" alt="AnITBridge Logo" className="footer-logo-img" />
      </div>
      <div className="modern-footer-col">
        <div className="modern-footer-col-title">PARTNERSHIPS</div>
        <a href="#">Websites</a>
        <a href="#">Cloud Services</a>
        <a href="#">Branding</a>
      </div>
      <div className="modern-footer-col">
        <div className="modern-footer-col-title">ABOUT</div>
        <a href="#">Our Why</a>
        <a href="#">Our Work</a>
        <a href="#">Careers</a>
      </div>
      <div className="modern-footer-col">
        <div className="modern-footer-col-title">SUPPORT</div>
        <a href="#">Support Request</a>
        <a href="#">Contact</a>
      </div>
      <div className="modern-footer-col">
        <div className="modern-footer-col-title">FOLLOW US</div>
        <div className="modern-footer-socials">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <div className="modern-footer-bottom">
      <span>©2025 AnITBridge. All rights reserved.</span>
      <a href="#">Privacy Policy</a>
    </div>
  </footer>
  );
};

export default Footer; 