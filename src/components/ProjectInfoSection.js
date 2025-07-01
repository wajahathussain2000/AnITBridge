import React from 'react';
import '../styles/ProjectInfoSection.css';

const ProjectInfoSection = ({
  projectName = 'Canadian Retail Sector',
  year = '2024',
  industry = 'Canadian Retail Sector',
  tags = ['Cybersecurity Monitoring', 'NIST SP 800-53', 'Benchmarking'],
  description = `At AnITBridge Consulting, we help businesses like yours make sure their cloud systems, especially on Azure, are super secure. We do this by checking them against a top security rulebook called NIST 800-53 R5, using automated tools to make it fast and thorough.\n\nWe also draw up simple "maps" of how your cloud system works now and how it should look to be even safer. We fix any weak spots we find and make sure everything lines up with NIST 800-53 R5 and other industry best practices.\n\nOn top of that, we've created a clear way for you to pick the best security tools out there. This helps you choose the right solutions without getting bogged down in technical details. We also keep an eye on your security all the time (Cybersecurity Monitoring) and make sure you're always doing as well as the top companies (Benchmarking).`
}) => (
  <div className="project-info-section">
    <div className="project-info-bar">
      <div><span className="info-label">Project Name</span><br />{projectName}</div>
      <div><span className="info-label">Year Of Project</span><br />{year}</div>
      <div><span className="info-label">Industry</span><br />{industry}</div>
    </div>
    <h2 className="project-info-heading">Client Success Highlights</h2>
    <div className="project-info-tags">
      {tags.map((tag, idx) => (
        <span className="project-info-tag" key={idx}>{tag}</span>
      ))}
    </div>
    <div className="project-info-description">
      {description.split('\n').map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </div>
  </div>
);

export default ProjectInfoSection; 