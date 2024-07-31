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
                      <li><Link to="/website">Home</Link></li>
                      <li><Link to="/website/about">About</Link></li>
                      <li><Link to="/website/projects">Projects</Link></li>
                      <li><Link to="/website/experience">Experience</Link></li>
                      <li><Link to="/website/contact">Contact</Link></li>
                  </ul>
              </nav>
              <Routes>
              <Route path="/website" element={<HomePage />} />
                  <Route path="/website/about" element={<AboutPage />} />
                  <Route path="/website/projects" element={<ProjectsPage />} />
                  <Route path="/website/experience" element={<ExperiencePage />} />
                  <Route path="/website/contact" element={<ContactPage />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
