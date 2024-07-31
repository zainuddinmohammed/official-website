import React from 'react';
import './SubPage.css'
import './ProjectPage.css'
import './buttons.css'
import {Link} from "react-router-dom";

function CalculatorPage() {
    return (
        <div className="sub-page">

            <div className="rectangle-header">
                <div className="text-container">
                    <h1>Calculator Application</h1>
                </div>
            </div>

            <div className="project-date">
                July 2024
            </div>

            <div className="project-description">
                Welcome to my calculator application!<br/>
                This simple calculator supports the four basic operations,
                answer retrieval, backspacing, negation, and decimals.<br/><br/>
                Language/library: JavaFX<br/><br/>
                <Link to="https://github.com/zainuddinmohammed/Calculator" target="_blank" rel="noopener noreferrer">
                    Github Repository
                </Link>
                <br/><br/>
                <Link to="https://github.com/zainuddinmohammed/Calculator/releases/tag/v1.0" target="_blank" rel="noopener noreferrer">
                    Download Application on Github
                </Link>
            </div>

            <Link to="/website/projects" className="button back-to-page">
                Back to Projects
            </Link>

        </div>
    );
}

export default CalculatorPage;