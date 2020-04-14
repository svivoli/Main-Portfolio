import React from 'react';
import '../style.css';

function Credentials() {
    return (
        <section class="resume-section">

            <div class="cred">

                <h2 class="cred-title">Credentials</h2>

                <div class="credentials uk-child-width-expand@s" uk-grid>
                    <div id="credentials" class="uk-grid-item-match">
                        <div class="education uk-card uk-card-default uk-card-body">
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
                    <div class="resume">
                        <h3 class="resume-title">Resume</h3>
                        <p class="resume-text">
                            You can view my full resume
                            <br></br>
                            by clicking the Google Drive
                            <br></br>
                            icon below. Feel free to
                            <br></br>
                            download a copy.
                        </p>
                        <a href="https://docs.google.com/document/d/1Dgleh29HBpD2juFqEO7xUXNbs7VSOeoedjUGzAnZqHc/edit?usp=sharing"
                            target="_blank"><i class="google fab fa-google-drive"></i></a>
                    </div>
                </div>
                
            </div>

        </section>
    )
};

export default Credentials;