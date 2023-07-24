// src/components/HomePage.js

import React from 'react';
import './mainhomepage.css';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const getQuote = () => {
    navigate("quote")
  }
  return (
    <div className="container">
      {/* Header section */}
      <div className="header">
        <h1>Welcome to Star Insurance</h1>
        <p>Your trusted partner for insurance services.</p>
      </div>

      {/* Features section */}
      <div className="features">
        <div className="feature">
          <h2>Comprehensive Coverage</h2>
          <p>Protect what matters most with our wide range of insurance plans.</p>
        </div>
        <div className="feature">
          <h2>24/7 Support</h2>
          <p>Our dedicated support team is available round the clock to assist you.</p>
        </div>
        <div className="feature">
          <h2>Easy Claims</h2>
          <p>Simple and hassle-free claims process to get you back on track.</p>
        </div>
      </div>

      {/* Call to Action section */}
      <div className="cta">
        <h2>Get a Free Quote Today!</h2>
        <p>Secure your future with the best insurance plans for you and your family.</p>
        <button onClick={getQuote} >Get a Quote</button>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
