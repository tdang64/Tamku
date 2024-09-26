import React from "react";
import './about.css';


const About = () => {
    return(
        <section id='about'>
           <span className="aboutTitle"><b>About Me</b></span>
           <div className="aboutDesc">
           <span>Hello! My name is 
           <b> Thanh Tam Dang </b>
            and I am from Vietnam. I specialize in creating dynamic and user-friendly websites that enhance the online experience. I am passionate about programming, designing, and bringing creative ideas to life on the web. Happy to connect and collaborate!</span>
           </div>
           <img src="./public/assets/bg.png" alt="" className="bg" />

        </section>
        
    )
}

export default About