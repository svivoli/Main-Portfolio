import React from 'react';
import PortfolioDescription from '../PortfolioDescription';
import Projects from '../Projects';
import ProjectsLinks from '../ProjectsLinks';
import '../style.css';

function PortfolioContainer() {
    return (
        <div>
            <PortfolioDescription />
            <Projects />
            <ProjectsLinks />
        </div>
    )
};

export default PortfolioContainer;