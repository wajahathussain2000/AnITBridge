import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Footer from './components/Footer';
import CloudService from './pages/CloudService';
import NetworkService from './pages/NetworkService';
import WebAppService from './pages/WebAppService';
import UiUxService from './pages/UiUxService';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/cloud" element={<CloudService />} />
            <Route path="/services/network" element={<NetworkService />} />
            <Route path="/services/webapp" element={<WebAppService />} />
            <Route path="/services/uiux" element={<UiUxService />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 