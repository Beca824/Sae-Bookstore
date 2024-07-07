import React from 'react';
import './AddBook.css';

const books = [
  { title: 'Save Us', author:'Kasten Mona', image:''},
  { title: 'Your Loss', author:'Riley Lorde', image:''},
  { title: 'My Power', author: 'Jade Polar', image: ''},
  { title: 'Save Me', author: 'Mona Kasten', image: ''},
  { title: 'The Originals', author: 'Rebecca Stain', image: ''},
  { title: 'The Vampire Diaries', author: 'Niklaus Mikaelson', image: ''},
];

function AddBook() {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <div key={index} className="book-item">
          <div className="book-placeholder"></div> {/* Placeholder div */}
          <img src={book.image} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default AddBook;
