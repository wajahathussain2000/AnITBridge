import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Card, Button, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import Navbar from '../components/Navbar';
import './WebAppService.css';

const webAppSolutions = [
  {
    icon: <WebIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies',
    features: ['React/Next.js', 'Progressive Web Apps', 'SEO Optimization', 'Performance Tuning']
  },
  {
    icon: <MobileFriendlyIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps that deliver exceptional user experiences',
    features: ['React Native', 'Flutter Development', 'Native iOS/Android', 'App Store Optimization']
  },
  {
    icon: <CodeIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to meet your specific business needs',
    features: ['Enterprise Applications', 'API Development', 'Database Design', 'System Integration']
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'Security & Testing',
    description: 'Comprehensive security measures and thorough testing protocols',
    features: ['Security Audits', 'Penetration Testing', 'Automated Testing', 'Code Quality']
  }
];

const stats = [
  { value: '100%', label: 'Responsive Design' },
  { value: '60%', label: 'Faster Development' },
  { value: '24/7', label: 'Support' },
  { value: '99.9%', label: 'Uptime' }
];

const WebAppService = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Handle Get Started button click
  const handleGetStartedClick = () => {
    const solutionsSection = document.querySelector('.webapp-solutions-section');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle CTA button click
  const handleCTAClick = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="webapp-service-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="webapp-hero-section">
        <div className="webapp-hero-background"></div>
        <div className="webapp-hero-content">
          <div className="webapp-hero-grid">
            <div className="webapp-hero-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="webapp-hero-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Custom Web & Mobile Solutions
                </motion.div>
                <motion.h1 
                  className="webapp-hero-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Web & Mobile Application Development
                </motion.h1>
                <motion.p 
                  className="webapp-hero-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Transform your ideas into powerful, scalable applications. 
                  Modern development practices for exceptional user experiences.
                </motion.p>
                <motion.div 
                  className="webapp-hero-buttons"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Button 
                    variant="contained"
                    size="large"
                    onClick={handleGetStartedClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    component={motion.button}
                    sx={{
                      background: 'linear-gradient(135deg, #0072ce 0%, #0056b3 100%)',
                      color: 'white',
                      padding: '1rem 2rem',
                      borderRadius: '12px',
                      fontWeight: 600,
                      fontSize: '1rem',
                      textTransform: 'none',
                      border: 'none',
                      boxShadow: '0 8px 25px rgba(0, 114, 206, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 35px rgba(0, 114, 206, 0.4)',
                        background: 'linear-gradient(135deg, #0056b3 0%, #004494 100%)'
                      }
                    }}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="webapp-hero-right">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div 
                  className="webapp-stats-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="webapp-stats-background"></div>
                  <div className="webapp-stats-content">
                    <motion.h3 
                      className="webapp-stats-title"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Why Choose Our Development Services?
                    </motion.h3>
                    <div className="webapp-stats-grid">
                      {stats.map((stat, index) => (
                        <motion.div 
                          key={index} 
                          className="webapp-stat-item"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        >
                          <span className="webapp-stat-value">{stat.value}</span>
                          <div className="webapp-stat-label">{stat.label}</div>
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

      {/* Solutions Section */}
      <section className="webapp-solutions-section">
        <motion.div 
          className="webapp-solutions-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="webapp-solutions-title">
            Comprehensive Development Solutions
          </h2>
          <p className="webapp-solutions-subtitle">
            From web applications to mobile apps, we provide end-to-end development services
          </p>
        </motion.div>

        <div className="webapp-solutions-grid">
          {webAppSolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="webapp-solution-card">
                <motion.div 
                  className="webapp-solution-icon"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {solution.icon}
                </motion.div>
                <h3 className="webapp-solution-title">
                  {solution.title}
                </h3>
                <p className="webapp-solution-description">
                  {solution.description}
                </p>
                <ul className="webapp-solution-features">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="webapp-solution-feature"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="webapp-solution-feature-dot"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="webapp-process-section">
        <div className="webapp-process-container">
          <motion.div 
            className="webapp-process-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="webapp-process-title">
              Our Development Process
            </h2>
            <p className="webapp-process-subtitle">
              A proven methodology that ensures successful application delivery
            </p>
          </motion.div>

          <div className="webapp-process-grid">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your requirements and defining project scope and objectives' },
              { step: '02', title: 'Design', desc: 'Creating wireframes, prototypes, and user experience design' },
              { step: '03', title: 'Development', desc: 'Building your application using modern technologies and best practices' },
              { step: '04', title: 'Deployment', desc: 'Testing, launching, and providing ongoing support and maintenance' }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="webapp-process-step">
                  <motion.div 
                    className="webapp-process-number"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {phase.step}
                  </motion.div>
                  <h3 className="webapp-process-step-title">
                    {phase.title}
                  </h3>
                  <p className="webapp-process-step-desc">
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="webapp-cta-section">
        <motion.div 
          className="webapp-cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="webapp-cta-background"></div>
          <div className="webapp-cta-content">
            <motion.h2 
              className="webapp-cta-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Build Your Application?
            </motion.h2>
            <motion.p 
              className="webapp-cta-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Let's discuss how our development services can bring your ideas to life
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                variant="contained"
                size="large"
                onClick={handleCTAClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                component={motion.button}
                sx={{
                  background: 'linear-gradient(135deg, #0072ce 0%, #0056b3 100%)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  border: 'none',
                  boxShadow: '0 8px 25px rgba(0, 114, 206, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 35px rgba(0, 114, 206, 0.4)',
                    background: 'linear-gradient(135deg, #0056b3 0%, #004494 100%)'
                  }
                }}
              >
                Start Your Project
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default WebAppService; 