import React from 'react';
import Navbar from './Navbar';
import './Headerstyles.css';
import HeaderImg1 from '/src/assets/OIG1.jpeg';
import HeaderImg2 from '/src/assets/OIG2.jpeg';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">SafeTravIndia</h1>
          <p className="header-subtitle">Ensuring Safe Travels in India</p>
          <p className="header-description">
            "India isn't a country; it's a whole continent in itself.
            As you embark on this adventurous journey, wouldn't it be nice to have something to help you navigate the vast array of cultures, native customs, regional languages, and the hiccups of travelling in such a diverse nation? Why?
            To make your journey smooth, fulfilling, and above all, safe."
          </p>
        </div>
        <div className="header-image">
          <img src={HeaderImg1} alt="Travel"  />
          {/* <img src={HeaderImg2} alt="Travel" /> */}
        </div>
      </div>
    </header>
  );
}
