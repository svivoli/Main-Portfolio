import React from 'react';
import '../style.css';

function Profiles() {
    return (
        <section class="find-section">
            <div class="content">
                <h2 class="title">Where to find me</h2>
                <br></br>

                <div class="uk-grid-collapse uk-child-width-expand@s" uk-grid>
                    <div class="uk-width-1-3">
                        <a href="https://www.linkedin.com/in/sarah-vivoli/" target="_blank"><i class="social fab fa-linkedin"></i></a>
                    </div>
                    <div class="profile uk-width-2-3">
                        <h4>LinkedIn</h4>
                        <p>Add me on LinkedIn to view my professional network.</p>
                    </div>
                    <div class="uk-width-1-3">
                        <a href="https://github.com/svivoli" target="_blank"><i class="social fab fa-github"></i></a>
                    </div>
                    <div class="profile uk-width-2-3">
                        <h4>GitHub</h4>
                        <p>Follow me on GitHub to view my projects in depth and get to know me as a
                            developer better.</p>
                    </div>
                </div>
                <br></br>

            </div>

        </section>
    )
};

export default Profiles;