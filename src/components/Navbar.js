import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { selectCartCount } from '../store/selectors';
import './Navbar.css';

const Navbar = () => {
  const cartCount = useSelector(selectCartCount);

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Online Store</h1>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link to="/cart" className="navbar-link">
          <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
