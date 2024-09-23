import React from 'react';
import FilterSidebar from './FilterSidebar'; // Make sure to import the FilterSidebar component
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

export default function ProductDetails() {

    
    const products = [
        {   id: 1,
            name: "Under Eye Patches - 60 Pcs",
            description: "24K Gold Eye Mask - Puffy Eyes & Dark Circles Treatments, Reduce Under Eye Bags",
            skinType: "All Skin Type",
            packSize: "30 Count (Pack of 1)",
            reviewsCount: "9,788",
            boughtCount: "20K+",
            currentPrice: "$8.99",
            oldPrice: "$14.99",
            coupon: "$1.00 with coupon",
            seller: "Nazano",
            image: `${process.env.PUBLIC_URL}/Images/box1_image.jpg`,
            isBestSeller: true
        },
        {   id: 2,
            name: "Hydrating Face Cream - 50g",
            description: "Rich moisturizing cream for all-day hydration.",
            skinType: "Dry Skin",
            packSize: "50g",
            reviewsCount: "5,432",
            boughtCount: "15K+",
            currentPrice: "$12.99",
            oldPrice: "$19.99",
            coupon: "$2.00 with coupon",
            seller: "GlowUp",
            image: `${process.env.PUBLIC_URL}/Images/box2_image.jpg`,
            isBestSeller: false
        },
        {   id: 3,
            name: "Sunscreen SPF 50 - 100ml",
            description: "Protects against harmful UV rays with broad-spectrum protection.",
            skinType: "All Skin Type",
            packSize: "100ml",
            reviewsCount: "8,120",
            boughtCount: "25K+",
            currentPrice: "$15.99",
            oldPrice: "$24.99",
            coupon: "$3.00 with coupon",
            seller: "SunGuard",
            image: `${process.env.PUBLIC_URL}/Images/box3_image.jpg`,
            isBestSeller: true
        },
        {   id: 4,
            name: "Vitamin C Serum - 30ml",
            description: "Brightens skin and reduces signs of aging.",
            skinType: "All Skin Type",
            packSize: "30ml",
            reviewsCount: "6,345",
            boughtCount: "10K+",
            currentPrice: "$19.99",
            oldPrice: "$29.99",
            coupon: "$4.00 with coupon",
            seller: "BrightSkin",
            image: `${process.env.PUBLIC_URL}/Images/box4_image.jpg`,
            isBestSeller: true
        },
        {   id: 5,
            name: "Moisturizing Lip Balm - 15g",
            description: "Keeps lips soft and hydrated all day long.",
            skinType: "All Skin Type",
            packSize: "15g",
            reviewsCount: "4,567",
            boughtCount: "5K+",
            currentPrice: "$3.99",
            oldPrice: "$5.99",
            coupon: "$1.00 with coupon",
            seller: "LipCare",
            image: `${process.env.PUBLIC_URL}/Images/box5_image.jpg`,
            isBestSeller: false
        },
        {   id: 6,
            name: "Hair Growth Oil - 100ml",
            description: "Stimulates hair growth and strengthens hair.",
            skinType: "All Hair Types",
            packSize: "100ml",
            reviewsCount: "7,890",
            boughtCount: "12K+",
            currentPrice: "$12.99",
            oldPrice: "$18.99",
            coupon: "$2.00 with coupon",
            seller: "HairRevive",
            image: `${process.env.PUBLIC_URL}/Images/box6_image.jpg`,
            isBestSeller: true
        },
        {   id: 6,
            name: "Exfoliating Body Scrub - 200g",
            description: "Gently exfoliates skin, leaving it soft and smooth.",
            skinType: "All Skin Type",
            packSize: "200g",
            reviewsCount: "3,432",
            boughtCount: "8K+",
            currentPrice: "$15.99",
            oldPrice: "$22.99",
            coupon: "$3.00 with coupon",
            seller: "ScrubCo",
            image: `${process.env.PUBLIC_URL}/Images/box7_image.jpg`,
            isBestSeller: false
        },
        {   id: 7,
            name: "Charcoal Face Mask - 100g",
            description: "Deep cleans pores and detoxifies skin.",
            skinType: "Oily Skin",
            packSize: "100g",
            reviewsCount: "9,001",
            boughtCount: "20K+",
            currentPrice: "$10.99",
            oldPrice: "$15.99",
            coupon: "$2.00 with coupon",
            seller: "MaskKing",
            image: `${process.env.PUBLIC_URL}/Images/box8_image.jpg`,
            isBestSeller: true
        },
        {   id: 8,
            name: "Night Repair Cream - 50g",
            description: "Rejuvenates skin overnight for a radiant look.",
            skinType: "All Skin Type",
            packSize: "50g",
            reviewsCount: "8,760",
            boughtCount: "14K+",
            currentPrice: "$24.99",
            oldPrice: "$34.99",
            coupon: "$5.00 with coupon",
            seller: "RepairEssence",
            image: `${process.env.PUBLIC_URL}/Images/box9_image.jpg`,
            isBestSeller: true
        },
        
    ];

    return (
        <div className="product-details-page">
            <FilterSidebar />  {/* Render the sidebar component */}
           <div className="product-details-section">
           <Link to={"/productdescription"}>
                <div className="product-listing">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
           </Link> 
            </div>
        </div>
    );
    
};
