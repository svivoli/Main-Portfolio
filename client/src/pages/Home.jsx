import React from 'react';
// import Header from '../components/Header';
import HomeMain from '../components/HomeMain';
import Footer from '../components/Footer';
import './style.css';

function Home() {
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
                    <li><a href="/home" className="is-active">HOME</a></li>
                    <li><a href="/portfolio">PORTFOLIO</a></li>
                </ul>
            </header>
            <article className="article-home">
            <HomeMain />
            </article>
            <Footer />
        </div>
    )
}

export default Home;