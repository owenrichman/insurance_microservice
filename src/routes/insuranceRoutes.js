const express = require('express');
const router = express.Router();
const insuranceController = require('../controllers/insuranceController');

// Route for updating patient insurance information
router.post('/insurancedata', insuranceController.updateInsuranceData);

// Route for fetching a patient's insurance information
router.get('/insurancedata/:patientid', insuranceController.getInsuranceData);

module.exports = router;
