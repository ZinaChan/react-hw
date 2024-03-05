import React from 'react';
import './Reputation.css'; 
import iconImage from '../../assets/images/icon.png'
import iconImage2 from '../../assets/images/icon2.png'
const Reputation = () => {
  return (
    <div className="reputation">
      <h2 className="heading">Our Reputation</h2>
      <div className="boxContainer">
        <div className="box">
          <img className="icon" src={iconImage} alt="Icon" />
          <h3 className="title">Best Services</h3>
          <p className="description">Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
        </div>
        <div className="box">
          <img className="icon" src={iconImage} alt="Icon" />
          <h3 className="title">Best Teams</h3>
          <p className="description">Cursus semper tellus volutpat aliquet lacus. </p>
        </div>
        <div className="box">
          <img className="icon" src={iconImage2} alt="Icon" />
          <h3 className="title">Best Designs</h3>
          <p className="description">Ultricies at ipsum nunc, tristique nam lectus.</p>
        </div>
       </div>
    </div>
  );
}

export default Reputation;
