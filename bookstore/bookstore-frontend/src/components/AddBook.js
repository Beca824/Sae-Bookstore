import React from 'react';
import './AddBook.css';

const books = [
  { title: 'Save Us', author:'Kasten Mona', genre: 'Romance',  img_url:'https://i.pinimg.com/236x/22/5d/4a/225d4afe722cc5e08d73552cb9023319.jpg'},
  { title: 'Black Hearts', author:'Jenna Wood', img_url:'https://i.pinimg.com/236x/88/02/c1/8802c1136de95d161676502a1bd40ede.jpg'},
  { title: 'The Truth Lies Here', author: 'Lindsey Klingele', img_url: 'https://i.pinimg.com/236x/fa/e3/ae/fae3ae68345bd83b7c590d6c4318c58b.jpg'},
  { title: 'Save Me', author: 'Mona Kasten', img_url: 'https://i.pinimg.com/236x/22/5d/4a/225d4afe722cc5e08d73552cb9023319.jpg'},
  { title: 'The Originals', author: 'L.J.Smith', img_url: 'https://i.pinimg.com/236x/d9/41/35/d94135ee6f3d27b96165b07e88ee666e.jpg'},
  { title: 'The Vampire Diaries', author: 'L.J.Smith', img_url: 'https://i.pinimg.com/236x/fd/c4/fb/fdc4fbbd1626da54ead3dde43b044150.jpg'},
  { title: 'My Hero Academia', author: 'Kohei Horikoshi', img_url:'https://i.pinimg.com/236x/85/95/15/8595152d43afb9c5a28de77c8ed35478.jpg'},
  { title: 'Dragon Ball Z', author: 'Akira Toriyama', img_url:'https://i.pinimg.com/236x/40/49/a5/4049a58b50ae3f3072adea311fe57733.jpg'},
  { title: 'Kung Fu Panda', author: 'Nina Chen', img_url: 'https://i.pinimg.com/236x/35/07/9f/35079f63b52f7be41f737d2e3b30845f.jpg'},
  { title: 'Zootopia', author: 'Walt Disney Animation Studios', img_url: 'https://i.pinimg.com/236x/f3/64/b1/f364b10ec679accf9799c38fb650f380.jpg'}
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
