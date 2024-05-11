const express = require('express');
const router = express.Router();

const creditController = require('../controllers/creditController');

router.post('/generate-credit-agreement', creditController.generateCreditAgreement);

module.exports = router;
