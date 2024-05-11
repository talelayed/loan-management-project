const mongoose = require('mongoose');

const commercialDataSchema = new mongoose.Schema({
  applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'LoanApplication' },
  score: Number,
}, { timestamps: true });

const CommercialData = mongoose.model('CommercialData', commercialDataSchema);

module.exports = CommercialData;
