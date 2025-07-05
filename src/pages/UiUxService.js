import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Card, Button, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PaletteIcon from '@mui/icons-material/Palette';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SpeedIcon from '@mui/icons-material/Speed';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Navbar from '../components/Navbar';
import './UiUxService.css';

const uiuxSolutions = [
  {
    icon: <DesignServicesIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'User Interface Design',
    description: 'Beautiful, intuitive interfaces that enhance user engagement and satisfaction',
    features: ['Visual Design', 'Component Libraries', 'Design Systems', 'Brand Integration']
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'User Experience Design',
    description: 'User-centered design that creates seamless, enjoyable interactions',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
  },
  {
    icon: <TouchAppIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'Interactive Design',
    description: 'Engaging interactions and micro-animations that delight users',
    features: ['Micro-interactions', 'Animation Design', 'Gesture Design', 'Feedback Systems']
  },
  {
    icon: <AccessibilityIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'Accessibility & Testing',
    description: 'Inclusive design that works for all users, regardless of abilities',
    features: ['WCAG Compliance', 'Accessibility Audits', 'User Testing', 'Performance Optimization']
  }
];

const stats = [
  { value: '85%', label: 'User Satisfaction' },
  { value: '60%', label: 'Conversion Boost' },
  { value: '100%', label: 'Accessibility' },
  { value: '24/7', label: 'Support' }
];

const UiUxService = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Handle Get Started button click
  const handleGetStartedClick = () => {
    const solutionsSection = document.querySelector('.uiux-solutions-section');
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
    <div className="uiux-service-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="uiux-hero-section">
        <div className="uiux-hero-background"></div>
        <div className="uiux-hero-content">
          <div className="uiux-hero-grid">
            <div className="uiux-hero-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="uiux-hero-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Creative Design Solutions
                </motion.div>
                <motion.h1 
                  className="uiux-hero-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  UI/UX Design & User Experience
                </motion.h1>
                <motion.p 
                  className="uiux-hero-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Create exceptional user experiences that drive engagement and conversions. 
                  User-centered design that delights and delivers results.
                </motion.p>
                <motion.div 
                  className="uiux-hero-buttons"
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
            
            <div className="uiux-hero-right">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div 
                  className="uiux-stats-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="uiux-stats-background"></div>
                  <div className="uiux-stats-content">
                    <motion.h3 
                      className="uiux-stats-title"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Why Choose Our Design Services?
                    </motion.h3>
                    <div className="uiux-stats-grid">
                      {stats.map((stat, index) => (
                        <motion.div 
                          key={index} 
                          className="uiux-stat-item"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        >
                          <span className="uiux-stat-value">{stat.value}</span>
                          <div className="uiux-stat-label">{stat.label}</div>
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
      <section className="uiux-solutions-section">
        <motion.div 
          className="uiux-solutions-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="uiux-solutions-title">
            Comprehensive Design Solutions
          </h2>
          <p className="uiux-solutions-subtitle">
            From user research to final implementation, we provide end-to-end design services
          </p>
        </motion.div>

        <div className="uiux-solutions-grid">
          {uiuxSolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="uiux-solution-card">
                <motion.div 
                  className="uiux-solution-icon"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {solution.icon}
                </motion.div>
                <h3 className="uiux-solution-title">
                  {solution.title}
                </h3>
                <p className="uiux-solution-description">
                  {solution.description}
                </p>
                <ul className="uiux-solution-features">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="uiux-solution-feature"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="uiux-solution-feature-dot"></div>
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
      <section className="uiux-process-section">
        <div className="uiux-process-container">
          <motion.div 
            className="uiux-process-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="uiux-process-title">
              Our Design Process
            </h2>
            <p className="uiux-process-subtitle">
              A proven methodology that ensures successful design outcomes
            </p>
          </motion.div>

          <div className="uiux-process-grid">
            {[
              { step: '01', title: 'Research', desc: 'Understanding your users, business goals, and market landscape' },
              { step: '02', title: 'Design', desc: 'Creating wireframes, prototypes, and visual designs' },
              { step: '03', title: 'Test', desc: 'User testing and iteration based on feedback and insights' },
              { step: '04', title: 'Deliver', desc: 'Final design assets and implementation guidance' }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="uiux-process-step">
                  <motion.div 
                    className="uiux-process-number"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {phase.step}
                  </motion.div>
                  <h3 className="uiux-process-step-title">
                    {phase.title}
                  </h3>
                  <p className="uiux-process-step-desc">
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="uiux-cta-section">
        <motion.div 
          className="uiux-cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="uiux-cta-background"></div>
          <div className="uiux-cta-content">
            <motion.h2 
              className="uiux-cta-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your User Experience?
            </motion.h2>
            <motion.p 
              className="uiux-cta-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Let's discuss how our design services can elevate your user experience
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
                Start Your Design Project
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default UiUxService; 
