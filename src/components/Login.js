import './login.css';
import React from 'react';
import { Link } from "react-router-dom";
import { Form, Input, Button, FormGroup, Label } from 'reactstrap';

const Login = () => {
  return (
    <div className="App">
      <div className='loginpage'>
        <div className="page-container">
          <header className="App-header">
            <h1 className='login-header'>Log In</h1>
            <br />
              <Form>
                <FormGroup>
                  <Label for="exampleEmail" hidden>Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="email"
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
                  />
                  <br />
                  <Input
                    id="exampleCheckbox"
                    name="checkbox"
                    type="checkbox"
                  />
                  <Label check for="exampleCheckbox">Remember Me</Label>
                </FormGroup>
                {' '}
                <Button color='success'>
                  <Link to="/my-exam-page" className="link-texts">Log In</Link>
                </Button>
              </Form>
              
              <Link to="/forgot-password" className='link'>Forgot Password?</Link>
              <p>Don't have an account?<Link to="/signup" className='link'><b>Sign Up</b></Link></p>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Login;