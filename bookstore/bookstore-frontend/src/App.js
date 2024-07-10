import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import AddBook from './components/AddBook';
import Cart from './components/Cart';
import Books from './components/Books';
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
          <Route path="/add-book" element={<AddBook Books={Books} />}/>
          <Route path="/cart" element={<Cart Books={Books}  />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
