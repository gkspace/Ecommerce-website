import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions';
import './Cart.css';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = 1; // Initialize quantities to 1 for each item
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, quantity) => {
    if (quantity <= 0) return; // Prevent setting quantity to zero or negative
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: quantity
    }));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + item.price * quantities[item.id];
    }, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-actions">
                  <input
                    type="number"
                    min="1"
                    value={quantities[item.id]}
                    onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="cart-item-quantity"
                  />
                  <p className="cart-item-total">${(item.price * quantities[item.id]).toFixed(2)}</p>
                  <button
                    className="cart-item-remove"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total Price: ${getTotalPrice()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
