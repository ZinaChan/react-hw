import React from 'react';
import './Navbar.css';
import Logo from '../../../assets/images/logo.png'

function Navbar() {
   
    return (
        <nav className='navbar'>
            <div className="logo">
                <img src={Logo} alt="Logo" className="imgLogo" />
                <span className="title">The</span>
                <span className="title">Box</span>
            </div>

            <ul className="navItems">
                <li><a href="#home" className="navItem">Home</a></li>
                <li><a href="#about" className="navItem">About Us</a></li>
                <li><a href="#project" className="navItem">Projects</a></li>
                <li><a href="#services" className="navItem">Services</a></li>
                <li><a href="#contact" className="navItem active">Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
