// ClaimIntimationPage.js

import React, { useState } from 'react';
import './claimintimation.css';

const ClaimIntimationPage = () => {
  const [policyNumber, setPolicyNumber] = useState('');
  const [claimType, setClaimType] = useState('Health');
  const [claimDescription, setClaimDescription] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Replace this function with your logic to submit the claim intimation
    console.log('Policy Number:', policyNumber);
    console.log('Claim Type:', claimType);
    console.log('Claim Description:', claimDescription);
    // Add API call or other actions to submit the claim intimation
  };

  return (
    <div className="claim-intimation-page">
      <h2>Claim Intimation</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="policyNumber">Policy Number:</label>
          <input
            type="text"
            id="policyNumber"
            value={policyNumber}
            onChange={(e) => setPolicyNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="claimType">Claim Type:</label>
          <select
            id="claimType"
            value={claimType}
            onChange={(e) => setClaimType(e.target.value)}
            required
          >
            <option value="Health">Health</option>
            <option value="Auto">Auto</option>
            <option value="Home">Home</option>
            {/* Add more claim types as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="claimDescription">Claim Description:</label>
          <textarea
            id="claimDescription"
            value={claimDescription}
            onChange={(e) => setClaimDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit Claim</button>
        </div>
      </form>
    </div>
  );
};

export default ClaimIntimationPage;
