const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  days: { type: Number, required: true },
  interests: { type: String },
  kids: { type: Number, default: 0 },
  adults: { type: Number, default: 0 },
  seniors: { type: Number, default: 0 }
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;