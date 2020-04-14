import React from "react";
import '../style.css';

function Bio() {
    return (
        <section class="about-section">
            <div class="about">

                <div class="bio-head">
                    <h2 class="title">Get to know me</h2>
                    <img class="biopic" src="assets/images/beach.jpg" width="95" height="95" alt="Hey, That's Me"></img>
                </div>
                    <p>I was born and raised in Silicon Valley and moved to Oregon
                    to attend college at the University of Oregon. I am now 25 years young living in Portland where
                    I am earning a
                    certificate for full stack web development. I first started coding when I was 12 or 13, learning
                    the basics
                    of html and css to update my MySpace page. My interest really kicked off in college in the midst
                    of my economics
                    degree when we used various software programs to code for economic purposes (make models, run
                    regressions,
                    forecast, etc). After taking an intro to CIS class my junior year, I was sure that I was going
                    to switch gears
                after finishing my degree.</p>

                
            </div>
        </section>
    )
};

export default Bio;