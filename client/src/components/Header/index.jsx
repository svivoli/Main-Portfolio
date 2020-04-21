import React from "react";
import "../style.css";

function Header() {
    return (
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
                <li><a href="index.html" className="is-active">HOME</a></li>
                <li><a href="portfolio.html">PORTFOLIO</a></li>
            </ul>
        </header>
    )
};

export default Header;