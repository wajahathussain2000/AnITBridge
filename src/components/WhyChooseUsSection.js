import React, { useRef, useEffect, useState } from 'react';
import AnimatedNumber from './AnimatedNumber';
import '../styles/Home.css';

const impactStats = [
  {
    value: 3000000,
    label: 'Value Generated For Clients',
    prefix: '$ ',
  },
  {
    value: 5000,
    label: 'Hours Of Consultation',
    suffix: ' +',
  },
];

const features = [
  {
    title: 'Our Approach',
    desc: 'We take a holistic, collaborative, and transparent approach, working closely with clients to deliver results-driven solutions tailored to their needs.',
    color: 'var(--brand-feature1)',
  },
  {
    title: 'Innovative Technology',
    desc: 'We keep your business at the forefront by integrating the latest technology trends and innovations, empowering you to stay ahead.',
    color: 'var(--brand-feature2)',
  },
  {
    title: 'Our Expertise',
    desc: 'Our diverse, highly skilled team collaborates to deliver tailored solutions that meet your unique needs.',
    color: 'var(--brand-feature3)',
  },
];

const WhyChooseUsSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (!animate && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 120) {
          setAnimate(true);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [animate]);

  return (
    <section id="why-choose-us" className="whychoose-merged-section" ref={sectionRef}>
      <div className="whychoose-merged-container">
        <div className="whychoose-merged-left">
          <div className="whychoose-merged-heading-row">
            <div className="whychoose-merged-heading">WHY <span>CHOOSE US</span></div>
            <div className="whychoose-merged-arrow">→</div>
          </div>
          <div className="whychoose-merged-subtitle">Innovating with Bold, Contemporary Solutions</div>
          <div className="whychoose-merged-intro">Driving Success, Together. We deliver measurable impact and innovative solutions for your business.</div>
          <div className="whychoose-merged-stats-row">
            <div className="whychoose-merged-stat">
              <div className="whychoose-merged-stat-value">
                {animate ? <AnimatedNumber value={impactStats[0].value} prefix={impactStats[0].prefix} /> : impactStats[0].prefix + '0'}
              </div>
              <div className="whychoose-merged-stat-label">{impactStats[0].label}</div>
            </div>
            <div className="whychoose-merged-stat">
              <div className="whychoose-merged-stat-value">
                {animate ? <AnimatedNumber value={impactStats[1].value} suffix={impactStats[1].suffix} /> : '0' + (impactStats[1].suffix || '')}
              </div>
              <div className="whychoose-merged-stat-label">{impactStats[1].label}</div>
            </div>
          </div>
        </div>
        <div className="whychoose-merged-right">
          <div className="whychoose-merged-image-bg">
            <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80" alt="Team collaborating" className="whychoose-merged-image" />
            <div className="whychoose-merged-image-gradient"></div>
          </div>
        </div>
      </div>
      <div className="whychoose-merged-features-row">
        {features.map((f, i) => (
          <div className="whychoose-merged-feature-card" key={i} style={{ background: `var(--brand-feature${i+1})` }}>
            <div className="whychoose-merged-feature-title">{f.title}</div>
            <div className="whychoose-merged-feature-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 