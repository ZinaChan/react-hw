import React from 'react';
import Banner from '../../assets/images/Ads.png';
import './Ads.css';

const Ads = () => {
    return (
        <div className="ads">
            <img src={Banner} className='imgBanner' alt="Company Photo" />
            <div className="adsInner">
                <div className="textOverlay">
                    <h1 >Free consultation with exceptional quality</h1>
                    <br/>
                    <h3 >Just one call away: +84 1102 2703</h3>
                </div>

                <button className="btnConsultation">
                    Get your consultation
                </button>
            </div>
        </div>
    );
}

export default Ads;
