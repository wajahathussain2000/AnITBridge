import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false); // Close menu on route change
  }, [location]);

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const section = document.getElementById('why-choose-us');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: 'why-choose-us' } });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>  
      <div className="navbar-container">
        <div className="navbar-logo-area">
          {/* Placeholder logo, replace src with your logo if available */}
          <img src="images/logo.png" alt="Logo" className="navbar-logo-img" />
          <span className="navbar-logo-text">AnITBridge</span>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item"><Link to="/" className="nav-links">Home</Link></li>
          <li className="nav-item"><a href="#why-choose-us" className="nav-links" onClick={handleAboutClick}>About Us</a></li>
          <li className="nav-item nav-dropdown">
            <span className="nav-links">Services <i className="fas fa-caret-down"></i></span>
            {/* Dropdown can be implemented here if needed */}
          </li>
          <li className="nav-item"><Link to="/projects" className="nav-links">Projects</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-links">Contact</Link></li>
        </ul>
        <div className="navbar-right">
          <Link to="/quote" className="quote-btn">GET A QUOTE</Link>
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 