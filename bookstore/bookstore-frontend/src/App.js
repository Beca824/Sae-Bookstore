import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AddBook from './components/AddBook';
import Books from './components/Books';
import Cart from './components/Cart';
import './App.css';

function App () {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home Books={Books} />} />
        <Route path="/about" element={<About Books={Books} />} />
        <Route path="/contact" element={<Contact Books={Books} />} />
        <Route path="/addbook" element={<AddBook Books={Books} />}/>
        <Route path="/books" element={<Books Books={Books} />} />
        <Route path="/cart" element={<Cart Books={Books} />}/>
        
      </Routes>
    </Router>
  );
};

export default App;
