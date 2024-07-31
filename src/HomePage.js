
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import pfp from './images/pfp.jpg'; // Import the image

function HomePage() {

    useEffect(() => {
        const container = document.getElementById('circle-container');
        let delay = 0;
        for (let i = 0; i < 10; i++) {
            const circle = document.createElement('div');
            circle.className = 'little-circle';
            circle.style.animationDelay = `${delay}s`;
            container.appendChild(circle);
            delay += 1; // Add 1-second delay for each circle
        }
    }, []);

    return (

        <div className="home-page">

            <img src={pfp} alt="profile" className="profile-picture"/>

            <div className="rectangle-header-home">
                <div className="text-container">
                    <h1>Hi, I'm Zainuddin Mohammed!</h1>
                    <p>Welcome to my website!</p>
                </div>
            </div>

            <div className="buttons-top">

                <Link to="/website/about" className="button about-button">
                    About Me
                </Link>

                <a href="https://github.com/zainuddinmohammed" className="button github-button" target="_blank"
                   rel="noopener noreferrer">
                    My Github
                </a>

                <a href="https://www.linkedin.com/in/zainuddin-mohammed-b4b275284/" className="button linkedin-button"
                   target="_blank" rel="noopener noreferrer">
                    My Linkedin
                </a>

            </div>

            <div className="buttons-bottom">

                <Link to="/website/projects" className="button projects-button">
                    Projects Portfolio
                </Link>

                <Link to="/website/experience" className="button experience-button">
                    Work Experience
                </Link>

                <Link to="/website/contact" className="button contact-button">
                    Contact Me
                </Link>

            </div>

            <div className="circle"/>

            <div id="circle-container" className="circle-container"></div>

        </div>
    );
}

export default HomePage;