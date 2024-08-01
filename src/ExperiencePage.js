
import React from 'react';
import './ExperiencePage.css'
import './SubPage.css'
import './buttons.css'
import {Link} from "react-router-dom";

function ExperiencePage() {
    return (

        <div className="sub-page">

            <Link to="/website" className="button back-to-page">
                Back to Home
            </Link>

            <div className="rectangle-header">
                <div className="text-container">
                    <h1>Work Experience</h1>
                </div>
            </div>

            <div className="sentence">
                <p>
                    Be the first to put your company here by{' '}
                    <Link to="/website/contact" rel="noopener noreferrer">
                        hiring me
                    </Link>
                    !
                </p>
            </div>

        </div>

    );
}

export default ExperiencePage;