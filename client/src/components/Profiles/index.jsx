import React from 'react';
import '../style.css';

function Profiles() {
    return (
        <section className="find-section">
            <div className="content">
                <h2 className="title">Where to find me</h2>
                <br></br>

                <div className="uk-grid-collapse uk-child-width-expand@s" uk-grid>
                    <div className="uk-width-1-3">
                        <a href="https://www.linkedin.com/in/sarah-vivoli/" target="_blank"><i className="social fab fa-linkedin"></i></a>
                    </div>
                    <div className="profile uk-width-2-3">
                        <h4>LinkedIn</h4>
                        <p>Add me on LinkedIn to view my professional network.</p>
                    </div>
                    <div className="uk-width-1-3">
                        <a href="https://github.com/svivoli" target="_blank"><i className="social fab fa-github"></i></a>
                    </div>
                    <div className="profile uk-width-2-3">
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