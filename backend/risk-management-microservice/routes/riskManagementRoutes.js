const express = require('express');
const router = express.Router();

const riskManagementController = require('../controllers/riskManagementController');

router.post('/process-loan-application', riskManagementController.processLoanApplication);

module.exports = router;
