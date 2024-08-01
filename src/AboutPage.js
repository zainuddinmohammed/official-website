
import React from 'react';
import './SubPage.css';
import './AboutPage.css';
import {Link} from "react-router-dom";

function AboutPage() {
    return (

        <div className="sub-page">

            <div className="rectangle-header">
                <div className="text-container">
                    <h1>About Me</h1>
                </div>
            </div>

            <div className="body-text">
                Hi, my name is Zainuddin Mohammed.<br/><br/>
                I currently attend the University of Texas at Dallas pursuing a B.S. in computer science.
                Throughout my experience, I have made a lot of personal projects,
                like building applications, modding video games,
                and developing this website! Here you can navigate to my different projects, work experiences,
                contact information, and links/documents.<br/><br/>
                In my free time, I like to play video games, take pictures, and scooter around my college campus.
                Most of all, though, I love to implement computer science in whatever I like to do.<br/><br/>
                Access my contact information using the navigation bar above.<br/>I am excited to start working with you!
            </div>

            <Link to="/website" className="button back-to-page">
                Back to Home
            </Link>

        </div>

    );
}

export default AboutPage;