const express = require('express');
const c_route = express.Router();
const CorrelationModel = require('../models/correlation');

// Route for calculating and saving correlation values
c_route.post('/calculateCorrelation', async (req, res) => {
  try {
    const { data } = req.body; // Assuming the frontend sends the data needed for correlation calculation
    
    // Perform correlation calculation logic here
    // Save the correlation values to the database using CorrelationModel.create() or CorrelationModel.updateOne()
    
    // Return success response
    res.status(200).json({ message: 'Correlation values calculated and saved successfully' });
  } catch (error) {
    console.error('Error calculating and saving correlation values:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for fetching correlation data
c_route.get('/correlationData', async (req, res) => {
  try {
    // Fetch correlation data from the database
    const correlationData = await CorrelationModel.find();
    res.json(correlationData);
  } catch (error) {
    console.error('Error fetching correlation data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = c_route;
