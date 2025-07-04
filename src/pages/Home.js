import React, { useState } from 'react';
import '../styles/Home.css';
import LogoSlider from '../components/LogoSlider';
import ConsultingServicesSection from '../components/ConsultingServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AnimatedNumber from '../components/AnimatedNumber';
import HeroSection from '../components/HeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { motion, AnimatePresence } from 'framer-motion';

const HeroImage =
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=800&q=80';

const testimonials = [
  {
    text: "AnITBridge has done an amazing job. We are in awe of their depth of knowledge and communication skills",
    client: "Upwork, Inc."
  },
  {
    text: "Working with AnITBridge Consulting has been an incredibly positive experience, and I cannot recommend them highly enough. Their expertise is Acme, combined with a strong work ethic and excellent communication skills, makes them an invaluable asset to any project. I look forward to the opportunity to collaborate with them again in the future",
    client: "Upwork, Inc."
  },
  {
    text: "The AnITBridge team exceeded our expectations. Their professionalism and results-driven approach made a real difference for our business.",
    client: "Acme Corp."
  },
  {
    text: "Exceptional service and communication throughout the project. We achieved our goals faster thanks to AnITBridge's expertise.",
    client: "Beta LLC"
  }
];

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [impactVisible, setImpactVisible] = React.useState(false);
  const impactRef = React.useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const isMobile = window.innerWidth <= 700;

  // Auto-advance testimonial on mobile
  React.useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3500); // 3.5 seconds per testimonial
    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  React.useEffect(() => {
    if (location.state && location.state.scrollTo === 'why-choose-us') {
      const section = document.getElementById('why-choose-us');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImpactVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (impactRef.current) {
      observer.observe(impactRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // For IEE animated words
  const ieeWords = ['Innovate', 'Execute', 'Excel'];
  const [ieeIndex, setIeeIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIeeIndex((prev) => (prev + 1) % ieeWords.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [ieeIndex]);

  return (
    <div className="home">
      <Navbar />
      <HeroSection flying={true} />
      {/* Brand Pods Section - Improved Match */}
      <section className="brand-pods-section">
        <div className="brand-pods-content">
          <div className="brand-pods-left">
            <h2 className="brand-pods-title">Bridge the Future of IT<br />with AnITBridge Pods</h2>
            <p className="brand-pods-desc">
              The first-ever subscription model to access<br />
              engineering, innovation, and creativity.<br />
              <span className="brand-pods-desc-bold">Expert IT orchestrated by AnITBridge,</span><br />
              spinning up in seconds, getting projects done in half the time,<br />
              and making IT savings tangible.
            </p>
            <button className="brand-pods-btn">Subscribe to the Future</button>
          </div>
          <div className="brand-pods-right">
            <div className="brand-pods-image-bg"></div>
            <div className="brand-pods-image-wrapper">
              <div className="brand-pods-image-glow"></div>
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Tech Team" className="brand-pods-image" />
              <div className="brand-pods-card brand-pods-card-top">
                <div className="brand-pods-card-title">Transaction Monitor</div>
                <div className="brand-pods-card-desc">Fraud Detection</div>
                <span className="brand-pods-card-badge">Published</span>
              </div>
              <div className="brand-pods-card brand-pods-card-bottom">
                <div className="brand-pods-card-title">Strategy</div>
                <div className="brand-pods-card-desc">Trading Strategy</div>
                <span className="brand-pods-card-badge">Published</span>
              </div>
              <button className="brand-pods-card-newagent">+ New Agent</button>
            </div>
          </div>
        </div>
      </section>
      {/* Logo Slider Section */}
      <LogoSlider />
      {/* Consulting Services Section */}
      <ConsultingServicesSection />
      {/* Innovate Execute Excel Section */}
      <section className="iee-section">
        <span className="iee-text" style={{ minHeight: '3.2rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={ieeWords[ieeIndex]}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              style={{ display: 'inline-block', minWidth: 120, textAlign: 'center' }}
            >
              <strong>{ieeWords[ieeIndex]}</strong>
            </motion.span>
          </AnimatePresence>
        </span>
      </section>
      <WhyChooseUsSection />
      {/* Pricing Plans Section */}
      <section className="glass-pricing-section">
        <div className="glass-pricing-badge">Our Pricing</div>
        <h2 className="glass-pricing-heading">Choose the Perfect Plan for Your Needs</h2>
        <div className="glass-pricing-cards-wrapper">
          {/* Starter Plan */}
          <div className="glass-pricing-card">
            <div className="glass-pricing-card-row">
              <span className="glass-pricing-label starter">Starter</span>
              <span className="glass-pricing-price">$0 <span className="glass-pricing-duration">/15 mins</span></span>
            </div>
            <div className="glass-pricing-title">Discovery Call</div>
            <div className="glass-pricing-desc">
              Jumpstart your project with a free 15-minute discovery call. We'll assess your needs and outline next steps.
            </div>
            <ul className="glass-pricing-list">
              <li>Quick assessment</li>
              <li>Actionable advice</li>
              <li>No obligation</li>
            </ul>
            <button className="glass-pricing-btn">Book now</button>
          </div>
          {/* Growth Plan (Most Popular) */}
          <div className="glass-pricing-card popular">
            <div className="glass-pricing-card-row">
              <span className="glass-pricing-label popular">Most Popular</span>
              <span className="glass-pricing-price">$120 <span className="glass-pricing-duration">/30 mins</span></span>
            </div>
            <div className="glass-pricing-title">Strategy Session</div>
            <div className="glass-pricing-desc">
              A focused 30-minute session to define your goals and create a strategic roadmap for success.
            </div>
            <ul className="glass-pricing-list">
              <li>Goal setting</li>
              <li>Roadmap creation</li>
              <li>Expert guidance</li>
            </ul>
            <button className="glass-pricing-btn">Book now</button>
          </div>
          {/* Premium Plan */}
          <div className="glass-pricing-card premium">
            <div className="glass-pricing-card-row">
              <span className="glass-pricing-label premium">Premium</span>
              <span className="glass-pricing-price">$220 <span className="glass-pricing-duration">/60 mins</span></span>
            </div>
            <div className="glass-pricing-title">Full Solution Workshop</div>
            <div className="glass-pricing-desc">
              A comprehensive 1-hour workshop to design, plan, and kickstart your custom solution.
            </div>
            <ul className="glass-pricing-list">
              <li>Deep dive</li>
              <li>Custom solutions</li>
              <li>Implementation plan</li>
            </ul>
            <button className="glass-pricing-btn">Book now</button>
          </div>
        </div>
      </section>
      {/* Call to Action Section with Building Background */}
      <section className="cta-buildings-section">
        <div className="cta-buildings-overlay">
          <h2 className="cta-buildings-heading">
            Your Vision. Our Strategy.<br />
            Unlocking Tomorrow's Success, Today
          </h2>
          <button className="cta-buildings-btn" onClick={() => navigate('/contact')}>GET A QUOTE</button>
        </div>
      </section>
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* Video Showcase Section */}
      <section className="video-showcase-section">
        <h2 className="video-showcase-title">See Us in Action</h2>
        <div className="video-showcase-cards">
          <div className="video-card">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/SlRn7xbQ_E4"
              title="YouTube video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-card">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/KcYkMECRWI4"
              title="YouTube video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 