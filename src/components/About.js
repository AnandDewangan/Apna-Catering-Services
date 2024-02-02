import React from 'react';
import Chat from '../images/chat.png';
import Email from '../images/email-marketing.png';
import LinkedIn from '../images/linkedin.png';

export default function About() {
  return (
    <main>
        <section className="about-section" id="about">
            <div className="container about_section">
                <div className="about-grid">
                    <div className="about-image flex">
                        <a href="https://twitter.com/AnandDewangan17" target="_blank"><img src={Chat} alt="Whatsapp" /></a>
                        <a href="mailto:Mr.Anand.Dewangan@gmail.com" target="_blank"><img
                                src={Email} alt="Email" /></a>
                        <a href="https://www.linkedin.com/in/anand-dewangan/" target="_blank"><img
                                src={LinkedIn} alt="LinkedIn" /></a>
                    </div>
                    <div className="about-info">
                        <h2 className="respect">About <span>Me,</span></h2>
                        <h1 className="heading">Better design, <span>better experiance</span></h1>
                        <h3 className="sub-heading"><span className="waitingForConnection">Full</span> <span className="waitingForConnection2">Stack</span> <span className="waitingForConnection3">Web-Developer</span></h3>
                        <p className="text flex">Hello my name Anand Dewangan. I am a Full Stack Developer. My internship
                            complete by Newton School.
                            So here we done core Java, Dsa problems, Leetcode problem, Html, Css, JavaScript etc learnt.
                            Some project we
                            are built to better understanding my skill. Please Download my CV to better understanding
                            with me.<span>Let's work together.</span></p>
                        <div className="cta">
                            <a href="mailto:Mr.Anand.Dewangan@gmail.com" className="btn">Contact Me</a>
                            <a href="files/Resume-Anand Kumar.pdf" download="" className="secondary-btn">Download CV</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>
  )
}
