import React from 'react'

export default function Contact() {
  return (
    <main>
        <section id="contact" className="contact-section">
            <div className="container contact_section">
                <div className="contact-info">
                    <h3 className="sub-heading">Connect Me</h3>
                    <h1 className="heading">Let's work together</h1>
                    <a className="mail" href="mailto:Mr.Anand.Dewangan@gmail.com">Mr.Anand.Dewangan@gmail.com <i
                            className="fi fi-sr-angle-circle-right"></i> </a>
                </div>
                <form id="contact-form" className="contact-form">
                    <h3>Sent me a message</h3>
                    <input type="hidden" name="contact_number" />
                    <input type="text" id="name" name="user_name" className="form-input" placeholder="Enter Your Name" required />
                    <input type="email" name="user_email" id="email" className="form-input" placeholder="Enter Your Email" required />
                    <textarea name="message" placeholder="Project Details" id="message" className="form-input"></textarea>
                    <input type="submit" value="Send" className="btn" />
                </form>
            </div>
        </section>
    </main>
  )
}
