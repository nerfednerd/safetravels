import React from 'react';
import Navbar from './Navbar';
import './Headerstyles.css';
import HeaderImg1 from '/src/assets/OIG1.jpeg'
import HeaderImg2 from '/src/assets/OIG2.jpeg'

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">SafeTravIndia</h1>
          <p className="header-subtitle">Ensuring Safe Travels in India</p>
        </div>
        <div className="header-image">
          <img src={HeaderImg1} alt="Travel" style={{marginRight:"10px"}} />
          <img src={HeaderImg2} alt="Travel" />
        </div>
      </div>
    </header>
  );
}
