import React from 'react';
import AddBook from './AddBook';
import './Home.css';

function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>Hope you enjoy!</p>
      <p>Here are some of the books...</p>
      <div>
        <h2>Book List</h2>
        <ul>
          <AddBook />
        </ul>
      </div>
    </div>
  );
}

export default Home;
