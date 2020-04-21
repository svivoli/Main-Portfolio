import React from 'react';
import '../style.css';

function Footer() {
    return (
        <div class="holy-grail-footer">

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
    </div>
    )
};

export default Footer;