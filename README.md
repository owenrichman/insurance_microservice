# Patient Insurance Information Microservice

## Introduction
This microservice manages patient insurance information, enabling operations to update and retrieve insurance details for patients, thus facilitating seamless integration with healthcare systems.

## How to Use This Microservice

### Webpage Interface for Data Entry
To enter or update a patient's insurance information, navigate to the service's homepage. Here, you'll find a straightforward form where you can input the patient's ID, insurance provider, policy number, and coverage details. Upon submission, the form data is sent to the microservice for processing and storage. 

# API Endpoints

**Update Insurance Information**

- **Endpoint**: `POST /api/insurancedata`
- **Description**: Updates a patient's insurance information.
- **Example Request**:
  ```bash
  curl -X POST http://localhost:3000/api/insurancedata \
  -H "Content-Type: application/json" \
  -d '{
      "patientID": "patient123",
      "insuranceDetails": {
          "provider": "ExampleInsuranceProvider",
          "policyNumber": "P123456789",
          "coverageDetails": "Full coverage"
      }
  }'

**Retrieve Insurance Information**

- **Endpoint**: `GET /api/insurancedata/{patientID}`
- **Description**: Retrieves insurance information for a specific patient.
- **Example Request**:
  ```bash
  curl http://localhost:3000/api/insurancedata/patient123

**Responses**

- On Update: Returns a message indicating the update was successful.

  ```json
  { "message": "Insurance information updated successfully." }

- On Retrieve: Returns the requested insurance details.
  ```bash
  {
    "patientID": "patient123",
    "insuranceDetails": {
        "provider": "ExampleInsuranceProvider",
        "policyNumber": "P123456789",
        "coverageDetails": "Full coverage"
    }
  }

# Getting Started
To get started with using the Patient Insurance Information Microservice follow the following steps:
1. Clone the repository to your local enviornment/machine
2. Install required dependecies by running npm install
3. Start the service by executing npm start. Ensure your package.json file includes the script to enable this:
   ```json
   "scripts": {
    "start": "node app.js"
    }
This should launch the webpage interface on http://localhost:3000 and the API endpoints will be accessible as described above. 

# UML Diagram: 
