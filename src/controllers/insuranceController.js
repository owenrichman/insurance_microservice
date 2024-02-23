const db = require('../db/dbConfig');

const insuranceController = {
  updateInsuranceData: (req, res) => {
    const { patientID, insuranceProvider, policyNumber, otherDetails } = req.body;
    const query = `INSERT INTO insurance_info (PatientID, InsuranceProvider, PolicyNumber, OtherDetails)
                   VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE
                   InsuranceProvider = ?, PolicyNumber = ?, OtherDetails = ?`;

    db.query(query, [patientID, insuranceProvider, policyNumber, otherDetails, insuranceProvider, policyNumber, otherDetails], (error, results) => {
      if (error) {
        res.status(500).send({ message: "Database operation failed", error });
      } else {
        res.send({ message: "Insurance data updated successfully." });
      }
    });
  },

  getInsuranceData: (req, res) => {
    const patientID = req.params.patientid;
    const query = `SELECT * FROM insurance_info WHERE PatientID = ?`;

    db.query(query, [patientID], (error, results) => {
      if (error) {
        res.status(500).send({ message: "Database operation failed", error });
      } else {
        res.json(results);
      }
    });
  }
};

module.exports = insuranceController;
