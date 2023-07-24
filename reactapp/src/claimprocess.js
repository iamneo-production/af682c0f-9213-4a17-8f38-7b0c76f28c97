// src/components/ClaimProcess.js

import React, { useState } from 'react';
import './claimprocess.css';  

const ClaimProcess = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="claim-form">
      <h2>File a Claim</h2>
      {currentStep === 1 && (
        <div className="form-step">
          <h3>Personal Information</h3>
          <p>At Star Health and Allied Insurance, we understand that health emergencies can be a stressful time for you and your loved ones. That’s why we are dedicated to making the insurance claim process worry-free for you. Our in-house claim settlement team works efficiently to process and settle claims promptly, with a track record of settling over Rs. Four crores every hour. We also offer cashless treatment facilities across our extensive network of over 14,000 hospitals, so you can focus on your health without worrying about financial hardships.
          </p>
          {/* Add personal information form fields here */}
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {currentStep === 2 && (
        <div className="form-step">
          <h3>Policy Coverage Details</h3>
          <p>We do not cover the expenses for treatment in hospitals or by medical practitioners or providers that are excluded and listed on the company website or notified to the policyholders. It is important to note that only expenses up to the stabilization stage are payable in case of life-threatening situations or after an accident, but the complete claim will not be covered. Click here to check the list of excluded service provider.

          In the event that you are admitted to a Non-network Hospital (which are not listed here), kindly settle the charges directly at the hospital. Afterwards, please submit the complete set of original documents to us. We offer you several options for submitting the claim documents: you can hand them over to our nearest office or advisor, utilize our Customer Portal or Customer App to upload the documents, or alternatively, send the full set via postal mail to our address.          
          </p>
          {/* Add incident details form fields here */}
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {currentStep === 3 && (
        <div className="form-step">
          <h3>Emergency Admission</h3>
          <p>In case of an emergency requiring immediate hospitalization, Star Health must be intimated within 24 hours of the illness / hospitalization with the patient’s Star Health ID number or policy number for easy reference. Intimation can be given either through contacting us at 1800 425 2255 / 1800 102 4477 approach the nearest office of Star Health or e-mail us at support@starhealth.in.


          </p>
          {/* Add documentation upload fields here */}
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {currentStep === 4 && (
        <div className="form-step">
          <h3>Review and Submit</h3>
          {/* Add review and submit details here */}
          <button onClick={prevStep}>Previous</button>
          <button type="submit">Submit Claim</button>
        </div>
      )}
    </div>
  );
};

export default ClaimProcess;
