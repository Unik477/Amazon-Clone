import React from 'react';
import PriceCard from './PriceCard';
import './ProductDescription.css';

const ProductDescription = () => {
  return (
    <div className="product-description">
      <div className="product-info">
        <div className="product-info-img">
        <img src={`${process.env.PUBLIC_URL}/Images/samsungPhone.jpeg`} alt='not found'/>
        </div>
        <h1>Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Violet, 12GB, 512GB Storage)</h1>
        <div className="ratings">
          <span className="stars">★★★★☆</span>
          <span className="rating-count">2,220 ratings</span>
        </div>
        <div className="deal-badge">Limited Time Deal</div>
        <div className="price-section">
          <span className="current-price">₹1,31,999</span>
          <span className="original-price">M.R.P.: ₹1,44,999</span>
          <span className="discount">You Save: ₹2,000 (33%)</span>
        </div>
        <p>Inclusive of all taxes</p>
        <div className="emi-option">EMI starts at ₹191. No Cost EMI available</div>
        
        <div className="offers">
          <h3>Offers</h3>
          <div className="offer-grid">
            <div className="offer-item">Bank Offer</div>
            <div className="offer-item">No Cost EMI</div>
            <div className="offer-item">Cashback</div>
            <div className="offer-item">Partner Offers</div>
          </div>
        </div>
        
        <div className="product-features">
          <div className="feature">
            <span className="feature-icon">🔌</span>
            <span className="feature-text">USB Type-C, USB Type A</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🔋</span>
            <span className="feature-text">20000 Milliamp Hours</span>
          </div>
          <div className="feature">
            <span className="feature-icon">⚫</span>
            <span className="feature-text">Black</span>
          </div>
        </div>
        
        <div className="about-item">
          <h3>About this item</h3>
          <ul>
            <li>Triple Output: The 20000mAh power bank features 3 output ports (2 Type-C and 1 Type-A)</li>
            <li>85W PD Fast Charging: Equipped with Power Delivery (PD) support through the Type C1 port</li>
            <li>Versatile Charging: Equipped with Quick Charge and Power Delivery technologies</li>
            <li>Lightweight Design: Weighing only 389g, it's easy to carry and is travel-friendly</li>
          </ul>
        </div>
      </div>
      <div className="price-card-container">
        <PriceCard />
      </div>
    </div>
  );
};

export default ProductDescription;