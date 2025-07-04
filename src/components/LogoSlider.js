import React, { useRef, useEffect } from 'react';
import '../styles/Home.css';

// Expanded set of actual company logos
const logos = [
'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png',
  'https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg',
];

const LogoSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;
    const interval = setInterval(() => {
      if (slider) {
        slider.scrollLeft += scrollStep;
        scrollAmount += scrollStep;
        // Reset scroll to start for infinite loop
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
          slider.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="logo-slider-section">
      <div className="logo-slider" ref={sliderRef}>
        {logos.concat(logos).map((logo, idx) => (
          <div className="logo-slide" key={idx}>
            <img src={logo} alt="Client Logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSlider; 