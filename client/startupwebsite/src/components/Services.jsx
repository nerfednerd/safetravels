// import React from 'react';
import './Servicesstyles.css';

export default function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-header">
        <h2 className="feature-title">POWERED BY AI</h2>
        <h1 className="feature-main-title">The only application you'll ever need!</h1>
        <p className="feature-subtitle">
          Say goodbye to the stress of planning and hello to personalized recommendations,
          efficient itineraries, and seamless dining experiences.
        </p>
      </div>
      <div className="feature-cards">
        <div className="feature-card">
          <img src="/src/assets/sos.jpeg" alt="Optimal Route Planning" />
          <h3>Safe Route Planning</h3>
          <p>
            Our AI algorithms analyze your preferences to craft the most efficient and safe route.
          </p>
        </div>
        <div className="feature-card">
          <img src="/src/assets/sos.jpeg" alt="Personalize Your Adventure" />
          <h3>Emergency Assistance</h3>
          <p>
            One tap SOS call and flag messages to all your loved ones and the concerned authorities.
          </p>
        </div>
        <div className="feature-card">
          <img src="/src/assets/sos.jpeg" alt="Local Cuisine Recommendations" />
          <h3>Security Ratings</h3>
          <p>
            Based on the metadata we will provide you with Security ratings of various places, to help you make sound decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
