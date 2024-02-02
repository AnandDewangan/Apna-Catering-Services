import React from "react";
import Portfolio from "../images/Portfolio.jpg";

export default function Project() {
  return (
    <main>
      <section className="projects-section" id="project">
        <div className="container projects_section">
          <div className="project-info">
            <h2 className="respect">
              Self design <span>Projects</span>
            </h2>
            <h1 className="heading">
              Better design, <span>better experiance</span>
            </h1>
            <h3 className="sub-heading"><span className="waitingForConnection">Full</span> <span className="waitingForConnection2">Stack</span> <span className="waitingForConnection3">Web-Developer</span></h3>
            <p className="text flex">
              Hello my name Anand Dewangan. I am a Full Stack Developer. I am
              design some projects and create webpage. If are you interested,
              please check here.
            </p>
            <p><span>Let's work together.</span></p>
            <h2 className="respect">(20+) Projects Complete</h2>
            <div className="cta">
              <a href="mailto:Mr.Anand.Dewangan@gmail.com" className="btn">
                Mail Me!
              </a>
              <a
                href="tel: +918963906336"
                download=""
                className="secondary-btn"
              >
                Connect with Me!
              </a>
            </div>
          </div>
          <div className="project-image"></div>
        </div>
      </section>
    </main>
  );
}
