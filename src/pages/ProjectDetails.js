import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/ProjectDetails.css';
import { useParams } from 'react-router-dom';
import { projectData } from './Projects';
import HeroSection from '../components/HeroSection';
import ProjectInfoSection from '../components/ProjectInfoSection';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-details">
        <Navbar />
        <HeroSection contactStyle={true} title="Project Details" subtitle="" />
        <ProjectInfoSection />
      </div>
    );
  }

  return (
    <div className="project-details">
      <Navbar />
      <HeroSection contactStyle={true} title={project.title} subtitle={project.info} />
      <ProjectInfoSection
        projectName={project.title}
        year="2024"
        industry={project.category}
        tags={[project.category, "Cloud", "Security"]}
        description={project.info}
      />
    </div>
  );
};

export default ProjectDetails; 