import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navContainer">
    <h1 className="navTitle">Velzck&#39;s Math Magicians</h1>
    <ul className="navUl">
      <li><NavLink to="/" exact="true" activeclassname="active">Home</NavLink></li>
      <li><NavLink to="/calculator" activeclassname="active">Calculator</NavLink></li>
      <li><NavLink to="/quotes" activeclassname="active">Quotes</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
