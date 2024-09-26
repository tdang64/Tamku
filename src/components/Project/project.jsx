import React from "react";
import './project.css';

const Project = () => {
    return (
        <section className="projects">
        <h2 className="proTitle">My Project</h2>    
        <span className="proDesc">Here are the projects that I have worked on and developed</span>
        <div className="proImgs">
            <img src="./public/assets/Random memes.png" alt="" className="proImg" />
            <img src="./public/assets/weather.png" alt="" className="proImg" />
            <img src="./public/assets/bee.png" alt="" className="proImg" />
            <img src="./public/assets/jdm.png" alt="" className="proImg" />


        </div>
        <button className="proBtn">See more</button>
        </section>
        
    );
}

export default Project