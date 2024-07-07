import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../api';
import './Books.css';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(response => setBooks(response.data));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
