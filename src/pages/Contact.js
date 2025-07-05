import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, TextField, Button, Stack, IconButton, Chip } from '@mui/material';
import { Phone, Email, LocationOn, AccessTime, Send, Business, Support } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    privacy: false,
    subscribe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const stats = [
    { value: '24/7', label: 'Support' },
    { value: '2hr', label: 'Response' },
    { value: '100%', label: 'Satisfaction' },
    { value: '500+', label: 'Clients' }
  ];

  return (
    <div className="contact-page-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-background"></div>
        <div className="contact-hero-content">
          <div className="contact-hero-grid">
            <div className="contact-hero-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="contact-hero-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Get In Touch
                </motion.div>
                <motion.h1 
                  className="contact-hero-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Let's Build Something Amazing Together
                </motion.h1>
                <motion.p 
                  className="contact-hero-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Ready to transform your business with cutting-edge technology solutions? 
                  Our team of experts is here to turn your vision into reality.
                </motion.p>
              </motion.div>
            </div>
            
            <div className="contact-hero-right">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div 
                  className="contact-stats-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="contact-stats-background"></div>
                  <div className="contact-stats-content">
                    <motion.h3 
                      className="contact-stats-title"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Why Choose AnITBridge?
                    </motion.h3>
                    <div className="contact-stats-grid">
                      {stats.map((stat, index) => (
                        <motion.div 
                          key={index} 
                          className="contact-stat-item"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        >
                          <span className="contact-stat-value">{stat.value}</span>
                          <div className="contact-stat-label">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods-section">
        <motion.div 
          className="contact-methods-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="contact-methods-title">
            Multiple Ways to Connect
          </h2>
          <p className="contact-methods-subtitle">
            Choose the most convenient way to reach our team
          </p>
        </motion.div>

        <div className="contact-methods-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
                         <div className="contact-method-card">
               <div className="contact-method-icon">
                 <Phone sx={{ fontSize: 32 }} />
               </div>
              <h3 className="contact-method-title">Call Us</h3>
              <p className="contact-method-description">
                Speak directly with our solution architects and technical experts
              </p>
              <div className="contact-method-value">+1 (555) 123-4567</div>
              <div className="contact-method-note">Available Mon-Fri, 9AM-6PM EST</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
                         <div className="contact-method-card">
               <div className="contact-method-icon">
                 <Email sx={{ fontSize: 32 }} />
               </div>
              <h3 className="contact-method-title">Email Us</h3>
              <p className="contact-method-description">
                Send us detailed project requirements and get a comprehensive proposal
              </p>
              <div className="contact-method-value">hello@anitbridge.com</div>
              <div className="contact-method-note">Response within 2 hours during business hours</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
                         <div className="contact-method-card">
               <div className="contact-method-icon">
                 <LocationOn sx={{ fontSize: 32 }} />
               </div>
              <h3 className="contact-method-title">Visit Us</h3>
              <p className="contact-method-description">
                Schedule an in-person meeting at our modern office space
              </p>
              <div className="contact-method-value">San Francisco, CA</div>
              <div className="contact-method-note">By appointment only</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <Grid container spacing={6} alignItems="flex-start">
            <Grid item xs={12} lg={7}>
              <motion.div 
                className="contact-form-wrapper"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="contact-form-header">
                  <h2 className="contact-form-title">Start Your Project</h2>
                  <p className="contact-form-subtitle">
                    Tell us about your vision and we'll create a custom solution
                  </p>
                </div>
                
                <Box component="form" onSubmit={handleSubmit} className="contact-form">
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        name="firstName"
                        label="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="contact-form-field"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        name="lastName"
                        label="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="contact-form-field"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        name="email"
                        label="Work Email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="contact-form-field"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="phone"
                        label="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="contact-form-field"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="company"
                        label="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="contact-form-field"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="service"
                        label="Service Interest"
                        select
                        value={formData.service}
                        onChange={handleInputChange}
                        className="contact-form-field"
                        variant="outlined"
                        SelectProps={{
                          native: true,
                        }}
                      >
                        <option value="">Select a service</option>
                        <option value="cloud">Cloud Solutions</option>
                        <option value="network">Network Services</option>
                        <option value="webapp">Web & Mobile Apps</option>
                        <option value="uiux">UI/UX Design</option>
                        <option value="consulting">IT Consulting</option>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        name="message"
                        label="Project Details"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="contact-form-field"
                        variant="outlined"
                        placeholder="Describe your project requirements, goals, and timeline..."
                      />
                    </Grid>
                  </Grid>
                  
                  <div className="contact-form-checkboxes">
                    <div className="contact-checkbox-item">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleInputChange}
                        className="contact-custom-checkbox"
                      />
                      <label htmlFor="privacy">
                        I agree to the <a href="#" className="contact-link-text">Privacy Policy</a> and consent to being contacted
                      </label>
                    </div>
                    <div className="contact-checkbox-item">
                      <input
                        type="checkbox"
                        id="subscribe"
                        name="subscribe"
                        checked={formData.subscribe}
                        onChange={handleInputChange}
                        className="contact-custom-checkbox"
                      />
                      <label htmlFor="subscribe">
                        Subscribe to our newsletter for industry insights and updates
                      </label>
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    className="contact-submit-button"
                    endIcon={<Send />}
                  >
                    Send Message
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} lg={5}>
              <motion.div 
                className="contact-info-sidebar"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="contact-info-cards-row">
                  <div className="contact-info-card">
                    <h3 className="contact-info-title">Why Choose AnITBridge?</h3>
                    <div className="contact-benefits-list">
                      <div className="contact-benefit-item">
                        <div className="contact-benefit-icon">✓</div>
                        <div>
                          <h4 className="contact-benefit-title">Expert Team</h4>
                          <p className="contact-benefit-description">
                            Certified professionals with 10+ years of experience
                          </p>
                        </div>
                      </div>
                      <div className="contact-benefit-item">
                        <div className="contact-benefit-icon">✓</div>
                        <div>
                          <h4 className="contact-benefit-title">Rapid Delivery</h4>
                          <p className="contact-benefit-description">
                            Agile methodology ensures quick project completion
                          </p>
                        </div>
                      </div>
                      <div className="contact-benefit-item">
                        <div className="contact-benefit-icon">✓</div>
                        <div>
                          <h4 className="contact-benefit-title">Ongoing Support</h4>
                          <p className="contact-benefit-description">
                            24/7 technical support and maintenance services
                          </p>
                        </div>
                      </div>
                      <div className="contact-benefit-item">
                        <div className="contact-benefit-icon">✓</div>
                        <div>
                          <h4 className="contact-benefit-title">Scalable Solutions</h4>
                          <p className="contact-benefit-description">
                            Future-proof architecture that grows with your business
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="contact-response-card">
                    <h3 className="contact-response-title">What Happens Next?</h3>
                    <div className="contact-response-steps">
                      <div className="contact-step-item">
                        <div className="contact-step-number">1</div>
                        <p>We'll review your requirements within 2 hours</p>
                      </div>
                      <div className="contact-step-item">
                        <div className="contact-step-number">2</div>
                        <p>Schedule a consultation call with our experts</p>
                      </div>
                      <div className="contact-step-item">
                        <div className="contact-step-number">3</div>
                        <p>Receive a detailed proposal and timeline</p>
                      </div>
                      <div className="contact-step-item">
                        <div className="contact-step-number">4</div>
                        <p>Begin your transformation journey</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="contact-cta-card">
          <div className="contact-cta-background"></div>
          <div className="contact-cta-content">
            <motion.h2 
              className="contact-cta-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="contact-cta-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join hundreds of companies that trust AnITBridge for their digital transformation
            </motion.p>
            <motion.div 
              className="contact-cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                className="contact-cta-primary-btn"
                onClick={() => window.location.href = '/contact'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                component={motion.button}
              >
                Schedule a Consultation
              </Button>
              <Button 
                className="contact-cta-secondary-btn"
                onClick={() => window.location.href = '/projects'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                component={motion.button}
              >
                View Our Portfolio
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 