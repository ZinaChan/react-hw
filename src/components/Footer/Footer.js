import React from 'react';
import './Footer.css'; // Подключаем файл стилей
import logo from '../../assets/images/logo.png'
import sosial from '../../assets/images/akar-icons_facebook-fill.png'
import sosial1 from '../../assets/images/entypo-social_twitter-with-circle.png'
import sosial2 from '../../assets/images/entypo-social_linkedin-with-circle.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <p><b>Address:</b>6391 Elgin St. Celina, Delaware 10299</p>
        <p><b>Phone:</b> +84 1102 2703</p>
        <p><b>Email:</b> hello@thebox.com</p>
        <div className="logo">
          <img src={logo} alt="Logo" className="imgLogo" />
          <span className="title">The</span>
          <span className="title">Box</span>
        </div>
      </div>
      <div className="column">
          <b>Newsletter:</b>
        <div>
          <input type="email" placeholder="Your email here" />
          <button>Subscribe</button>
        </div>
        <div>
          <b>Social:</b>
          <ul className="social-icons">
            <li><img src={sosial} alt='sosial'/></li>
            <li><img src={sosial1} alt='sosial'/></li>
            <li><img src={sosial2} alt='sosial'/></li> 
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
