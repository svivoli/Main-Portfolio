import React from 'react';
import '../style.css';

function Skills() {
    return (
        <section className="skills-section">

            <h2 className="title">Skills</h2>

            <button className="skill-btn" type="button" disabled>HTML</button>
            <button className="skill-btn" type="button" disabled>CSS</button>
            <button className="skill-btn" type="button" disabled>Javascript</button>
            <button className="skill-btn" type="button" disabled>jQuery</button>
            <button className="skill-btn" type="button" disabled>Node</button>
            <button className="skill-btn" type="button" disabled>Api's</button>
            <button className="skill-btn" type="button" disabled>Express</button>
            <br></br>
            <button className="skill-btn" type="button" disabled>MySQL</button>
            <button className="skill-btn" type="button" disabled>NoSQL</button>
            <button className="skill-btn" type="button" disabled>PWA</button>
            <button className="skill-btn" type="button" disabled>MongoDB</button>
            <button className="skill-btn" type="button" disabled>IndexedDB</button>
            <button className="skill-btn" type="button" disabled>React</button>

        </section>
    )
};

export default Skills;