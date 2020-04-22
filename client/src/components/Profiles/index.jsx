import React from 'react';
import '../style.css';

function Profiles() {
    return (
        <section className="find-section">
            <div className="content">
                <h2 className="title">Where to find me</h2>
                <br></br>

                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-3 col-4">
                        <a href="https://www.linkedin.com/in/sarah-vivoli/" target="_blank"><i className="social fab fa-linkedin"></i></a>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-9 col-8">
                        <h4>LinkedIn</h4>
                        <p>Add me on LinkedIn to view my professional network.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-3 col-4">
                        <a href="https://github.com/svivoli" target="_blank"><i className="social fab fa-github"></i></a>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-9 col-8">
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