
import React from 'react';
import './SubPage.css';
import './ProjectsPage.css';
import {Link} from "react-router-dom";

function ProjectsPage() {
    return (

        <div className="sub-page">

            <Link to="/website" className="button back-to-page">
                Back to Home
            </Link>

            <div className="rectangle-header">
                <div className="text-container">
                    <h1>Projects Portfolio</h1>
                </div>
            </div>

            <div className="project-buttons">

                <Link to="/website/projects/calculator-application" className="button projects-button">
                    Calculator Application
                </Link>

                <Link to="/website/projects/minecraft-mod" className="button experience-button">
                    Minecraft Mod
                </Link>

                <Link to="/website/projects/bbc-microbit" className="button contact-button">
                    BBC micro:bit
                </Link>

            </div>

        </div>

    );
}

export default ProjectsPage;