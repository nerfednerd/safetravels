import React from 'react';
import './Navbarstyles.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">savemytrip.com</h1>
      <ul className="navbar-list">
        <li className="navbar-item">
          <i className="fa-solid fa-house"></i> Home
        </li>
        <li className="navbar-item">
          <i className="fa-solid fa-address-card"></i> About Us
        </li>
        <li className="navbar-item">
          <i className="fa-solid fa-concierge-bell"></i> Services
        </li>
        <li>
          <button className="plan-now-button">Plan Now</button>
        </li>
      </ul>
    </nav>
  );
}
