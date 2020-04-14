import React from 'react';
import '../style.css';

function Contact() {
    return (
        <section class="contact-section">
            <h2 class="title">Get in touch</h2>
            <div class="contact-card">
                <i class="contact-icon fas fa-paper-plane"></i>
                <h5>Email</h5>
                <a href="mailto:snvivoli@gmail.com" class="contact"> snvivoli@gmail.com</a>
            </div>
            <br></br>
            <div class="contact-card">
                <i class="contact-icon fas fa-mobile-alt"></i>
                <h5>Phone</h5>
                (650) 796-2557
            </div>

            <div class="social-btns">
                <ul>
                    <li><a href="mailto:snvivoli@gmail.com" class="social-btn"><i class="social-icon fas fa-paper-plane"></i></a></li>

                    <li><a href="https://github.com/svivoli" class="social-btn" target="_blank"><i
                                class="social-icon fab fa-github"></i></a></li>

                    <li><a href="https://www.linkedin.com/in/sarah-vivoli/" class="social-btn" target="_blank"><i
                                class="social-icon fab fa-linkedin"></i></a></li>

                    <li><a href="https://docs.google.com/document/d/1Dgleh29HBpD2juFqEO7xUXNbs7VSOeoedjUGzAnZqHc/edit?usp=sharing"
                            class="social-btn" target="_blank"><i class="social-icon fab fa-google-drive"></i></a></li>
                </ul>
            </div>
        </section>
    )
};

export default Contact;