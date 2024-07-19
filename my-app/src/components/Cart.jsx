import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map(product => (
        <div key={product.id} className="cart-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      ))}
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;
