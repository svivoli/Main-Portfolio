import React from 'react';
import PortfolioBlurb from '../PortfolioBlurb';
import Projects from '../Projects';
import ProjectsLinks from '../ProjectsLinks';
import '../style.css';

function PortfolioContainer() {
    return (
        <div>
            <PortfolioBlurb />
            <Projects />
            <ProjectsLinks />
        </div>
    )
};

export default PortfolioContainer;