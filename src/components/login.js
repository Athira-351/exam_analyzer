import './login.css';
import axios from "axios";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, FormGroup, Label } from 'reactstrap';

const Login = () => {

  const navigate = useNavigate()
  // State variables for form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  // Handler function to update form data on input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action here, such as sending form data to a server
    console.log('Form data submitted:', formData);

    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:5000/login',
      headers: { 'Content-Type': 'application/json' },
      data: { email: formData.email, password: formData.password }
    };

    axios.request(options).then(function (response) {
      navigate('/my-exam-page')
    }).catch(function (error) {
      console.error(error);
    });

  };

  return (
    <div className="App">
      <div className='loginpage'>
        <div className="page-container col-md-6 col-sm-12">
          <header className="App-header">
            <h1 className='login-header'>Log In</h1>
            <br />
            <Form className='form' onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail" hidden>Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="examplePassword" hidden>Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <br />
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                    />
                    Remember me
                  </Label>
                </FormGroup>
              </FormGroup>
              {' '}
              <Button color='success' type="submit">Log In</Button>
            </Form>

            <Link to="/forgot-password" className='link-forgot'>Forgot Password?</Link>
            <p className='txt'>
              Don't have an account?
              <br />
              <Link to="/signup" className='link-signup'><b>Sign Up</b></Link>
            </p>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Login;
