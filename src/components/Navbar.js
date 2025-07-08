import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [servicesDropdown, setServicesDropdown] = useState(false);

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
        <div className="navbar-left">
          <img src="/images/itbridgelogo-removebg-preview.png" alt="Logo" className="navbar-logo" />
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item"><Link to="/" className="nav-links">Home</Link></li>
          <li className="nav-item"><a href="#why-choose-us" className="nav-links" onClick={handleAboutClick}>About Us</a></li>
          <li
            className="nav-item nav-dropdown"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
            onClick={() => setServicesDropdown(!servicesDropdown)}
            style={{position: 'relative'}}
          >
            <span className="nav-links">Services <i className="fas fa-caret-down"></i></span>
            {servicesDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/services/cloud" className="dropdown-link">Cloud Infrastructure & Solution</Link></li>
                <li><Link to="/services/network" className="dropdown-link">IT Network & Support</Link></li>
                <li><Link to="/services/webapp" className="dropdown-link">Web & App Development</Link></li>
                <li><Link to="/services/uiux" className="dropdown-link">UI/UX Design</Link></li>
              </ul>
            )}
          </li>
          <li className="nav-item"><Link to="/projects" className="nav-links">Projects</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-links">Contact</Link></li>
        </ul>
        <div className="navbar-right">
          <Link to="/contact" className="quote-btn">GET A QUOTE</Link>
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 