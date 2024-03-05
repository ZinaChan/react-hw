import React from 'react';
import Banner from '../../assets/images/banner.jpeg';
import BackArrow from '../../assets/images/backArrow.png';
import NextArrow from '../../assets/images/nextArrow.png';
import './CompanyBanner.css';

const CompanyBanner = () => {
    return (
        <div className="companyBanner">
            <div className="photoContainer">
                <img src={Banner} className='imgBanner' alt="Company Photo" />
                <div className="textOverlay">
                    <h2 className="heading">Building things is our mission.</h2>
                </div>
            </div>
            <div className="featureProjects">
                <div className="projectDetails">
                    <h3 className="projectTitle">Feature Projects</h3>
                    <p className="projectDescription">The National University of Architecture</p>
                </div>
                <div className="projectButtons">
                    <button className="backButton">
                        <img src={BackArrow} className='arrow' alt="back arrow" />
                        Back
                    </button>
                    <button className="forwardButton">
                        Forward
                        <img src={NextArrow} className='arrow' alt="next arrow" />
                    </button>
                </div>
            </div> 
        </div>
    );
}

export default CompanyBanner;
