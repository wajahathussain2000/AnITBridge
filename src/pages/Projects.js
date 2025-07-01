import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Projects.css';
import { Link, useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProjectInfoSection from '../components/ProjectInfoSection';
import LogoSlider from '../components/LogoSlider';

const categories = [
  'ALL',
  'CYBERSECURITY',
  'BANKING',
  'PHARMACEUTICAL',
  'ARTIFICIAL INTELLIGENCE',
];

const projectData = [
  {
    id: 'azure-cybersecurity-audit',
    title: 'Azure CyberSecurity Audit',
    image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&w=400&q=80',
    category: 'CYBERSECURITY',
    info: 'Comprehensive security assessment for cloud infrastructure.'
  },
  {
    id: 'project-management-devops',
    title: 'Project Management & DevOps Engineer',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&w=400&q=80',
    category: 'BANKING',
    info: 'Streamlined project delivery and automation for banking.'
  },
  {
    id: 'enterprise-cybersecurity',
    title: 'Enterprise CyberSecurity',
    image: 'https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&w=400&q=80',
    category: 'CYBERSECURITY',
    info: 'Robust protection for enterprise digital assets.'
  },
  {
    id: 'semantic-layer-modernization',
    title: 'Semantic Layer Modernization – Data Engineer',
    image: 'https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&w=400&q=80',
    category: 'PHARMACEUTICAL',
    info: 'Modernizing data pipelines for pharmaceutical analytics.'
  },
  {
    id: 'elastic-wazuh-siem',
    title: 'Expert Elastic & Wazuh SIEM Installation and Configuration',
    image: 'https://images.pexels.com/photos/11035396/pexels-photo-11035396.jpeg?auto=compress&w=400&q=80',
    category: 'CYBERSECURITY',
    info: 'Advanced threat detection and monitoring solutions.'
  },
  {
    id: 'rag-elasticsearch-gpt',
    title: 'Advanced RAG System with Elasticsearch, GPT, and LLM Integration',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=400&q=80',
    category: 'ARTIFICIAL INTELLIGENCE',
    info: 'AI-powered search and insights for business growth.'
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const navigate = useNavigate();

  return (
    <div className="projects">
      <Navbar />
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1>Our Portfolio</h1>
          <p>Where Innovation Meets IT Excellence</p>
        </div>
      </section>
      <div className="projects-filter-bar-wrapper">
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`filter-category${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
      <div className="projects-grid-wrapper">
        <div className="projects-grid">
          {projectData
            .filter(p => activeCategory === 'ALL' || p.category === activeCategory)
            .map((project, idx) => (
              <div className="project-card" key={idx} onClick={() => navigate(`/project/${project.id}`)} style={{cursor: 'pointer'}}>
                <span className="project-card-diamond-top-left">
                  <span className="project-card-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 18 3 22 9 12 21 2 9 6 3"/></svg>
                  </span>
                </span>
                <div className="project-card-left">
                  <span className="project-card-title">{project.title}</span>
                  <div className="project-card-hover-info">
                    <span>{project.info}</span>
                    <span className="project-card-arrow">→</span>
                  </div>
                </div>
                <div className="project-card-right">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
            ))}
        </div>
      </div>
      <LogoSlider />
    </div>
  );
};

export default Projects;
export { projectData }; 