import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import './PriceCard.css';

const PriceCard = () => {
  return (
    <div className="price-card">
      <div className="price">₹1,31,999</div>
      
      <div className="prime-delivery">
        <span className="prime">✓prime</span>
        <span>One-Day</span>
      </div>
      
      <div className="delivery-info">
        <div className="free-delivery">FREE delivery Tomorrow</div>
        <div className="delivery-time">8 AM - 12 PM. Order within 2 hrs 55 mins. <span className="details">Details</span></div>
      </div>
      
      <div className="delivery-address">
        <MapPin size={16} />
        <span>Deliver to Anjali - New Delhi 110063</span>
      </div>
      
      <div className="stock-status">In stock</div>
      
      <div className="price-details">
        <span>Payment</span>
        <span className="blue-text">Secure transaction</span>
        <span>Ships from</span>
        <span>Amazon</span>
        <span>Sold by</span>
        <span>Cocoblu Retail</span>
      </div>
      
      <div className="protection-plan">
        <div className="plan-title">Add a Protection Plan:</div>
        <label>
          <input type="checkbox" />
          <span>1 Year Extended Warranty for ₹344.97</span>
        </label>
      </div>
      
      <div className="quantity-selector">
        <span>Quantity:</span>
        <select>
          <option>1</option>
        </select>
      </div>
      
      <button className="add-to-cart">Add to Cart</button>
      <button className="buy-now">Buy Now</button>
      
      <label className="gift-options">
        <input type="checkbox" />
        <span>Add gift options</span>
      </label>
      
      <button className="add-to-wishlist">
        <span>Add to Wish List</span>
        <ChevronDown size={16} />
      </button>
    </div>
  );
};

export default PriceCard;