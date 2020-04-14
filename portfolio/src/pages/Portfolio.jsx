import React from 'react';
import Header from '../components/Header';
import PortfolioContainer from '../components/PortfolioContainer';
import Footer from '../components/Footer';
import './style.css';

function Portfolio() {
    return (
        <div>
            <Header />
            <PortfolioContainer />
            <Footer />
        </div>
    )
};

export default Portfolio;