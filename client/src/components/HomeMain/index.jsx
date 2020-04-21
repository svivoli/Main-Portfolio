import React from 'react';
import Bio from '../Bio';
import Skills from '../Skills';
import Profiles from '../Profiles';
import Program from '../Program';
import Contact from '../Contact';
import Credentials from '../Credentials';

import '../style.css';

function HomeMain() {
    return (
        <div>
            <Bio />
            <Skills />
            <Profiles />
            <Program />
            <Contact />
            <Credentials />
        </div>
    )
};

export default HomeMain;