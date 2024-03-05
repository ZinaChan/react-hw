import React from 'react';
import './Projects.css';
import Rectangle from '../../assets/images/Rectangle 17.png';
import BackArrow from '../../assets/images/backArrow.png';
import NextArrow from '../../assets/images/nextArrow.png';
import projImg from '../../assets/images/unsplash_T0iFfJw-rB0.png';
import projImg2 from '../../assets/images/unsplash_8oRCwrBn_Fc.png';
import projImg3 from '../../assets/images/unsplash_UV81E0oXXWQ.png';
import projImg4 from '../../assets/images/unsplash_gMes5dNykus.png';
import Project from './Project/Project'

const Projects = () => {
    return (
        <div className="projects">
            <div>
                <h2 className="heading">Projects</h2>
                <ul className='projTypesContainer'>
                    <li><img src={Rectangle} /> <p>All</p></li>
                    <li><p>Commercial</p></li>
                    <li><p>Residential</p></li>
                    <li><p>Other</p></li>
                </ul>
            </div>
            <div className="projsContainer">
                <div className="projsContainer">
                    <Project imgSrc={projImg} title="Wildstone Infra Hotel" desc="2715 Ash Dr. San Jose, South Dakota" />
                    <Project imgSrc={projImg2} title="Wish Stone Building" desc="2972 Westheimer Rd. Santa Ana, Illinois " />
                    <Project imgSrc={projImg3} title="Mr. Parkinston’s House" desc="3517 W. Gray St. Utica, Pennsylvania" />
                    <Project imgSrc={projImg4} title="Oregano Height" desc="3517 W. Gray St. Utica, Pennsylvania" />

                </div>
                <div className='navigatebar'>
                    <button className="backButton">
                        <img src={BackArrow} className='arrow' alt="back arrow" />
                        Back
                    </button>
                    <ul className='slider'>
                        <li className='active'></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <button className="forwardButton">
                        Forward
                        <img src={NextArrow} className='arrow' alt="next arrow" />
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Projects;
