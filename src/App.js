import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import Alert from './components/Alert';
import './App.css';

const App = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);

  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000); // Hide alert after 3 seconds
  };

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert message={alertMessage} visible={alertVisible} />
        <Routes>
          <Route path="/" element={<HomePage showAlert={showAlert} />} exact />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:productId" element={<ProductPage showAlert={showAlert} />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
