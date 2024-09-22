import React from 'react';
import '../App.css'; // Make sure your CSS includes styles for the sidebar

const FilterSidebar = () => {
    return (
        <div className="filter-sidebar">
            <div className="filter-category">
                <h3>Departments</h3>
                <ul>
                    <li><input type="checkbox" /> Beauty & Personal Care</li>
                    <li><input type="checkbox" /> Electronics</li>
                    <li><input type="checkbox" /> Mobiles</li>
                    <li><input type="checkbox" /> Furniture</li>
                    <li><input type="checkbox" /> Toys & Games</li>
                </ul>
            </div>

            <div className="filter-category">
                <h3>Customer Reviews</h3>
                <ul>
                    <li > <b style={{color:"brown"}}>★★★★☆ </b> & Up</li>
                </ul>
            </div>

            <div className="filter-category">
                <h3>Price</h3>
                <ul>
                    <li><input type="radio" name="price" /> Under $25</li>
                    <li><input type="radio" name="price" /> $25 to $50</li>
                    <li><input type="radio" name="price" /> $50 to $100</li>
                    <li><input type="radio" name="price" /> $100 to $200</li>
                    <li><input type="radio" name="price" /> $200 & Above</li>
                </ul>
            </div>

            <div className="filter-category">
                <h3>Brands</h3>
                <ul>
                    <li><input type="checkbox" /> e.l.f.</li>
                    <li><input type="checkbox" /> Maybelline</li>
                    <li><input type="checkbox" /> Nivea</li>
                    <li><input type="checkbox" /> Samsung</li>
                    <li><input type="checkbox" /> Apple</li>
                </ul>
            </div>
        </div>
    );
};

export default FilterSidebar;
