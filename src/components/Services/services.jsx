import React from "react";
import './services.css';


const Services = () => {
    return(
        <section id='services'>
             <span className="serTitle"><b>Services</b></span>
            <div className="serBars">
            <div className="serBar">
                <img src="./public/assets/html.png" alt="" className="serBarImg" />
                <div className="serBarText">
                    <h2>HTML5</h2>
                    <p>Develop Website</p>
                </div>
            </div>
            

            <div className="serBar">
                <img src="./public/assets/react.png" alt="" className="serBarImg" />
                <div className="serBarText">
                    <h2>ReactJS</h2>
                    <p>Mobile App, Website</p>
                </div>
            </div>

            <div className="serBar">
                <img src="./public/assets/Java.png" alt="" className="serBarImg" />
                <div className="serBarText">
                    <h2>Java</h2>
                    <p>Programing</p>
                </div>

                

            </div>
            </div>
        </section>
    )
}

export default Services
