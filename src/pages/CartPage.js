import React from 'react';
import Cart from '../components/Cart';
import './CartPage.css';

const CartPage = () => {
  const handleProceedToBuy = () => {
    // Implement the logic for proceeding to buy
    console.log('Proceed to buy clicked');
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Cart Details</h1>
      <Cart />
      <button className="proceed-to-buy-button" onClick={handleProceedToBuy}>
        Proceed to Buy
      </button>
    </div>
  );
};

export default CartPage;
