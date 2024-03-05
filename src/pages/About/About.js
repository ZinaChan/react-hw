import React from 'react';
import './About.css';
import aboutImage from '../../assets/images/human.png';

function About() {
    return (
        <div className="about">
            <img src={aboutImage} className="imgAbout" alt="About" />
            <div className="upperElement">
                <h2 className="title">About Us</h2>
                <p className="description">
                    For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.
                    <br/>
                    <br/>
                    We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.
                </p>
                <button className="historyButton">More on Our History</button>
            </div>
        </div>
    );
}

export default About;
