import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { InfinitySpin } from 'react-loader-spinner';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="produc">
      {!product ? (
        <div className="spin">
          <InfinitySpin />
        </div>
      ) : (
        <>
          <div className="img">
            <img
              className="product-image"
              src={product.thumbnail}
              alt={product.title}
            />
            <div className="imgs">
              {product.images?.map((img) => (
                <img key={img} src={img} alt={product.title} />
              ))}
            </div>
          </div>
          <hr />

          <div className="info">
            <h1 className="info-name">Name: {product.title}</h1>
            <h1 className="info-brand">Brand: {product.brand}</h1>
            <h2 className="info-Category">Category: {product.category}</h2>
            <h3 className="info-price">Price: ${product.price}</h3>
            <h5 className="info-description">Desc: {product.description}</h5>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;