import './Login.css';
import React from 'react';
import {link} from "react-router-dom";
import { Form, Input, Button, FormGroup, Label } from 'reactstrap';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><b>Login</b></h1>
        <Form>
          <FormGroup>
            <Label
              for="exampleEmail"
              hidden
            >
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
            />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label
              for="examplePassword"
              hidden
            >
              Password
            </Label>
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
            <Label
              check
              for="exampleCheckbox"
            >
              Remember Me
            </Label>
          </FormGroup>
          {' '}
          <Button>
          <a href="myExamPage.js" className="loginbutton">Log In</a>
          </Button>
        </Form>
        <a href="Forgot_password.js">Forgot Password?</a>
        <a href="Signup.js"><b>Sign Up</b></a>
      </header>
    </div>
  );
}

export default Login;
