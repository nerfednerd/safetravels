import React from 'react';
import './EmailSection.css';

export default function EmailSection() {
  return (
    <section className="email-section">
      <h2 className="email-title">Enter Your Email to Receive Your Personalized Travel Itinerary for Free!</h2>
      <form className="email-form">
        <input type="email" className="email-input" placeholder="Enter your email" required />
        <button type="submit" className="email-button">Submit</button>
      </form>
    </section>
  );
}

