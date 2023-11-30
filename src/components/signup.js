import './signup.css';
import React, { useState } from 'react';
import axios from "axios";
import { Form, Input, Button, FormGroup, Label } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate()
  // State variables for form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Handler functions for form input changes
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:5000/register',
      headers: { 'Content-Type': 'application/json' },
      data: {
        fullname: fullName,
        username: fullName,
        email: email,
        password: password,
        role: 'teacher'
      }
    };

    axios.request(options).then(function (response) {
      localStorage.setItem('userId', JSON.stringify(response.data.user.userId))
      navigate('/my-exam-page')
      
    }).catch(function (error) {
      console.error(error);
      alert("Registration Error. Try again with correct details")
    });

  };

  return (
    <div className="App">
      <div className='signuppage'>
        <div className='container-page col-md-6 col-sm-12'>
          <header className="App-header">
            <h1 className='signup-header'>Sign Up</h1>
            <Form className='form' onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="fullName">Full Name</Label>
                <Input
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={handleFullNameChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button color='success' type="submit">Submit</Button>
            </Form>
          </header>
        </div>
      </div>
    </div>
  );
}

export default Signup;
