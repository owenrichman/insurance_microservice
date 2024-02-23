# Patient Insurance Information Microservice

## Introduction
This microservice manages patient insurance information, enabling operations to update and retrieve insurance details for patients, thus facilitating seamless integration with healthcare systems.

## How to Use This Microservice

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

UML Diagram: 
