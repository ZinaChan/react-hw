import React from 'react';
import './ServiceItem.css';
import Rectangle from '../../../assets/images/Rectangle 18.png';

const ServiceItem = ({imgSrc, label, isActive}) => {
     return (
        <div className={isActive ? "serviceItem active" : "serviceItem"}>
            <img className="icon" src={imgSrc}  alt="Icon" />
            <img className="rectangle" src={Rectangle}   alt="Icon" /> 
            <h3 className={isActive ? "title active" : "title"}>{label}</h3>
        </div>
    );
}

export default ServiceItem;
