import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../store/actions';
import StarRating from './StarRating';
import './ProductItem.css';

const ProductItem = ({ product, showAlert }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleAddToCart = () => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      showAlert('Item already added. Increase quantity from cart.');
    } else {
      dispatch(addToCart(product));
      showAlert(`${product.name} has been added to your cart`);
    }
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">
          {product.name}
        </h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-rating">
          <StarRating rating={product.rating} />
        </div>
        <div className="product-buttons">
          <button 
            className="button"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button 
            className="button view-product-btn"
          >
            <Link to={`/product/${product.id}`} style={{ color: 'white', textDecoration: 'none' }}>View Product</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
