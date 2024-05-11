const express = require('express');
const router = express.Router();

const loanApplicationController = require('../controllers/loanApplicationController');

router.post('/submit-application', loanApplicationController.submitApplication);

module.exports = router;
