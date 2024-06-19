// Footer.js

import React from 'react';
import './Footerstyles.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <h4>About SaveMyTrip</h4>
          <p>SaveMyTrip.com is your ultimate travel companion, ensuring safe and enjoyable travels across India. </p>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <p><i className="fa-solid fa-map-marker-alt"></i> Rohini Sec-16, Delhi, India</p>
          <p><i className="fa-solid fa-phone"></i> +91 7023643540</p>
          <p><i className="fa-solid fa-envelope"></i> info@savemytrip.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SaveMyTrip. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
