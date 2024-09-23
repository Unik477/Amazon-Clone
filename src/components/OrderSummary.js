import React, { useState } from 'react';
import "./OrderSummary.css"

const OrderSummary = ({ itemCount, subtotal }) => {
  const [isGift, setIsGift] = useState(false);

  return (
    <div className="order-summary">
      <div className="subtotal">
        <span>Subtotal ({itemCount} items):</span>
        <span className="price">₹{subtotal.toFixed(2)}</span>
      </div>
      <div className="gift-option">
        <input
          type="checkbox"
          id="gift-checkbox"
          checked={isGift}
          onChange={(e) => setIsGift(e.target.checked)}
        />
        <label htmlFor="gift-checkbox">This order contains a gift</label>
      </div>
      <button className="proceed-button">Proceed to Buy</button>
    </div>
  );
};

export default OrderSummary;