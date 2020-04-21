import React from 'react';
import '../style.css';

function Footer() {
    return (
        <div className="holy-grail-footer">

        <div className="social-btns">
            <ul>
                <li><a href="mailto:snvivoli@gmail.com" className="social-btn"><i className="social-icon fas fa-paper-plane"></i></a></li>

                <li><a href="https://github.com/svivoli" className="social-btn" target="_blank"><i
                            className="social-icon fab fa-github"></i></a></li>

                <li><a href="https://www.linkedin.com/in/sarah-vivoli/" className="social-btn" target="_blank"><i
                            className="social-icon fab fa-linkedin"></i></a></li>

                <li><a href="https://docs.google.com/document/d/1Dgleh29HBpD2juFqEO7xUXNbs7VSOeoedjUGzAnZqHc/edit?usp=sharing"
                        className="social-btn" target="_blank"><i className="social-icon fab fa-google-drive"></i></a></li>
            </ul>
        </div>
    </div>
    )
};

export default Footer;