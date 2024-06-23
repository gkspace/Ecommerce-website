import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/actions';
import './ProductPage.css';

const ProductPage = ({ showAlert }) => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const product = products.find(prod => prod.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    showAlert(`${product.name} has been added to your cart`);
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <p className="product-rating">Rating: {product.rating} / 5</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
