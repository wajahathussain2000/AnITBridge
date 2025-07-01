import React from 'react';
import '../styles/Contact.css';

const ContactSection = () => (
  <div className="contact-content">
    <div className="contact-left">
      <button className="contact-badge">GET IN TOUCH</button>
      <h2>Reach Our Team</h2>
      <p>Send a message through given form. If your enquiry is time sensitive please use below contact details.</p>
      <div className="contact-row">
        <span className="label">Hours:</span>
        <span>Monday - Friday<br/>Saturday - Sunday</span>
        <span>9AM - 5PM (EST)<br/>Closed</span>
      </div>
      <hr />
      <div className="contact-row">
        <span className="label">Get In Touch:</span>
        <span>(343)-254-4596</span>
        <span>sales@AnITBridge.com</span>
      </div>
      <hr />
    </div>
    <div className="contact-right">
      <h3>Drop Us A Line!</h3>
      <p className="contact-form-desc">Feel free to send us a message about anything you might need help with. We would love to hear from you</p>
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Your Name...." />
          <input type="email" placeholder="Your Email...." />
        </div>
        <textarea placeholder="Your Message...." rows="5" />
        <button type="submit" className="send-btn">Send A Message</button>
      </form>
    </div>
  </div>
);

export default ContactSection; 