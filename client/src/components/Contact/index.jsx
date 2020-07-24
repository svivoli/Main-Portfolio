import React from 'react';
import '../style.css';

function Contact() {
    return (
        <section className="contact-section">
            <h2 className="title">Get in touch</h2>
            <div className="row">
                <div className="contact-grid-item col-lg-3 col-md-3 col-sm-12">
                    <div className="contact-card">
                        <i className="contact-icon fas fa-paper-plane"></i>
                        <br></br>
                        <a href="mailto:snvivoli@gmail.com" className="contact">snvivoli@gmail.com</a>
                    </div>
                </div>
                <div className="contact-blurb contact-grid-item col-lg-6 col-md-6 col-sm-12">
                    <p>Comment on my work, connect me with a colleague, or send me a business inquiry. I even accept restaurant suggestions in the Portland area.</p>
                </div>
                <div className="contact-grid-item col-lg-3 col-md-3 col-sm-12">
                    <div className="contact-card">
                        <i className="contact-icon fas fa-mobile-alt"></i>
                        <br></br>
                        <a href="tel:16507962557" className="contact">(650) 796-2557</a>
                    </div>
                </div>
            </div>

            
        </section>
    )
};

export default Contact;