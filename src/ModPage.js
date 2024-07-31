import React from 'react';
import './SubPage.css'
import './ProjectPage.css'
import './buttons.css'
import {Link} from "react-router-dom";

function ModPage() {
    return (
        <div className="sub-page">

            <div className="rectangle-header">
                <div className="text-container">
                    <h1>Minecraft Mod</h1>
                </div>
            </div>

            <div className="project-date">
                June 2024 - Present
            </div>

            <div className="project-description">
                Welcome to my Minecraft Mod!<br/>
                This mod introduces new food, a new frying pan weapon, and a new wood type to Minecraft.<br/><br/>

                Language: Java
                <br/><br/>

                <Link to="https://github.com/zainuddinmohammed/biryani_mod_1.20.1" target="_blank"
                      rel="noopener noreferrer">
                    Github Repository
                </Link>

            </div>

            <Link to="/website/projects" className="button back-to-page">
                Back to Projects
            </Link>

        </div>
    );
}

export default ModPage;