import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Card, Button, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import RouterIcon from '@mui/icons-material/Router';
import WifiIcon from '@mui/icons-material/Wifi';
import StorageIcon from '@mui/icons-material/Storage';
import Navbar from '../components/Navbar';
import './NetworkService.css';

const networkSolutions = [
  {
    icon: <RouterIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'Network Infrastructure',
    description: 'Robust, scalable network architecture designed for enterprise performance',
    features: ['SD-WAN Solutions', 'Network Virtualization', 'Load Balancing', 'High Availability']
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'Network Security',
    description: 'Comprehensive security solutions to protect your network infrastructure',
    features: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'Threat Monitoring']
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'Performance Optimization',
    description: 'Data-driven network optimization for maximum efficiency and speed',
    features: ['Bandwidth Management', 'Traffic Analysis', 'QoS Implementation', 'Latency Reduction']
  },
  {
    icon: <WifiIcon sx={{ fontSize: 32, color: '#0072ce' }} />,
    title: 'Wireless Solutions',
    description: 'Advanced wireless networking for seamless connectivity across your organization',
    features: ['Wi-Fi 6 Implementation', 'Mesh Networks', 'Guest Access', 'Location Services']
  }
];

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '40%', label: 'Performance Boost' },
  { value: '24/7', label: 'Monitoring' },
  { value: '2hrs', label: 'Response Time' }
];

const NetworkService = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Handle Get Started button click
  const handleGetStartedClick = () => {
    const solutionsSection = document.querySelector('.network-solutions-section');
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
    <div className="network-service-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="network-hero-section">
        <div className="network-hero-background"></div>
        <div className="network-hero-content">
          <div className="network-hero-grid">
            <div className="network-hero-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="network-hero-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Enterprise Network Solutions
                </motion.div>
                <motion.h1 
                  className="network-hero-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Network Infrastructure & Security
                </motion.h1>
                <motion.p 
                  className="network-hero-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Build a resilient, secure, and high-performance network infrastructure. 
                  Scalable solutions designed for modern enterprise demands.
                </motion.p>
                <motion.div 
                  className="network-hero-buttons"
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
            
            <div className="network-hero-right">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div 
                  className="network-stats-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="network-stats-background"></div>
                  <div className="network-stats-content">
                    <motion.h3 
                      className="network-stats-title"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Why Choose Our Network Solutions?
                    </motion.h3>
                    <div className="network-stats-grid">
                      {stats.map((stat, index) => (
                        <motion.div 
                          key={index} 
                          className="network-stat-item"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        >
                          <span className="network-stat-value">{stat.value}</span>
                          <div className="network-stat-label">{stat.label}</div>
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
      <section className="network-solutions-section">
        <motion.div 
          className="network-solutions-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="network-solutions-title">
            Comprehensive Network Solutions
          </h2>
          <p className="network-solutions-subtitle">
            From infrastructure design to security implementation, we provide end-to-end network solutions
          </p>
        </motion.div>

        <div className="network-solutions-grid">
          {networkSolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="network-solution-card">
                <motion.div 
                  className="network-solution-icon"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {solution.icon}
                </motion.div>
                <h3 className="network-solution-title">
                  {solution.title}
                </h3>
                <p className="network-solution-description">
                  {solution.description}
                </p>
                <ul className="network-solution-features">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="network-solution-feature"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="network-solution-feature-dot"></div>
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
      <section className="network-process-section">
        <div className="network-process-container">
          <motion.div 
            className="network-process-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="network-process-title">
              Our Implementation Process
            </h2>
            <p className="network-process-subtitle">
              A proven methodology that ensures successful network transformation
            </p>
          </motion.div>

          <div className="network-process-grid">
            {[
              { step: '01', title: 'Assessment', desc: 'Comprehensive analysis of your current network infrastructure and requirements' },
              { step: '02', title: 'Design', desc: 'Develop a tailored network architecture aligned with your business objectives' },
              { step: '03', title: 'Implementation', desc: 'Execute the network deployment with minimal disruption to operations' },
              { step: '04', title: 'Optimization', desc: 'Continuous monitoring and optimization for peak network performance' }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="network-process-step">
                  <motion.div 
                    className="network-process-number"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {phase.step}
                  </motion.div>
                  <h3 className="network-process-step-title">
                    {phase.title}
                  </h3>
                  <p className="network-process-step-desc">
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="network-cta-section">
        <motion.div 
          className="network-cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="network-cta-background"></div>
          <div className="network-cta-content">
            <motion.h2 
              className="network-cta-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Network?
            </motion.h2>
            <motion.p 
              className="network-cta-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Let's discuss how our network solutions can accelerate your business growth
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
                Schedule a Consultation
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default NetworkService; 