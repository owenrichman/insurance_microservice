# Patient Insurance Information Microservice

## Introduction
This microservice manages patient insurance information, enabling operations to update and retrieve insurance details for patients.

## How to Use This Microservice

### Webpage Interface for Data Entry
To enter or update a patient's insurance information, navigate to the service's homepage. Here, you'll find a straightforward form where you can input the patient's ID, insurance provider, policy number, and coverage details. Upon submission, the form data is sent to the microservice for processing and storage. Below the update form there is a request form to search for insurance information as well.

# API Endpoints

**Update Insurance Information**

- **Endpoint**: `POST /api/insurancedata`
- **Description**: Updates a patient's insurance information.
- **How to Use**: Send a POST request to this endpoint with the patientID, insurance provider, policy number, and coverage details in the body of the request.


**Retrieve Insurance Information**

- **Endpoint**: `GET /api/insurancedata/{patientID}`
- **Description**: Retrieves insurance information for a specific patient.
- **How to Use**: Send a GET request to this endpoint with the patientID to recieve their insurance details. 

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
1. Clone the repository to your local enviornment
2. Install required dependecies - ensure Flask is installed if not then run "pip install Flask"
3. Start the service by launching Flask app:
   - Set the FLASK_APP enviornment variable to point you main application file, ex: (FLASK_APP=app.py) to ensure "flask run" will work
   - Start server by executing "flask run", or directly with "python -m flask run" this will launch http://localhost:5000 and the API endpoints will be available as described above

# UML Diagram:
![UML Diagram]([https://github.com/owenrichman/insurance_microservice/blob/master/Microservice.jpg?raw=true](https://github.com/owenrichman/insurance_microservice/blob/master/FlaskMicroUML.jpg)https://github.com/owenrichman/insurance_microservice/blob/master/
