
CREATE TABLE IF NOT EXISTS insurance_info (
    PatientID INTEGER PRIMARY KEY,
    InsuranceProvider TEXT NOT NULL,
    PolicyNumber TEXT NOT NULL,
    OtherDetails TEXT
);

