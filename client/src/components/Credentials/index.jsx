import React from 'react';
import '../style.css';

function Credentials() {
    return (
        <section className="resume-section">

            <div className="cred">

                <h2 className="cred-title">Credentials</h2>

                <div className="credentials row">
                    <div id="credentials" className="col-md-6">
                        <div className="education uk-card uk-card-default uk-card-body">
                            <h3>Education</h3>
                            <ul id="education">
                                <li>
                                    <h4 id="cert"><strong>Web Development Certification</strong></h4>
                                </li>
                                <ul id="education">
                                    <li>
                                        <h5>University of Oregon</h5>
                                    </li>
                                </ul>
                                <li>
                                    <h4 id="cert"><strong>Bachelor of Science, Ecnomics</strong></h4>
                                </li>
                                <ul id="education">
                                    <li>
                                        <h5>University of Oregon</h5>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="resume col-md-6">
                        <h3 className="resume-title">Resume</h3>
                        <p className="resume-text">
                            You can view my full resume by clicking the icon below. 
                            <br></br> Feel free to download a copy.
                        </p>
                        <a href="https://docs.google.com/document/d/1Dgleh29HBpD2juFqEO7xUXNbs7VSOeoedjUGzAnZqHc/edit?usp=sharing"
                            target="_blank"><i className="document fas fa-file-alt"></i></a>
                    </div>
                </div>
                
            </div>

        </section>
    )
};

export default Credentials;