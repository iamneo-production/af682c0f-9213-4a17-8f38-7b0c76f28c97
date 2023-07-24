// InsuranceClaimStatusPage.js

import React from 'react';
import './claimstatus.css';

const InsuranceClaimStatusPage = () => {
  // Replace these sample values with your data or fetch from an API
  const claimNumber = '12345';
  const status = 'In Progress';
  const amount = '$500';
  const policyHolder = 'John Doe';
  const contactNumber = '+1 (123) 456-7890';
  const details = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...';

  return (
    <div className="claim-status-page">
      <div className="claim-header">
        <h2>Insurance Claim Status</h2>
        <p>Claim Number: {claimNumber}</p>
        <p>Status: {status}</p>
      </div>
      <div className="claim-details">
        <div className="left-column">
          <h3>Claim Details</h3>
          <p>
            <strong>Claim Amount:</strong> {amount}
          </p>
          <p>
            <strong>Policy Holder:</strong> {policyHolder}
          </p>
          <p>
            <strong>Contact Number:</strong> {contactNumber}
          </p>
        </div>
        <div className="right-column">
          <h3>Claim Description</h3>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default InsuranceClaimStatusPage;
