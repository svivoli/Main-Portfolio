import React from 'react';
import Bio from '../Bio';
import Skills from '../Skills';
import Profiles from '../Profiles';
import Contact from '../Contact';
import Credentials from '../Credentials';
import Program from '../Program';
import '../style.css';

function HomeMain() {
    return (
        <div>
            <Bio />
            <Skills />
            <Profiles />
            <Credentials />
            <Program />
            <Contact />
        </div>
    )
};

export default HomeMain;