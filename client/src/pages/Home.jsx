import React from 'react';
import Header from '../components/Header';
import HomeMain from '../components/HomeMain';
import Footer from '../components/Footer';
import './style.css';

function Home() {
    return (
        <div>
            <Header />
            <HomeMain />
            <Footer />
        </div>
    )
}

export default Home;