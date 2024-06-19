import React from 'react';
import Navbar from './Navbar';
import './Headerstyles.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">savemytrip.com</h1>
          <p className="header-subtitle">Ensuring Safe Travels in India</p>
        </div>
        <div className="header-image">
          <img src="/src/assets/OIG1.jpeg" alt="Travel" style={{marginRight:"10px"}} />
          <img src="/src/assets/OIG2.jpeg" alt="Travel" />
        </div>
      </div>
    </header>
  );
}
