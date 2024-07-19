import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>Thank you for your purchase!</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Checkout;
