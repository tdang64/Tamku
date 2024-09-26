import React from "react";
import './contact.css';


const Contact = () => {
    return (
        <section id="contact">
            <h2 className="contactTitle">Contact</h2>
            <span className="conDesc">Please fill the form bellow to connect!</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder="Your Name" />
                <input type="email" className="email" placeholder="Your Email" />
                <textarea name="message" row="5" className="msg" placeholder="Your Message"></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src="./public/assets/Facebook.png" alt="Facebook" className="link" />
                    <img src="./public/assets/ins.png" alt="Instagram" className="link" />
                    <img src="./public/assets/X.png" alt="X" className="link" />
                    <img src="./public/assets/Threads.png" alt="Threads" className="link" />
                </div>

                 
            </form>
            <a href="./public/assets/resume.pdf" target="blank" rel="noreferrer" className="btnRes">My Resume</a>

        </section>
    );
}
export default Contact;