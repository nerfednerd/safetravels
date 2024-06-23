// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors
const Trip = require('./models/trip.js'); 
dotenv.config(); 

const app = express();
const PORT = 3001;

mongoose.connect(process.env.MONGO_DB)
    .then(() => {
        console.log("Database is connected!!");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });

app.use(cors()); // Use cors middleware
app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.send("DONE");
});

// Route to handle trip form submission
app.post('/api/trips', async (req, res) => {
    try {
        const trip = new Trip(req.body);
        await trip.save();
        res.status(201).send(trip);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
