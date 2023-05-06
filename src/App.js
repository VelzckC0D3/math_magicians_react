import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/calculator" Component={Calculator} />
          <Route path="/quotes" Component={Quotes} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
