import React from 'react';
import '../style.css';

function Contact() {
    return (
        <section className="contact-section">
            <h2 className="title">Get in touch</h2>
            <div className="contact-grid uk-grid-collapse uk-child-width-expand@s" uk-grid>
                <div className="uk-width-1-4">
                    <div className="contact-card">
                        <i className="contact-icon fas fa-paper-plane"></i>
                        <h5>Email</h5>
                        <a href="mailto:snvivoli@gmail.com" className="contact"> snvivoli@gmail.com</a>
                    </div>
                </div>
                <div className="contact-blurb uk-width-1-2">
                    <p>Comment on my work, connect me with a colleague, or send me a business inquiry. I even accept restaurant suggestions in the Portland area.</p>
                </div>
                <div className="uk-width-1-4">
                    <div className="contact-card">
                        <i className="contact-icon fas fa-mobile-alt"></i>
                        <h5>Phone</h5>
                        <a href="tel:16507962557" className="contact">(650) 796-2557</a>
                    </div>
                </div>
            </div>

            
        </section>
    )
};

export default Contact;