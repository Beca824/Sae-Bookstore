import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import AddBooks from './components/AddBooks';
import Cart from './components/Cart';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Header content here */}
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/add-book" element={<AddBooks books={books} setBooks={setBooks}/>}/>
          <Route path="/cart" element={<Cart books={books} setBooks={setBooks} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
