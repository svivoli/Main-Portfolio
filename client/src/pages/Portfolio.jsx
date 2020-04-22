import React from 'react';
// import Header from '../components/Header';
import PortfolioContainer from '../components/PortfolioContainer';
import Footer from '../components/Footer';
import './style.css';

function Portfolio() {
    return (
        <div>
            <header className="subnav-hero-section">
                <div className="container demo">
                    <div className="content">
                        <div id="large-header" className="large-header">
                            <canvas id="demo-canvas"></canvas>
                            <h1 className="main-title"><span className="thin">Sarah Vivoli</span></h1>
                        </div>
                    </div>
                </div>
                <ul className="subnav-hero-subnav">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/portfolio" className="is-active">PORTFOLIO</a></li>
                </ul>
            </header>
            <PortfolioContainer />
            <Footer />
        </div>
    )
};

export default Portfolio;