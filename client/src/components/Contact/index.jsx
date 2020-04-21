import React from 'react';
import '../style.css';

function Contact() {
    return (
        <section class="contact-section">
            <h2 class="title">Get in touch</h2>
            <div class="contact-grid uk-grid-collapse uk-child-width-expand@s" uk-grid>
                <div class="uk-width-1-4">
                    <div class="contact-card">
                        <i class="contact-icon fas fa-paper-plane"></i>
                        <h5>Email</h5>
                        <a href="mailto:snvivoli@gmail.com" class="contact"> snvivoli@gmail.com</a>
                    </div>
                </div>
                <div class="contact-blurb uk-width-1-2">
                    <p>Comment on my work, connect me with a colleague, or send me a business inquiry. I even accept restaurant suggestions in the Portland area.</p>
                </div>
                <div class="uk-width-1-4">
                    <div class="contact-card">
                        <i class="contact-icon fas fa-mobile-alt"></i>
                        <h5>Phone</h5>
                        <a href="tel:16507962557" class="contact">(650) 796-2557</a>
                    </div>
                </div>
            </div>

            
        </section>
    )
};

export default Contact;