import React from 'react';
import './Project.css';
const Project = ({imgSrc, title, desc}) => {
    return (
        <div className="project">
            <img src={imgSrc} alt='proj'/>
            <div className="projectDetails">
                <h3 className="projectTitle">{title}</h3>
                <br/>
                <p className="projectDescription">{desc}</p>
            </div>
        </div>
    );
}

export default Project;
