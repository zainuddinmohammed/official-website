import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import AboutPage from "./AboutPage";
import ProjectsPage from './ProjectsPage';
import ExperiencePage from "./ExperiencePage";

function App() {
  return (
      <Router>
          <div>
              <nav className="nav-bar">
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/projects">Projects</Link></li>
                      <li><Link to="/experience">Experience</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                  </ul>
              </nav>
              <Routes>
              <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/experience" element={<ExperiencePage />} />
                  <Route path="/contact" element={<ContactPage />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
