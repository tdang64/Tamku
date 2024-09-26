import React from "react";
import { Link } from 'react-scroll';
import './intro.css';


const Intro = () => {
    // const [showLink, setShowLink] = useState(false);

    // const handleClick = () => {
    //   setShowLink(true);
    // };
  
    return (
       <section id="intro">
        <div className="introContent">
            <span className="hi">Hi, </span>
            <span className="introText">I am <span className="introName">Tam Dang</span> <br /> 
            <span className="autoText">Web Developer</span></span>
            <p className="introPara">Every line of code is a step in the journey to create an amazing online experience for users.</p>
            
            
            <Link>
            <div>

              <button onClick={() =>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                
                }} className="btnAme">My Resume</button>

              {/* <Link activeClass="active" to="resume"  className="btnAme"><b>My Resume</b></Link> */}

              {/* <a href="./src/assets/resume.pdf" target="blank" rel="noreferrer" className="btnAme">Dumem</a> */}
              
              </div>
      
        </Link>


        </div>
        <img src="" alt="" className="bg" />
         

        
       </section>
    )
}

export default Intro