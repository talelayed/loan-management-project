const mongoose = require('mongoose');

const creditAgreementSchema = new mongoose.Schema({
  applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'LoanApplication' },
  creditAgreementId: Number,
  amortizationTableId: Number
}, { timestamps: true });

const CreditAgreement = mongoose.model('CreditAgreement', creditAgreementSchema);

module.exports = CreditAgreement;
