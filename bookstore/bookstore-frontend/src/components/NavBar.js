import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar () {
  return (
    <nav className="navbar">
      <Link to="/about" className="nav-button">About</Link>
      <Link to="/contact" className="nav-button">Contact</Link>
      <Link to="/addbook" className="nav-button">Add Book</Link>
      <Link to="/books" className="nav-button">Books</Link>
      <Link to="/cart" className="nav-button">Cart</Link>
    </nav>
  );
};

export default NavBar;
