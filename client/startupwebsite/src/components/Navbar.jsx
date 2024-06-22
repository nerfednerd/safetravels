import React from 'react';
import './Navbarstyles.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">savemytrip.com</h1>
      <ul className="navbar-list">
        <li className="navbar-item">
          <i className="fa-solid fa-house"></i><Link to='/'>Home</Link> 
        </li>
        <li className="navbar-item">
        <i class="fa-solid fa-eject"></i> <Link to='/aboutus'>About Us</Link>
        </li>
        <li className="navbar-item">
        <i class="fa-solid fa-compact-disc"></i> <Link to='/services'>Services</Link>
        </li>
        <li className="navbar-item">
        <i class="fa-solid fa-address-card"></i> <Link to="/contactus">Contact Us</Link>
        </li>
        <li>
          <Link to="/plannow">
          <button className="plan-now-button">Plan Now</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
