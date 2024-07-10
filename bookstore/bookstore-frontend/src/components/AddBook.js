import React from 'react';
import './AddBook.css';

const books = [
  { title: 'Save Us', author:'Kasten Mona', img_url:''},
  { title: 'Your Loss', author:'Riley Lorde', img_url:''},
  { title: 'My Power', author: 'Jade Polar', img_url: ''},
  { title: 'Save Me', author: 'Mona Kasten', img_url: ''},
  { title: 'The Originals', author: 'Rebecca Stain', img_url: ''},
  { title: 'The Vampire Diaries', author: 'Niklaus Mikaelson', img_url: ''},
];

function AddBook() {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <div key={index} className="book-item">
          <div className="book-placeholder"></div> {/* Placeholder div */}
          <img src={book.img_url} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default AddBook;
