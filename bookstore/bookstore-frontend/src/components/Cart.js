import React, { useState, useEffect } from 'react';
import { fetchCart } from '../api';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart().then(response => setCart(response.data));
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>{item.book.title} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
