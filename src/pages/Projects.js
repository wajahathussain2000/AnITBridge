import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Work, Security, AccountBalance, Science, Psychology, TrendingUp, Visibility } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import '../styles/Projects.css';
import { Link, useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProjectInfoSection from '../components/ProjectInfoSection';
import LogoSlider from '../components/LogoSlider';

const categories = [
  { name: 'ALL', icon: <Work />, count: 6 },
  { name: 'CYBERSECURITY', icon: <Security />, count: 3 },
  { name: 'BANKING', icon: <AccountBalance />, count: 1 },
  { name: 'PHARMACEUTICAL', icon: <Science />, count: 1 },
  { name: 'ARTIFICIAL INTELLIGENCE', icon: <Psychology />, count: 1 },
];

const projectData = [
  {
    id: 'azure-cybersecurity-audit',
    title: 'Azure CyberSecurity Audit & Compliance',
    image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&w=400&q=80',
    category: 'CYBERSECURITY',
    info: 'Comprehensive security assessment and compliance framework for enterprise cloud infrastructure with zero-trust architecture.',
    technologies: ['Azure Security Center', 'Microsoft Defender', 'Compliance Manager'],
    duration: '3 months',
    impact: '99.9% Security Score'
  },
  {
    id: 'project-management-devops',
    title: 'Enterprise DevOps Transformation',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&w=400&q=80',
    category: 'BANKING',
    info: 'End-to-end DevOps implementation for financial services, reducing deployment time by 80% and improving reliability.',
    technologies: ['Azure DevOps', 'Docker', 'Kubernetes', 'Terraform'],
    duration: '6 months',
    impact: '80% Faster Deployments'
  },
  {
    id: 'enterprise-cybersecurity',
    title: 'Enterprise CyberSecurity Framework',
    image: 'https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&w=400&q=80',
    category: 'CYBERSECURITY',
    info: 'Multi-layered security framework protecting enterprise digital assets with advanced threat detection and response.',
    technologies: ['SIEM', 'EDR', 'Zero Trust', 'IAM'],
    duration: '4 months',
    impact: 'Zero Security Breaches'
  },
  {
    id: 'semantic-layer-modernization',
    title: 'Data Engineering & Analytics Platform',
    image: 'https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&w=400&q=80',
    category: 'PHARMACEUTICAL',
    info: 'Modern data pipeline architecture enabling real-time analytics and insights for pharmaceutical research and development.',
    technologies: ['Apache Kafka', 'Snowflake', 'dbt', 'Tableau'],
    duration: '5 months',
    impact: '60% Faster Insights'
  },
  {
    id: 'elastic-wazuh-siem',
    title: 'Advanced SIEM & Threat Detection',
    image: 'https://images.pexels.com/photos/11035396/pexels-photo-11035396.jpeg?auto=compress&w=400&q=80',
    category: 'CYBERSECURITY',
    info: 'Elasticsearch and Wazuh SIEM deployment with machine learning-powered threat detection and automated response.',
    technologies: ['Elasticsearch', 'Wazuh', 'Machine Learning', 'Automation'],
    duration: '3 months',
    impact: '95% Threat Detection Rate'
  },
  {
    id: 'rag-elasticsearch-gpt',
    title: 'AI-Powered Knowledge Management',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=400&q=80',
    category: 'ARTIFICIAL INTELLIGENCE',
    info: 'Advanced RAG system integrating Elasticsearch, GPT, and custom LLMs for intelligent document search and insights.',
    technologies: ['Elasticsearch', 'OpenAI GPT', 'LangChain', 'Vector DB'],
    duration: '4 months',
    impact: '90% Search Accuracy'
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
  { value: '2x', label: 'Faster Delivery' }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const navigate = useNavigate();

  const filteredProjects = projectData.filter(p => activeCategory === 'ALL' || p.category === activeCategory);

  return (
    <div className="projects-page-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="projects-hero-section">
        <div className="projects-hero-background"></div>
        <div className="projects-hero-content">
          <div className="projects-hero-grid">
            <div className="projects-hero-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="projects-hero-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Our Portfolio
                </motion.div>
                <motion.h1 
                  className="projects-hero-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Transforming Businesses Through
                  <span className="gradient-text"> Innovation</span>
                </motion.h1>
                <motion.p 
                  className="projects-hero-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Discover how we've helped organizations across industries achieve digital transformation, 
                  enhance security, and drive growth through cutting-edge technology solutions.
                </motion.p>
              </motion.div>
            </div>
            
            <div className="projects-hero-right">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div 
                  className="projects-stats-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="projects-stats-background"></div>
                  <div className="projects-stats-content">
                    <motion.h3 
                      className="projects-stats-title"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Our Impact
                    </motion.h3>
                    <div className="projects-stats-grid">
                      {stats.map((stat, index) => (
                        <motion.div 
                          key={index} 
                          className="projects-stat-item"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        >
                          <span className="projects-stat-value">{stat.value}</span>
                          <div className="projects-stat-label">{stat.label}</div>
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

      {/* Filter Section */}
      <section className="projects-filter-section">
        <motion.div 
          className="projects-filter-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="projects-filter-header">
            <h2 className="projects-filter-title">Browse by Category</h2>
            <p className="projects-filter-subtitle">
              Filter our projects by industry and technology focus
            </p>
          </div>
          
          <div className="projects-filter-tabs">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                className={`projects-filter-tab ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.name)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="filter-tab-icon">{category.icon}</div>
                <div className="filter-tab-content">
                  <span className="filter-tab-name">{category.name}</span>
                  <span className="filter-tab-count">{category.count} projects</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="projects-grid-container">
          <motion.div 
            className="projects-grid"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="project-card-wrapper"
              >
                <div className="project-card">
                  <div className="project-card-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-card-overlay">
                      <div className="project-card-category">{project.category}</div>
                    </div>
                  </div>
                  
                  <div className="project-card-content">
                    <div className="project-card-header">
                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-description">{project.info}</p>
                    </div>
                    
                    <div className="project-card-technologies">
                      <h4 className="technologies-title">Technologies Used:</h4>
                      <div className="technologies-list">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="technology-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="project-card-metrics">
                      <div className="project-metric">
                        <span className="metric-label">Duration:</span>
                        <span className="metric-value">{project.duration}</span>
                      </div>
                      <div className="project-metric">
                        <span className="metric-label">Impact:</span>
                        <span className="metric-value">{project.impact}</span>
                      </div>
                    </div>
                    
                    <Button
                      variant="contained"
                      className="project-view-button"
                      onClick={() => navigate(`/project/${project.id}`)}
                      endIcon={<Visibility />}
                    >
                      View Project Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              className="no-projects-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3>No projects found in this category</h3>
              <p>Try selecting a different category or check back later for new projects.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta-section">
        <div className="projects-cta-card">
          <div className="projects-cta-background"></div>
          <div className="projects-cta-content">
            <motion.h2 
              className="projects-cta-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Next Project?
            </motion.h2>
            <motion.p 
              className="projects-cta-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss how we can help transform your business with innovative technology solutions
            </motion.p>
            <motion.div 
              className="projects-cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                className="projects-cta-primary-btn"
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                component={motion.button}
              >
                Start Your Project
              </Button>
              <Button 
                className="projects-cta-secondary-btn"
                onClick={() => navigate('/services')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                component={motion.button}
              >
                Explore Services
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
export { projectData }; 