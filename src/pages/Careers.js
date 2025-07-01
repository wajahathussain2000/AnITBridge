import React from 'react';
import '../styles/Careers.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectInfoSection from '../components/ProjectInfoSection';

const Careers = () => {
  const jobOpenings = [
    {
      title: 'Senior Software Engineer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'We are looking for an experienced software engineer to join our team and help build innovative solutions.',
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        '5+ years of experience in software development',
        'Strong knowledge of React, Node.js, and modern web technologies',
        'Experience with cloud platforms (AWS, Azure, or GCP)'
      ]
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our DevOps team to help build and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Experience with CI/CD pipelines',
        'Knowledge of containerization and orchestration',
        'Familiarity with infrastructure as code',
        'Strong scripting skills'
      ]
    },
    {
      title: 'UI/UX Designer',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Help create beautiful and intuitive user interfaces for our web applications.',
      requirements: [
        'Portfolio demonstrating UI/UX projects',
        'Experience with design tools (Figma, Sketch)',
        'Understanding of user-centered design principles',
        'Knowledge of web accessibility standards'
      ]
    }
  ];

  return (
    <div className="careers">
      <Navbar />
      <HeroSection title="Project Details" />
      <ProjectInfoSection
        projectName="Careers at AnITBridge"
        year="2024"
        industry="IT & Consulting"
        tags={["Jobs", "Growth", "Opportunities"]}
        description={`Join our team and help shape the future of IT consulting.\n\nWe offer exciting career opportunities for talented professionals.`}
      />

      <section className="careers-hero">
        <h1>Join Our Team</h1>
        <p>Build the future of technology with us</p>
      </section>

      <section className="why-join-us">
        <h2>Why Join AnITBridge?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Innovation</h3>
            <p>Work with cutting-edge technologies and solve challenging problems</p>
          </div>
          <div className="benefit-card">
            <h3>Growth</h3>
            <p>Continuous learning and career development opportunities</p>
          </div>
          <div className="benefit-card">
            <h3>Culture</h3>
            <p>Collaborative and inclusive work environment</p>
          </div>
          <div className="benefit-card">
            <h3>Benefits</h3>
            <p>Competitive salary and comprehensive benefits package</p>
          </div>
        </div>
      </section>

      <section className="job-openings">
        <h2>Current Openings</h2>
        <div className="jobs-grid">
          {jobOpenings.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-header">
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <p className="job-description">{job.description}</p>
              <div className="job-requirements">
                <h4>Requirements:</h4>
                <ul>
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="careers-cta">
        <h2>Don't see the right position?</h2>
        <p>Send us your resume and we'll keep you in mind for future opportunities.</p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default Careers; 