import React, { useState, useEffect, useRef } from 'react';
import '../styles/Home.css';

const testimonials = [
  {
    name: 'Raymond Galario',
    location: 'Sydney, Australia',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: "You'll get the best of what you put in. The team is working at their best to provide us variety of spaces and homes. Had a great experience working with them. Thanks a lot.",
    rating: 5,
  },
  {
    name: 'Ava Smith',
    location: 'Toronto, Canada',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: "Fantastic service and communication. The project was delivered on time and exceeded expectations!",
    rating: 5,
  },
  {
    name: 'Liam Chen',
    location: 'San Francisco, USA',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    text: "Professional, reliable, and innovative. Highly recommend this team for any IT needs.",
    rating: 5,
  },
];

const floatingAvatars = [
  { src: 'https://randomuser.me/api/portraits/women/68.jpg', style: { left: 0, top: 60 } },
  { src: 'https://randomuser.me/api/portraits/men/12.jpg', style: { right: 0, top: 40 } },
  { src: 'https://randomuser.me/api/portraits/women/22.jpg', style: { left: 60, bottom: 0 } },
];

const floatingDots = [
  { color: '#ffb703', style: { left: 80, top: 30 } },
  { color: '#0072ce', style: { right: 80, top: 100 } },
  { color: '#e6f0fa', style: { left: 120, bottom: 40 } },
  { color: '#ff5e5e', style: { right: 120, bottom: 60 } },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const t = testimonials[current];

  return (
    <section className="modern-testimonials-section">
      <div className="modern-testimonials-bg">
        {floatingAvatars.map((a, i) => (
          <img key={i} src={a.src} alt="client" className="modern-testimonials-avatar" style={a.style} />
        ))}
        {floatingDots.map((d, i) => (
          <span key={i} className="modern-testimonials-dot" style={{ ...d.style, background: d.color }} />
        ))}
      </div>
      <div className="modern-testimonials-content">
        <div className="modern-testimonials-title">
          What Our Client Says <span className="modern-testimonials-title-accent" />
        </div>
        <div className="modern-testimonials-subtitle">
          Our Clients send us bunch of smiles with our services and we love them
        </div>
        <div className="modern-testimonials-main">
          <img src={t.photo} alt={t.name} className="modern-testimonials-photo" />
          <div className="modern-testimonials-name">{t.name}</div>
          <div className="modern-testimonials-location">{t.location}</div>
          <div className="modern-testimonials-stars">
            {[...Array(t.rating)].map((_, i) => (
              <span key={i} className="modern-testimonials-star">★</span>
            ))}
          </div>
          <div className="modern-testimonials-quote-row">
            <span className="modern-testimonials-quote-mark left">"</span>
            <span className="modern-testimonials-quote">{t.text}</span>
            <span className="modern-testimonials-quote-mark right">"</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 