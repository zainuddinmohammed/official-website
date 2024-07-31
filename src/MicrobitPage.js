import React from 'react';
import './SubPage.css'
import './ProjectPage.css'
import './buttons.css'
import {Link} from "react-router-dom";

function MicrobitPage() {
    return (
        <div className="sub-page">

            <div className="rectangle-header">
                <div className="text-container">
                    <h1>BBC micro:bit Programs</h1>
                </div>
            </div>

            <div className="project-date">
                May 2024
            </div>

            <div className="project-description">
                Welcome to my BBC micro:bit programs! <br/><br/>

                Featuring a Space Invaders-like video game and a compass set-up,
                this code contains a menu that can be used to select either of
                these programs.<br/><br/>

                Language: Python<br/><br/>

                <Link to="https://github.com/zainuddinmohammed/Micro-bit-Game" target="_blank"
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

export default MicrobitPage;