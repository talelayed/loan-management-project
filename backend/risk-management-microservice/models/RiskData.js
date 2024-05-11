const mongoose = require('mongoose');

const riskDataSchema = new mongoose.Schema({
  applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'LoanApplication' },
  finalScore: Number,
}, { timestamps: true });

const RiskData = mongoose.model('RiskData', riskDataSchema);

module.exports = RiskData;
