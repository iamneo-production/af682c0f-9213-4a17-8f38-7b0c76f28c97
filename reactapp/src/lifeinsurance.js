// LifeInsuranceForm.js

import React, { useState } from 'react';
import './lifeinsurance.css';

const LifeInsuranceForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [occupation, setOccupation] = useState('');
  const [coverageAmount, setCoverageAmount] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Replace this function with your logic to submit the life insurance form
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Occupation:', occupation);
    console.log('Coverage Amount:', coverageAmount);
    // Add API call or other actions to submit the life insurance form
  };

  return (
    <div className="life-insurance-form">
      <h2>Life Insurance Application</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
              Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation:</label>
          <input
            type="text"
            id="occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverageAmount">Coverage Amount:</label>
          <input
            type="text"
            id="coverageAmount"
            value={coverageAmount}
            onChange={(e) => setCoverageAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit Application</button>
        </div>
      </form>
    </div>
  );
};

export default LifeInsuranceForm;
