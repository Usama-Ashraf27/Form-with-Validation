import React, { useState } from 'react'

const Subscribe = () => {
  const [emailError, setEmailError] = useState('');
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
  
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
      if (!emailPattern.test(newEmail)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    };
    return (
      <div className="mb-3">
      <h4>Subsciption</h4>
        <input
          type="email"
          placeholder="Email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <div className="text-danger">{emailError}</div>}
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
    );
  };
  

export default Subscribe