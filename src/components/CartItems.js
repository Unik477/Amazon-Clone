import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Check } from 'lucide-react';
import './CartItems.css'; 

const CartItems = (props ) => {

    const { removeFromCart } = useContext(CartContext);  // Get removeFromCart function
  
    const handleDelete = () => {
      removeFromCart(props.id);  // Call removeFromCart with the product id
      alert(props.name + " has been removed from the cart")
    };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={props.image} alt="Amazon Brand - Presto! Garbage Bags" />
      </div>
      <div className="item-details">
        <h2 className="item-title">{props.description}</h2>
        <div className="item-meta">
          <span className="best-seller1">#1 Best Seller</span> in Home & Kitchen
        </div>
        <div className="item-stats">40K+ bought in past month</div>
        <div className="item-stock">In stock</div>
        <div className="item-prime">
          <Check size={16} /> prime
        </div>
        <div className="item-gift">
          <input type="checkbox" id="gift" />
          <label htmlFor="gift">This will be a gift Learn more</label>
        </div>
        <div className="item-color">Colour: Black</div>
        <div className="item-style">Style Name: 180 (Medium)</div>
        <div className="item-actions">
          <select className="item-quantity">
            <option>Qty: 1</option>
          </select>
          <button className="action-button" onClick={handleDelete}>Delete</button>
          <button className="action-button">Save for later</button>
          <button className="action-button">See more like this</button>
          <button className="action-button">Share</button>
        </div>
      </div>
      <div className="item-price">
        <span className="currency">₹</span>385.00
        {/* <div className="coupon-info">
          <span className="coupon-collected">Coupon Collected</span>
          <span className="save-info">Save 2% <ChevronDown size={16} /></span>
        </div> */}
        <div className="subscribe-save">
          Save 15 % more with Subscribe & Save
        </div>
      </div>
    </div>
  );
};

export default CartItems;