// import React from 'react';
import './Servicesstyles.css';
import ServiceRoute from '/src/assets/route1.jpeg';
import ServiceAssistance from '/src/assets/sos1.jpeg';
import ServiceRatings from '/src/assets/ratings.jpeg';
import Guides from '/src/assets/guide.jpeg';
import ComingSoon from '/src/assets/comingsoon.jpeg';
import ServiceRatings2 from '/src/assets/rate2.jpeg';


export default function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-header">
        <h2 className="feature-title">POWERED BY AI</h2>
        <h1 className="feature-main-title">The ultimate travel assistance and planner app for Incredible India</h1>
        <p className="feature-subtitle">
          Say goodbye to the stress of planning and hello to personalized recommendations,
          efficient itineraries, and seamless dining experiences.
        </p>
      </div>
      <div className="feature-cards">
        <div className="feature-card">
          <img src={ServiceRoute} alt="Optimal Route Planning" />
          <h3>Travel Assistance</h3>
          <p>
          Through our extensive research and deep understanding of local laws, customs, and the challenges faced by international tourists, we are here to assist you every step of the way.
          </p>
        </div>
        <div className="feature-card">
          <img src={ServiceAssistance} alt="Personalize Your Adventure" />
          <h3>Emergency Assistance</h3>
          <p>
          Let's be honest, unpleasant incidents can happen to anyone at any time at any place. We extensively try to make sure you aren't at the wrong place at the wrong time
          </p>
        </div>
        <div className="feature-card">
          <img src={ServiceRatings2} alt="Local Cuisine Recommendations" />
          <h3>Safety Ratings</h3>
          <p>
          We provide safety ratings for various locations in your personalised itinerary and throughout your travel plans, empowering you to make informed decisions about activities and destinations
          </p>
        </div>
        <div className="feature-card">
          <img src={ServiceRatings} alt="Local Cuisine Recommendations" />
          <h3>Safety Focused Itenaries</h3>
          <p>
          Our personalised itineraries are tailored to your travel plans with a strong emphasis on ensuring your safety and comfort throughout the journey. 
          </p>
        </div>
        <div className="feature-card">
          <img src={Guides} alt="Local Cuisine Recommendations" />
          <h3>Independent Guides</h3>
          <p>
          Our personalised itineraries are tailored to your travel plans with a strong emphasis on ensuring your safety and comfort throughout the journey. 
          </p>
        </div>
        <div className="feature-card">
        <img src={ComingSoon} alt="Local Cuisine Recommendations" />
          <h3>Coming Soon</h3>
          <p>
            All of this coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
