import React from "react";
import "../style.css";

function Header() {
    return (
        <header class="subnav-hero-section">
            <div class="container demo">
                <div class="content">
                    <div id="large-header" class="large-header">
                        <canvas id="demo-canvas"></canvas>
                        <h1 class="main-title"><span class="thin">Sarah Vivoli</span></h1>
                    </div>
                </div>
            </div>
            <ul class="subnav-hero-subnav">
                <li><a href="index.html" class="is-active">HOME</a></li>
                <li><a href="portfolio.html">PORTFOLIO</a></li>
            </ul>
        </header>
    )
};

export default Header;