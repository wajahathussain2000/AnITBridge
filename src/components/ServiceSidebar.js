import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceSidebar.css';

const services = [
  {
    key: 'webapp',
    label: 'Web Development',
    icon: <i className="fas fa-laptop-code"></i>,
    to: '/services/webapp',
  },
  {
    key: 'uiux',
    label: 'UI/UX Designing',
    icon: <i className="fas fa-pencil-ruler"></i>,
    to: '/services/uiux',
  },
  {
    key: 'cloud',
    label: 'Cloud and Solutions Architecture',
    icon: <i className="fas fa-cloud"></i>,
    to: '/services/cloud',
  },
  {
    key: 'network',
    label: 'IT & Networking Solutions',
    icon: <i className="fas fa-network-wired"></i>,
    to: '/services/network',
  },
];

const ServiceSidebar = ({ active }) => (
  <aside className="service-sidebar">
    <h3>Services</h3>
    <ul>
      {services.map((s) => (
        <li key={s.key} className={active === s.key ? 'active' : ''}>
          <Link to={s.to} className="sidebar-link">
            <span className="sidebar-icon">{s.icon}</span>
            {s.label}
          </Link>
        </li>
      ))}
    </ul>
  </aside>
);

export default ServiceSidebar; 