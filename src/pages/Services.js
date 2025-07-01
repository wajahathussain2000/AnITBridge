import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectInfoSection from '../components/ProjectInfoSection';

const Services = () => (
  <div className="services">
    <Navbar />
    <HeroSection title="Project Details" />
    <ProjectInfoSection
      projectName="IT Services"
      year="2024"
      industry="Technology"
      tags={["Cloud", "Security", "Support"]}
      description={`Explore our range of IT services designed to help your business thrive in a digital world.\n\nFrom cloud solutions to cybersecurity, we have you covered.`}
    />
  </div>
);

export default Services; 