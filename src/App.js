
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ShopSection from './components/ShopSection';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ShopSection />
            <Footer />
        </div>
    );
};

export default App;
