from flask import Flask, request, jsonify, render_template
import sqlite3
from db import get_db, init_db

app = Flask(__name__)

# Initialize the database
init_db(app)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/api/insurancedata', methods=['POST'])
def update_insurance_data():
    data = request.form
    db = get_db()
    db.execute('INSERT INTO insurance_info (PatientID, InsuranceProvider, PolicyNumber, OtherDetails) VALUES (?, ?, ?, ?) ON CONFLICT(PatientID) DO UPDATE SET InsuranceProvider = excluded.InsuranceProvider, PolicyNumber = excluded.PolicyNumber, OtherDetails = excluded.OtherDetails',
               [data['patientID'], data['insuranceProvider'], data['policyNumber'], data['otherDetails']])
    db.commit()
    return jsonify({'message': 'Insurance data updated successfully.'})

@app.route('/api/insurancedata/<patientid>', methods=['GET'])
def get_insurance_data(patientid):
    db = get_db()
    cur = db.execute('SELECT * FROM insurance_info WHERE PatientID = ?', [patientid])
    rv = cur.fetchall()
    return jsonify(rv)

if __name__ == '__main__':
    app.run(debug=True)
