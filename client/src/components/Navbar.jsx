import React, { useState } from 'react';
import './Navbarstyles.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">SafeTravIndia</h1>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        <ul className="navbar-list">
          <li className="navbar-item">
            <i className="fa-solid fa-house"></i>
            <Link to='/'>Home</Link>
          </li>
          <li className="navbar-item">
            <i className="fa-solid fa-eject"></i>
            <Link to='/aboutus'>About Us</Link>
          </li>
          <li className="navbar-item">
            <i className="fa-solid fa-compact-disc"></i>
            <Link to='/services'>Services</Link>
          </li>
          {/* <li className="navbar-item">
            <i className="fa-solid fa-address-card"></i>
            <Link to="/contactus">Contact Us</Link>
          </li> */}
          <li>
            <Link to="/plannow">
              <button className="plan-now-button">Plan Now</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
