const mongoose = require('mongoose');

const correlationSchema = new mongoose.Schema({
  co: { type: String, required: true }, // Course Outcome
  poCorrelation: [{ type: Number, default: 0 }], // Correlation values for Program Outcomes
  psoCorrelation: [{ type: Number, default: 0 }] // Correlation values for Program Specific Outcomes
});

module.exports = mongoose.model('Correlation', correlationSchema);
