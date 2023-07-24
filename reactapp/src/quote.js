// src/components/QuoteForm.js

import React from 'react';
import './quote.css';
import { useNavigate } from 'react-router-dom';

const QuoteForm = () => {
    const navigate = useNavigate();
    const getMyQuote = (e) => {
        e.preventDefault()
        navigate("/login")
    }
  return (
    <form className="quote-form" onSubmit={getMyQuote}>
      <h2>Get a Quote</h2>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" required />
      </div>
     
      <button type="submit">Get My Quote</button>
    </form>
  );
};

export default QuoteForm;
