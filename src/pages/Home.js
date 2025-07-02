import React, { useState } from 'react';
import '../styles/Home.css';
import LogoSlider from '../components/LogoSlider';
import ConsultingServicesSection from '../components/ConsultingServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AnimatedNumber from '../components/AnimatedNumber';

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

  return (
    <div className="home">
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section">
        {/* Decorative Circles */}
        <svg className="hero-bg-circle hero-bg-circle-topleft" viewBox="0 0 600 600">
          <circle cx="300" cy="300" r="300" fill="#e3f1f7" />
        </svg>
        <svg className="hero-bg-circle hero-bg-circle-bottomright" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="200" fill="#e3f1f7" />
        </svg>
        <div className="hero-content-wrapper">
          <div className="hero-left">
            <h1 className="hero-title">Transform Your Business<br />And Unlock Your Potential</h1>
            <p className="hero-subtitle">
              Driving Growth Through Innovative Strategies &amp; Operational Excellence
            </p>
            <div className="hero-btns">
              <button className="hero-btn hero-btn-outline">BOOK A CONSULTATION</button>
              <button className="hero-btn hero-btn-filled">EXPLORE OUR SOLUTIONS</button>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image-card-wrapper">
              <div className="hero-image-card-outline"></div>
              <div className="hero-image-card">
                {/* Decorative Dots */}
                <div className="hero-dots">
                  {[...Array(6)].map((_, i) => (
                    <span key={i} className="hero-dot" />
                  ))}
                </div>
                <img src={HeroImage} alt="Teamwork" className="hero-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Solutions/Features Section */}
      <section className="solutions-section">
        <div className="solutions-content-wrapper">
          <div className="solutions-images">
            <div className="solutions-image-top">
              <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&w=400&q=80" alt="Consulting" />
            </div>
            <div className="solutions-image-bottom">
              <img src="https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg?auto=compress&w=400&q=80" alt="Teamwork" />
            </div>
          </div>
          <div className="solutions-text">
            <span className="solutions-badge">About Us</span>
            <h2 className="solutions-title">Driving Innovation And Delivering Tailored Solutions</h2>
            <p className="solutions-desc">
              AnITBridge is more than simply a consulting firm; we are a strategic partner committed to achieving business success with innovative, bespoke solutions. Our comprehensive process assures a smooth and efficient experience that relates to your long-term objectives.
            </p>
            <ul className="solutions-list">
              <li><span className="solutions-check">✔</span> Innovative, Tailored Solutions crafted to meet your unique needs.</li>
              <li><span className="solutions-check">✔</span> Sustainable Growth, Efficiency and Building a stronger future for your organization.</li>
              <li><span className="solutions-check">✔</span> Expert Insights, Real-World Strategies and Guidance you can implement immediately.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Logo Slider Section */}
      <LogoSlider />
      {/* Consulting Services Section */}
      <ConsultingServicesSection />
      {/* Innovate Execute Excel Section */}
      <section className="iee-section">
        <span className="iee-text">
          <strong>Innovate</strong>
          <span className="iee-dot"> . </span>
          <strong>Execute</strong>
          <span className="iee-dot"> . </span>
          <strong>Excel</strong>
        </span>
      </section>
      <WhyChooseUsSection />
      {/* Our Impact in Numbers Section */}
      <section className="impact-numbers-section" ref={impactRef}>
        <div className="impact-numbers-badge">Driving Success, Together.</div>
        <h2 className="impact-numbers-heading">Our Impact in Numbers</h2>
        <div className="impact-numbers-map-wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2000px-World_map_-_low_resolution.svg.png"
            alt="World Map"
            className="impact-numbers-map"
          />
        </div>
        <div className="impact-numbers-stats-card">
          <div className="impact-numbers-stat">
            <div className="impact-numbers-stat-title">Value Generated For Clients</div>
            <div className="impact-numbers-stat-value">{impactVisible && <AnimatedNumber value={3000000} prefix="$ " />}</div>
          </div>
          <div className="impact-numbers-stat">
            <div className="impact-numbers-stat-title">Hours Of Consultation</div>
            <div className="impact-numbers-stat-value">{impactVisible && <AnimatedNumber value={5000} suffix=" +" />}</div>
          </div>
          <div className="impact-numbers-stat">
            <div className="impact-numbers-stat-title">Active Client Partnerships</div>
            <div className="impact-numbers-stat-value">{impactVisible && <AnimatedNumber value={10} suffix=" +" />}</div>
          </div>
          <div className="impact-numbers-stat">
            <div className="impact-numbers-stat-title">Years In Business</div>
            <div className="impact-numbers-stat-value">{impactVisible && <AnimatedNumber value={7} suffix=" +" />}</div>
          </div>
        </div>
      </section>
      {/* Pricing Plans Section */}
      <section className="pricing-section">
        <div className="pricing-badge">Our Pricing</div>
        <h2 className="pricing-heading">Choose the Perfect Plan for Your Needs</h2>
        <div className="pricing-cards-wrapper">
          {/* Basic Plan */}
          <div className="pricing-card">
            <div className="pricing-card-row">
              <span className="pricing-label basic">Basic</span>
              <span className="pricing-price">CAD $0 <span className="pricing-duration">/15 mins</span></span>
            </div>
            <div className="pricing-title">Initial Consultation</div>
            <div className="pricing-desc">
              Kickstart your journey with our 15-minute free Initial Consultation. We'll explore your business needs and identify key areas for improvement to set you on the path to success.
            </div>
            <ul className="pricing-list">
              <li>Explore your business needs</li>
              <li>Identify key improvement areas</li>
              <li>Set the path to success</li>
            </ul>
            <button className="pricing-btn">Book now</button>
          </div>
          {/* Most Popular Plan */}
          <div className="pricing-card popular">
            <div className="pricing-card-row">
              <span className="pricing-label popular">Most Popular</span>
              <span className="pricing-price">CAD $100 <span className="pricing-duration">/30 mins</span></span>
            </div>
            <div className="pricing-title">Target State Planning</div>
            <div className="pricing-desc">
              Plan for the future with a focused 30-minute session on Target State Planning consultation. We'll help you define your ideal business state and create a roadmap to achieve it.
            </div>
            <ul className="pricing-list">
              <li>Define your ideal business state</li>
              <li>Create a strategic roadmap</li>
              <li>Prioritize initiatives</li>
            </ul>
            <button className="pricing-btn">Book now</button>
          </div>
          {/* Recommended Plan */}
          <div className="pricing-card recommended">
            <div className="pricing-card-row">
              <span className="pricing-label recommended">Recommended</span>
              <span className="pricing-price">CAD $150 <span className="pricing-duration">/60 mins</span></span>
            </div>
            <div className="pricing-title">Architecture & Roadmap</div>
            <div className="pricing-desc">
              Get strategic with our 1-hour architecture planning & implementation. We'll design tailored solutions to optimize your business operations and map out your path to peak performance.
            </div>
            <ul className="pricing-list">
              <li>Comprehensive Target State Planning</li>
              <li>Tailored Solution Design</li>
              <li>Technical Implementation</li>
            </ul>
            <button className="pricing-btn">Book now</button>
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
      <section className="testimonials-section">
        <div className="testimonials-content-wrapper">
          <div className="testimonials-left">
            <div className="testimonials-badge">TESTIMONIALS</div>
            <h2 className="testimonials-heading">Trusted Voices, Proven Results</h2>
            <div className="testimonials-subheading">
              Hear directly from our valued clients about their experiences with our consulting services.
            </div>
          </div>
          <div className="testimonials-right">
            <div className="testimonials-slider-wrapper">
              <div className="testimonials-slider" style={isMobile ? {display: 'block', width: '100%'} : {}}>
                {isMobile ? (
                  <div className="testimonial-card" style={{margin: '0 auto'}}>
                    <div className="testimonial-quote-mark">“</div>
                    <div className="testimonial-stars">★★★★★</div>
                    <div className="testimonial-text">{testimonials[currentTestimonial].text}</div>
                    <div className="testimonial-client">{testimonials[currentTestimonial].client}</div>
                    <div className="testimonial-quote-mark end">”</div>
                  </div>
                ) : (
                  [0, 2].map((start, i) => (
                    <div className="testimonials-slide" key={i}>
                      {testimonials.slice(start, start + 2).map((t, idx) => (
                        <div className="testimonial-card" key={idx}>
                          <div className="testimonial-quote-mark">“</div>
                          <div className="testimonial-stars">★★★★★</div>
                          <div className="testimonial-text">{t.text}</div>
                          <div className="testimonial-client">{t.client}</div>
                          <div className="testimonial-quote-mark end">”</div>
                        </div>
                      ))}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 