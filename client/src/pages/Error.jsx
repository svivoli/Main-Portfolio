import React from 'react';
import ErrorMessage from '../components/ErrorMessage';
import Footer from '../components/Footer';
import './style.css';

function Error() {
    return (
        <div>
            <header className="subnav-hero-section">
                <div className="container demo">
                    <div className="content">
                        <div id="large-header" className="large-header">
                            <canvas id="demo-canvas"></canvas>
                            <h1 className="main-title"><span className="thin">Sarah Vivoli</span></h1>
                            <h3 className="main-subtitle">full stack web developer</h3>
                        </div>
                    </div>
                </div>
                <ul className="subnav-hero-subnav">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/portfolio" className="is-active">PORTFOLIO</a></li>
                </ul>
            </header>
            <ErrorMessage />
            <Footer />
        </div>
    )
};

export default Error;