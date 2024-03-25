import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ product }) => {
  return (
    <div className="product-card" key={product.id}>
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price}</p>
        <Link to={`/product/${product.id}`} className="view-button">View Details</Link>
      </div>
    </div>
  );
};

export default Card;
