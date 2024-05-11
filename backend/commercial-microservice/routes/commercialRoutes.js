const express = require('express');
const router = express.Router();

const commercialController = require('../controllers/commercialController');

router.post('/process-loan-application', commercialController.processLoanApplication);

module.exports = router;
