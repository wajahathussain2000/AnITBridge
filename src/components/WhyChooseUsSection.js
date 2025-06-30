import React from 'react';
import './WhyChooseUsSection.css';
import { FaProjectDiagram, FaLightbulb, FaUsers, FaIndustry } from 'react-icons/fa';

const features = [
  {
    icon: <FaProjectDiagram size={28} />, 
    title: 'Our Approach',
    desc: 'At ClovVista, we take a holistic approach to consulting. We work closely with our clients to understand their goals and challenges, and develop solutions that address their specific needs. Our approach is collaborative, transparent, and results-driven.'
  },
  {
    icon: <FaLightbulb size={28} />, 
    title: 'Innovative Technology',
    desc: 'We are deeply committed to keeping your business at the forefront, diligently monitoring and integrating the very latest technology trends and emerging innovations. This enables us to deliver cutting-edge solutions, empowering you to surpass rivals and maintain a decisive competitive advantage.'
  },
  {
    icon: <FaUsers size={28} />, 
    title: 'Our Expertise',
    desc: 'Our team at ClovVista is made up of highly skilled professionals with diverse backgrounds. We work together to provide our clients with tailored solutions that meet their unique needs. Meet our team and learn more about our individual areas of expertise.'
  },
  {
    icon: <FaIndustry size={28} />, 
    title: 'Industry Expertise',
    desc: 'At ClovVista, we have years of experience in the consulting industry. We specialize in providing top-notch services in areas such as marketing, strategy, and operations. Our expertise can help take your business to the next level.'
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-content">
        <div className="why-choose-us-left">
          <div className="why-choose-us-badge">Why Choose Us</div>
          <h2 className="why-choose-us-heading">Innovating with Bold,<br/>Contemporary Solutions</h2>
          <div className="why-choose-us-features">
            {features.map((f, i) => (
              <div className="why-choose-us-feature" key={i}>
                <div className="why-choose-us-icon">{f.icon}</div>
                <div>
                  <div className="why-choose-us-title">{f.title}</div>
                  <div className="why-choose-us-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-choose-us-right">
          <div className="why-choose-us-image-wrapper square-image">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="Team collaborating" className="why-choose-us-image square-img" />
            <div className="why-choose-us-projects-card square-card">
              <div className="projects-number">20+</div>
              <div className="projects-label">Projects<br/>Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 