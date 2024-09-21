import React from 'react';
import '../App.css'; // Ensure this points to your CSS file

const ShopSection = () => {
    const categories = [
        { name: "Clothes", image: "/Images/box1_image.jpg" },
        { name: "Health & Personal Care", image: "/Images/box2_image.jpg" },
        { name: "Furniture", image: "/Images/box3_image.jpg" },
        { name: "Mobiles", image: "/Images/box4_image.jpg" },
        { name: "Electronics", image: "/Images/box5_image.jpg" },
        { name: "Books", image: "/Images/box6_image.jpg" },
        { name: "Toys & Games", image: "/Images/box7_image.jpg" },
        { name: "Sports & Outdoors", image: "/Images/box8_image.jpg" },
    ];

    return (
        <div className="shop-section">
            {categories.map((category, index) => (
                <a key={index} href={`category.html?category=${category.name.toLowerCase()}`} className={`box${index + 1} box`}>
                    <div className="box-content">
                        <h2>{category.name}</h2>
                        <div className="box-img" style={{ backgroundImage: `url(${category.image})` }}></div>
                        <p>See More</p>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default ShopSection;
