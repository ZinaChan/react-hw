import React from 'react';
import './Service.css';
import ServiceItem from './ServiceItem/ServiceItem';
import Construction from '../../assets/images/Construction.png';
import Renovation from '../../assets/images/Renovation.png';
import Consultation from '../../assets/images/Consultation.png';
import RepairServices from '../../assets/images/RepairServices.png';
import Architecture from '../../assets/images/Architecture.png';
import Electric from '../../assets/images/Electric.png';
const Service = () => {
    return (
        <div className="service">
            <h2 className="heading">Services</h2>
            <div className="servicesContainer">
               <ServiceItem imgSrc={Construction} label="Construction" isActive={false}/> 
               <ServiceItem imgSrc={Renovation} label="Renovation" isActive={true}/> 
               <ServiceItem imgSrc={Consultation} label="Consultation" isActive={false}/> 
               <ServiceItem imgSrc={RepairServices} label="Repair Services" isActive={true}/> 
               <ServiceItem imgSrc={Architecture} label="Architecture" isActive={false}/> 
               <ServiceItem imgSrc={Electric} label="Electric" isActive={true}/> 
            </div>
        </div>
    );
}

export default Service;
