import './otp';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FormGroup, Input, Button, Container } from 'reactstrap';

function OTP() {
  const [verificationCode, setVerificationCode] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setVerificationCode(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle verification code submission here
    console.log('Verification Code Submitted:', verificationCode);
  };

  return (
    <div className="App">
      <Container className='container'>
        <header className="App-header">
            <h1 className='text'><b>Verify Details</b></h1>
            <br /><br />
            <p>We've sent a verification code to your email.</p>
            <p>Please verify it to reset your password</p>
            <br />
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <label>Enter Verification Code</label>
                  <Input
                    type="text"
                    value={verificationCode}
                    onChange={handleChange}
                    placeholder="123456"
                  />
              </FormGroup>
                <Link to="/new-password" className='link-text'>
                  <Button color="success" type="submit">Submit</Button>
                </Link>
            </form>
        </header>
        </Container>
    </div>
  );
}

export default OTP;
