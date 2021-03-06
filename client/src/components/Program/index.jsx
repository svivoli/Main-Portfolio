import React from 'react';
import '../style.css';

function Program() {
    return (
        <section className="bootcamp-section"
            className="uk-height-medium uk-background-cover uk-light uk-flex-vertical-alignment" uk-parallax="bgy: -200" style={{backgroundImage: "url(https://i.imgur.com/E5EeltF.jpg)"}}>

            <br></br>
            <h2 className="program-link uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical"><a className="bootcamp-link"
                    href="https://bootcamp.uoregon.edu/coding/" target="_blank">
                    Learn more about the University of Oregon's Boot Camp program here.
                </a></h2>

        </section>
    )
};

export default Program;