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
                      <li><Link to="/official-website">Home</Link></li>
                      <li><Link to="/official-website/about">About</Link></li>
                      <li><Link to="/official-website/projects">Projects</Link></li>
                      <li><Link to="/official-website/experience">Experience</Link></li>
                      <li><Link to="/official-website/contact">Contact</Link></li>
                  </ul>
              </nav>
              <Routes>
              <Route path="/official-website" element={<HomePage />} />
                  <Route path="/official-website/about" element={<AboutPage />} />
                  <Route path="/official-website/projects" element={<ProjectsPage />} />
                  <Route path="/official-website/experience" element={<ExperiencePage />} />
                  <Route path="/official-website/contact" element={<ContactPage />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
