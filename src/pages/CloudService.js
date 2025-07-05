import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Card, Button, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import SpeedIcon from '@mui/icons-material/Speed';
import Navbar from '../components/Navbar';
import './CloudService.css';

const cloudSolutions = [
  {
    icon: <ArchitectureIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'Cloud Architecture',
    description: 'Scalable, resilient infrastructure designed for enterprise growth',
    features: ['Microservices Architecture', 'Auto-scaling', 'Load Balancing', 'High Availability']
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with industry compliance standards',
    features: ['SOC 2 Type II', 'GDPR Compliance', 'Zero Trust Security', '24/7 Monitoring']
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'Performance Optimization',
    description: 'Data-driven optimization for maximum efficiency and cost savings',
    features: ['Cost Analysis', 'Performance Tuning', 'Resource Optimization', 'ROI Tracking']
  },
  {
    icon: <SwapHorizIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'Migration Services',
    description: 'Seamless cloud migration with zero business disruption',
    features: ['Lift & Shift', 'Re-architecture', 'Data Migration', 'Testing & Validation']
  }
];

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '50%', label: 'Cost Reduction' },
  { value: '24/7', label: 'Support' },
  { value: '48hrs', label: 'Response Time' }
];

const CloudService = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Handle Get Started button click
  const handleGetStartedClick = () => {
    const solutionsSection = document.querySelector('.cloud-solutions-section');
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
    <div className="cloud-service-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="cloud-hero-section">
        <div className="cloud-hero-background"></div>
        <div className="cloud-hero-content">
          <div className="cloud-hero-grid">
            <div className="cloud-hero-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="cloud-hero-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Enterprise Cloud Solutions
                </motion.div>
                <motion.h1 
                  className="cloud-hero-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Cloud Infrastructure & Solutions
                </motion.h1>
                <motion.p 
                  className="cloud-hero-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Transform your business with enterprise-grade cloud solutions. 
                  Scalable, secure, and optimized for performance.
                </motion.p>
                <motion.div 
                  className="cloud-hero-buttons"
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
            
            <div className="cloud-hero-right">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div 
                  className="cloud-stats-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="cloud-stats-background"></div>
                  <div className="cloud-stats-content">
                    <motion.h3 
                      className="cloud-stats-title"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Why Choose Our Cloud Solutions?
                    </motion.h3>
                    <div className="cloud-stats-grid">
                      {stats.map((stat, index) => (
                        <motion.div 
                          key={index} 
                          className="cloud-stat-item"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        >
                          <span className="cloud-stat-value">{stat.value}</span>
                          <div className="cloud-stat-label">{stat.label}</div>
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
      <section className="cloud-solutions-section">
        <motion.div 
          className="cloud-solutions-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="cloud-solutions-title">
            Comprehensive Cloud Solutions
          </h2>
          <p className="cloud-solutions-subtitle">
            From architecture design to ongoing optimization, we provide end-to-end cloud solutions
          </p>
        </motion.div>

        <div className="cloud-solutions-grid">
          {cloudSolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="cloud-solution-card">
                <motion.div 
                  className="cloud-solution-icon"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {solution.icon}
                </motion.div>
                <h3 className="cloud-solution-title">
                  {solution.title}
                </h3>
                <p className="cloud-solution-description">
                  {solution.description}
                </p>
                <ul className="cloud-solution-features">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="cloud-solution-feature"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="cloud-solution-feature-dot"></div>
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
      <section className="cloud-process-section">
        <div className="cloud-process-container">
          <motion.div 
            className="cloud-process-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cloud-process-title">
              Our Implementation Process
            </h2>
            <p className="cloud-process-subtitle">
              A proven methodology that ensures successful cloud transformation
            </p>
          </motion.div>

          <div className="cloud-process-grid">
            {[
              { step: '01', title: 'Assessment', desc: 'Comprehensive analysis of your current infrastructure and business requirements' },
              { step: '02', title: 'Strategy', desc: 'Develop a tailored cloud strategy aligned with your business objectives' },
              { step: '03', title: 'Implementation', desc: 'Execute the migration with minimal disruption to your operations' },
              { step: '04', title: 'Optimization', desc: 'Continuous monitoring and optimization for peak performance' }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="cloud-process-step">
                  <motion.div 
                    className="cloud-process-number"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {phase.step}
                  </motion.div>
                  <h3 className="cloud-process-step-title">
                    {phase.title}
                  </h3>
                  <p className="cloud-process-step-desc">
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cloud-cta-section">
        <motion.div 
          className="cloud-cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="cloud-cta-background"></div>
          <div className="cloud-cta-content">
            <motion.h2 
              className="cloud-cta-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Infrastructure?
            </motion.h2>
            <motion.p 
              className="cloud-cta-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Let's discuss how our cloud solutions can accelerate your business growth
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                className="shared-button shared-button-large"
                onClick={handleCTAClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                component={motion.button}
              >
                Schedule a Consultation
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CloudService; 