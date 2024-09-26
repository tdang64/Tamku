import React from "react";
import './navbar.css';
//import logo from '../src/assets/logo1.png';
import { Link } from 'react-scroll';
//import contactImg from '../../assets/contactImg';
const Navbar = () => {
    return(
        <nav className="navbar">
            <img className="logo" src="./src/assets/logo1.png" alt=""/>
            <div className="desktopMenu">
               <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="DesktopMenuListItem"><b>Home</b></Link>
               <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className="DesktopMenuListItem"><b>About</b></Link>
               <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} className="DesktopMenuListItem"><b>Projects</b></Link>
               <Link activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={500} className="DesktopMenuListItem"><b>Services</b></Link>
            </div>
            <button className="contactMeBtn" onClick={() =>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});

            }}>
                <img className="" src="" alt="" /> Contact me!
            </button>
        </nav>
       
        )
}

export default Navbar