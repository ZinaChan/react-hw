import React from 'react';
import './Experience.css'; 
import Rectangle from '../../assets/images/Rectangle 19.png';
import illus from '../../assets/images/illus.png';
import illus1 from '../../assets/images/illus(1).png';
import illus2 from '../../assets/images/illus(2).png';
import illus3 from '../../assets/images/illus(3).png';

function Experience() {
    return (
        <div className="experience">
            <div className='upperElementsContainer'>
                {/* Тут можно было бы разделить на компонеты upperItem передавая стили и тд... */}
                <div className="upperItem">
                    <h3 className="title">84</h3>
                    <img className="icon" src={illus} alt="Icon" />
                     <div>
                        <img className="rectangle" src={Rectangle} alt="Icon" />
                        <h3 className="title">Happy Clients</h3>
                    </div>
                </div>
                <div className="upperItem">
                    <h3 className="title">123</h3>
                    <img className="icon" src={illus1} alt="Icon" />
                     <div>
                        <img className="rectangle" src={Rectangle} alt="Icon" />
                        <h3 className="title">Projects Completed</h3>
                    </div>
                </div>
                <div className="upperItem">
                    <h3 className="title">37</h3>
                    <img className="icon" src={illus2} alt="Icon" />
                     <div>
                        <img className="rectangle" src={Rectangle} alt="Icon" />
                        <h3 className="title">Awards Win</h3>
                    </div>
                </div>
                <div className="upperItem">
                    <h3 className="title">30</h3>
                    <img className="icon" src={illus3} alt="Icon" />
                     <div>
                        <img className="rectangle" src={Rectangle} alt="Icon" />
                        <h3 className="title">Years in Business</h3>
                    </div>
                </div> 
            </div>
            <div className="experienceInfo">
                <h2 className="title">30 Years Experience</h2>
                <p className="description">
                    Our company has been the leading provided construction services to clients throughout the USA since 1988.
                </p>
                <button className="contactusButton">Contact Us</button>
            </div>
        </div>
    );
}

export default Experience;
