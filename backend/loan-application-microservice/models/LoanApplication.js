const mongoose = require('mongoose');

const loanApplicationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  number: Number,
  cin: Number,
  address: String,
  salary: Number,
  loanAmount: Number 
}, { timestamps: true });

const LoanApplication = mongoose.model('LoanApplication', loanApplicationSchema);

module.exports = LoanApplication;
