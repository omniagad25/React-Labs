import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import './ProductsList.css';
import { InfinitySpin } from 'react-loader-spinner';

const ProductsList = () => {
  const [products, setProducts] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    

    fetchData();
  }, []);

  return (
    <div className="cont">
      {!products ? (
        <div className="spin">
          <InfinitySpin />
        </div>
      ) : (
        products.map((product) => <Card product={product} key={product.id} />)
      )}
    </div>
  );
};

export default ProductsList;