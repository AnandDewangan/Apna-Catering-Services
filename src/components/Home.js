import React from 'react';
import shape from '../images/shape.png';
import profile from '../images/anand_pic.png';

export default function Home() {
  return (
    <main>
        <section className="showcase-area">
            <div className="container showcase_area">
                <div className="showcase-info">
                    <h2 className="respect">Hello, <span>I am</span></h2>
                    <h1 className="heading">ANAND <span>DEWANGAN</span></h1>
                    <h3 className="sub-heading"><span className="waitingForConnection">Full</span> <span className="waitingForConnection2">Stack</span> <span className="waitingForConnection3">Web-Developer</span></h3>
                    <p className="text flex">This is my official Portfolio website and about details here.</p>
                    <p className="text flex">If you are
                        interested with me so,Let's work together. </p>
                    <div className="cta">
                        <a href="mailto:Mr.Anand.Dewangan@gmail.com" className="btn">Contact Me</a>
                        <a href="files/Resume-Anand Kumar.pdf" download="" className="secondary-btn">Download CV</a>
                    </div>
                </div>
                <div className="showcase-image">
                    <img src={shape} className='shape'/>
                    <img src={profile} className="person" alt="Anand" />
                </div>
                <div className="showcase1-image">
                    <img src={profile} className="person1" alt="Anand" />
                </div>
            </div>
        </section>
    </main>
  )
}
