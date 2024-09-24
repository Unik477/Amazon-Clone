import React from 'react';
import { Search, ShoppingCart, ChevronDown, Menu } from 'lucide-react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="amazon-header">
      <nav className="navbar">
        <div className="navbar-left">
          <Link to={"/"}>
            <img src={`${process.env.PUBLIC_URL}/Images/amazon_logo.png`} alt="Amazon Logo" className="logo" />
          </Link>
          <div className="delivery-info">
            <span>Deliver to Nikhil</span>
            <strong>New Delhi 110063</strong>
          </div>
        </div>
        
        <div className="search-bar">
          <select className="search-category">
            <option>All</option>
            <option>Arts & Crafts</option>
            <option>Automotive</option>
            <option>Baby</option>
            <option>Beauty </option>
            <option>Books</option>
            <option>Boys' Fashion</option>
            <option>Computers</option>
            <option>Deals</option>
            <option>Digital Music</option>
            <option>Electronics</option>
            <option>Girls' Fashion</option>
            <option>Health</option>
            <option>Home </option>
            <option>Industrial</option>
            <option>Kindle Store</option>
            <option>Luggage</option>
            <option>Men's Fashion</option>
            <option>Movies & TV</option>
            <option>Music, CDs </option>
            <option>Pet Supplies</option>
            <option>Prime Video</option>
            <option>Software</option>
            <option>Sports & Outdoors</option>
            <option>Tools</option>
            <option>Toys & Games</option>
            <option>Video Games</option>
            <option>Women's Fashion</option>
          </select>
          <input type="text" placeholder="Search Amazon.in" className="search-input" />
          <button className="search-button">
            <Search size={20} />
          </button>
        </div>
        
        <div className="navbar-right">
          <div className="language-selector">
            <img src={`${process.env.PUBLIC_URL}/Images/Flag_of_India.png`} alt="India Flag" className="flag" />
            <span>EN</span>
            <ChevronDown size={16} />
          </div>
          <div className="account-info">
            <span>Hello, Nikhil</span>
            <strong>Account & Lists</strong>
            <ChevronDown size={16} />
          </div>
          <div className="returns-orders">
            <span>Returns</span>
            <strong>& Orders</strong>
          </div>
          <Link to={"/cart"} className='cart-link'>
            <div className="cart">
              <ShoppingCart size={34} />
              <span>Cart</span>
            </div>
          </Link>
        </div>
      </nav>

      <nav className="subnav">
        <ul>
          <li><a href="#all"><Menu size={18} /> All</a></li>
          <li><a href="#fresh">Fresh</a></li>
          <li><a href="#amazon-minitv">Amazon miniTV</a></li>
          <li><a href="#sell">Sell</a></li>
          <li><a href="#gift-cards">Gift Cards</a></li>
          <li><a href="#flights">Flights</a></li>
          <li><a href="#browsing-history">Browsing History</a></li>
          <li><a href="#buy-again">Buy Again</a></li>
          <li><a href="#nikhils-amazon">Nikhil's Amazon.in</a></li>
          <li><a href="#amazon-pay">Amazon Pay</a></li>
          <li><a href="#amazon-basics">AmazonBasics</a></li>
          <li><a href="#health">Health, Household & Personal Care</a></li>
          <li><a href="#customer-service">Customer Service</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;