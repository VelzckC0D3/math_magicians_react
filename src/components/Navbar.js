import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navContainer">
    <ul className="navUl">
      <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
      <li><NavLink to="/calculator" activeClassName="active">Calculator</NavLink></li>
      <li><NavLink to="/quotes" activeClassName="active">Quotes</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
