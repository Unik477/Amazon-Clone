import React, { useState, useEffect } from 'react';
import '../App.css'; // Ensure this points to your CSS file

const HeroSection = () => {
    const images = [
        '/Images/hero_image1.jpg',  // Replace with actual image paths
        '/Images/hero_image2.jpg',
        '/Images/hero_image3.jpg',
        '/Images/hero_image4.jpg',
        '/Images/hero_image5.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="hero-section" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
            <div className="hero-msg">
                <p>
                    You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
                    <a href="https://www.amazon.in/"> Click here to go to Amazon.in</a>
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
