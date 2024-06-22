import React, { useState } from 'react';
import axios from 'axios';
import './Tripformstyles.css';

export default function TripForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    origin: '',
    destination: '',
    days: '',
    interests: '',
    kids: 0,
    adults: 0,
    seniors: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseInt(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/trips', formData);
      if (response.status === 201) {
        console.log('Trip saved successfully!', response.data);
        alert('Trip saved successfully!');
        // Optionally, you can reset the form data here
        setFormData({
          name: '',
          age: '',
          origin: '',
          destination: '',
          days: '',
          interests: '',
          kids: 0,
          adults: 0,
          seniors: 0,
        });
      } else {
        console.error('Unexpected response:', response);
        alert('Unexpected response while saving the trip!');
      }
    } catch (error) {
      console.error('There was an error saving the trip!', error);
      alert('There was an error saving the trip!');
    }
  };

  const totalPeople = formData.kids + formData.adults + formData.seniors;

  return (
    <section className="trip-form-section">
      <h2 className="trip-form-title">Plan Your Trip</h2>
      <form className="trip-form" onSubmit={handleSubmit}>
        <div className="form-group-horizontal">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group-horizontal">
          <div className="form-group">
            <label htmlFor="origin">From</label>
            <input type="text" id="origin" name="origin" value={formData.origin} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="destination">To</label>
            <input type="text" id="destination" name="destination" value={formData.destination} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group-horizontal">
          <div className="form-group">
            <label htmlFor="days">How many days</label>
            <input type="number" id="days" name="days" value={formData.days} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="interests">Interests</label>
            <input type="text" id="interests" name="interests" value={formData.interests} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group-horizontal">
          <div className="form-group-slider">
            <label htmlFor="kids">Number of Kids</label>
            <input type="range" id="kids" name="kids" value={formData.kids} onChange={handleSliderChange} min="0" max="10" />
            <span>{formData.kids}</span>
          </div>
          <div className="form-group-slider">
            <label htmlFor="adults">Number of Adults</label>
            <input type="range" id="adults" name="adults" value={formData.adults} onChange={handleSliderChange} min="0" max="10" />
            <span>{formData.adults}</span>
          </div>
          <div className="form-group-slider">
            <label htmlFor="seniors">Number of Seniors</label>
            <input type="range" id="seniors" name="seniors" value={formData.seniors} onChange={handleSliderChange} min="0" max="10" />
            <span>{formData.seniors}</span>
          </div>
        </div>
        <div className="form-group-total">
          <label>Total People:</label>
          <span>{totalPeople}</span>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
}
