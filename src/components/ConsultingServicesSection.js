import React from 'react';
import '../styles/Home.css';

const services = [
  {
    number: 1,
    title: 'Cloud Infrastructure',
    subtitle: '& Solutions',
    img: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=600&q=80',
  },
  {
    number: 2,
    title: 'Web Development',
    subtitle: '',
    img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600&q=80',
  },
  {
    number: 3,
    title: 'IT Network',
    subtitle: '& Support',
    img: 'https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&w=600&q=80',
  },
  {
    number: 4,
    title: 'UI UX Designing',
    subtitle: '',
    img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=600&q=80',
  },
];

const ConsultingServicesSection = () => (
  <section className="consulting-section">
    <div className="consulting-badge">Our Consulting Services</div>
    <h2 className="consulting-title">Providing Technical Expertise for Business Advancement</h2>
    <div className="consulting-cards consulting-cards-nowrap">
      {services.map((service) => (
        <div className="consulting-card" key={service.number}>
          <div className="consulting-card-img-wrapper">
            <img src={service.img} alt={service.title} className="consulting-card-img" />
            <div className="consulting-card-bottom-row">
              <div className="consulting-card-badge">{service.number}</div>
              <div className="consulting-card-title">
                <span className="consulting-card-title-main">{service.title}</span>
                {service.subtitle && <span className="consulting-card-title-sub"> {service.subtitle}</span>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ConsultingServicesSection; 