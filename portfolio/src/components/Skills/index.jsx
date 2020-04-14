import React from 'react';
import '../style.css';

function Skills() {
    return (
        <section class="skills-section" style="background-image: url(https://i.imgur.com/FOiQ19p.png);">

        <h2 class="title">Skills</h2>

        <div uk-slider>

            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                    <li>
                        <div class="slides"><i class="skill fab fa-html5"></i><br></br>HTML</div>
                    </li>
                    <li>
                        <div class="slides"><i class="skill fab fa-css3-alt"></i><br></br>CSS</div>
                    </li>
                    <li>
                        <div class="slides"><i class="skill fab fa-js-square"></i><br></br>Javascript</div>
                    </li>
                    <li>
                        <div class="slides"><i class="skill fab fa-js"></i><br></br>jQuery</div>
                    </li>
                    <li>
                        <div class="slides"><i class="skill fas fa-desktop"></i><br></br>API</div>
                    </li>
                    <li>
                        <div class="slides"><i class="skill fas fa-terminal"></i><br></br>Node.JS</div>
                    </li>
                    <li>
                        <div class="slides"><i class="skill fas fa-server"></i><br></br>Express.JS</div>
                    </li>
                    <li>
                        <div class="slides"><i class="skill fas fa-table"></i><br></br>MySQL</div>
                    </li>
                </ul>

                <a class="previous uk-position-center-left uk-position-small uk-hidden-hover" href="#"
                    uk-slidenav-previous uk-slider-item="previous"></a>
                <a class="next uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
                    uk-slider-item="next"></a>

            </div>

            <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

        </div>

    </section>
    )
};

export default Skills;