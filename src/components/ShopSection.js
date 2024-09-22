import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure this points to your CSS file

const ShopSection = () => {
    const categories = [
        { name: "Clothes", image: `${process.env.PUBLIC_URL}/Images/box1_image.jpg` },
        { name: "Health & Personal Care", image: `${process.env.PUBLIC_URL}/Images/box2_image.jpg` },
        { name: "Furniture", image: `${process.env.PUBLIC_URL}/Images/box3_image.jpg` },
        { name: "Mobiles", image: `${process.env.PUBLIC_URL}/Images/box4_image.jpg` },
        { name: "Electronics", image: `${process.env.PUBLIC_URL}/Images/box5_image.jpg` },
        { name: "Books", image: `${process.env.PUBLIC_URL}/Images/box6_image.jpg` },
        { name: "Toys & Games", image: `${process.env.PUBLIC_URL}/Images/box7_image.jpg` },
        { name: "Sports & Outdoors", image: `${process.env.PUBLIC_URL}/Images/box8_image.jpg` },
    ];

    return (
        <div className="shop-section">
            {categories.map((category, index) => (
                <Link key={index} to='/productdetails' className={`box${index + 1} box`}>
                    <div className="box-content">
                        <h2>{category.name}</h2>
                        <div className="box-img" style={{ backgroundImage: `url(${category.image})` }}></div>
                        <p>See More</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ShopSection;
