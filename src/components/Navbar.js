import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="navbar">
                <div className="nav-logo">
                    <Link to={"/"}>
                        <div className="logo"></div>
                    </Link>
                </div>
                <div className="nav-address hide-mobile">
                    <p className="add-first">Deliver to</p>
                    <div className="add-icon">
                        <i className="fa-solid fa-location-crosshairs"></i>
                        <p className="add-second">India</p>
                    </div>
                </div>
                <div className="nav-search">
                    <select className="search-select">
                        <option selected="selected">All</option>
                        <option>Arts & Crafts</option>
                        <option>Automotive</option>
                        <option>Baby</option>
                        <option>Beauty & Personal Care</option>
                        <option>Books</option>
                        <option>Boys' Fashion</option>
                        <option>Computers</option>
                        <option>Deals</option>
                        <option>Digital Music</option>
                        <option>Electronics</option>
                        <option>Girls' Fashion</option>
                        <option>Health & Household</option>
                        <option>Home & Kitchen</option>
                        <option>Industrial & Scientific</option>
                        <option>Kindle Store</option>
                        <option>Luggage</option>
                        <option>Men's Fashion</option>
                        <option>Movies & TV</option>
                        <option>Music, CDs & Vinyl</option>
                        <option>Pet Supplies</option>
                        <option>Prime Video</option>
                        <option>Software</option>
                        <option>Sports & Outdoors</option>
                        <option>Tools & Home Improvement</option>
                        <option>Toys & Games</option>
                        <option>Video Games</option>
                        <option>Women's Fashion</option>
                    </select>
                    <input className="search-input" type="text" placeholder="Search...." />
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                </div>
                <div className="nav-right">
                    <div className="nav-language hide-mobile">
                        <i className="fa-solid fa-globe"></i> EN
                        <span><i className="fa-sharp fa-solid fa-circle-chevron-down"></i></span>
                    </div>
                    <div className="nav-signin hide-mobile">
                        <p><span>Hello, sign in</span></p>
                        <p className="nav-second">Account & Lists <i className="fa-sharp fa-solid fa-circle-chevron-down"></i></p>
                    </div>
                    <div className="nav-returns hide-mobile">
                        <p><span>Returns</span></p>
                        <p className="nav-second">& Orders <i className="fa-sharp fa-solid fa-circle-chevron-down"></i></p>
                    </div>
                    <div className="nav-cart">
                    <Link to={"/cart"} class>
                        <i className="fa-solid fa-cart-shopping"></i> Cart
                    </Link>
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
            <div className={`bottom-panel ${isMenuOpen ? 'open' : ''}`}>
                <div className="panel-alt">
                    <i className="fa-solid fa-bars"></i> All
                </div>
                <div className="panel-options">
                    <p>Today's Deals</p>
                    <p>Customer Service</p>
                    <p>Registry</p>
                    <p>Gift Cards</p>
                    <p>Sell</p>
                </div>
                <div className="panel-deals">Shop deals in Electronics</div>
            </div>
        </header>
    );
};

export default Navbar;