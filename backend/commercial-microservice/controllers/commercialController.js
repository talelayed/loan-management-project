const CommercialData = require('../models/CommercialData');

exports.processLoanApplication = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: 'Loan application processed successfully.' });
  } catch (error) {
    console.error('Error processing loan application:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
