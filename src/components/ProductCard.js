import React from 'react';
import './ProductCard.css'; // We'll add the styles for the card in this file
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            {product.isBestSeller && <span className="best-seller">Best Seller</span>}
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">
                    {product.description}
                </p>
                <div className="product-details">
                    <span className="product-skin">{product.skinType}</span>
                    <span className="product-pack">{product.packSize}</span>
                </div>
                <div className="product-rating">
                    <span className="stars">★★★★☆</span>
                    <span className="rating-count">({product.reviewsCount})</span>
                    <span className="bought-count">{product.boughtCount} bought in past month</span>
                </div>
                <div className="product-price">
                    <span className="current-price">{product.currentPrice}</span>
                    {product.oldPrice && (
                        <span className="old-price">List: {product.oldPrice}</span>
                    )}
                    {product.coupon && <span className="coupon">Save {product.coupon}</span>}
                </div>
                <p className="seller-info">Sold by {product.seller}</p>
            </div>
            <Link to={"/cart"}>
            <button className="add-to-cart-btn">Add to cart</button>   
            </Link>
        </div>
    );
};

export default ProductCard;
