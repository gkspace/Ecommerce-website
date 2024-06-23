import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';
import './HomePage.css';

const HomePage = ({ showAlert }) => {
  const products = useSelector(state => state.products);

  return (
    <div className="home-page">
      {products.map(product => (
        <ProductItem key={product.id} product={product} showAlert={showAlert} />
      ))}
    </div>
  );
};

export default HomePage;
