import React from 'react';
import '../style.css';

function Credentials() {
    return (
        <section className="resume-section">

            <div className="cred">

                <h2 className="cred-title">Credentials</h2>

                <div className="credentials row">
                    <div id="credentials" className="col-lg-6 col-md-6 col-sm-4 col-3">
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
                    <div className="resume col-lg-6 col-md-7 col-sm-9 col-10">
                        <h3 className="resume-title">Resume</h3>
                        <p className="resume-text">
                            You can view my full resume by clicking the icon below. 
                            <br></br> Feel free to download a copy.
                        </p>
                        <a href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A04e3edc9-a4cb-4374-bcc0-4f7d67aed53c"
                            target="_blank"><i className="document fas fa-file-alt"></i></a>
                    </div>
                </div>
                
            </div>

        </section>
    )
};

export default Credentials;