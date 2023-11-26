import './login.css';
import React from 'react';
import { Link } from "react-router-dom";
import { Form, Input, Button, FormGroup, Label} from 'reactstrap';

const Login = () => {
  return (
    <div className="App">
      <div className='loginpage'>      
        <div className="page-container col-md-6 col-sm-12">
          <header className="App-header">
            <h1 className='login-header'>Log In</h1>
            <br />
              <Form className='form'>
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
                  <FormGroup check>
                  <Label check>
                    <Input type="checkbox"/>
                      Remember me
                  </Label>
                </FormGroup>
                </FormGroup>
                {' '}
                
                  <Link to="/my-exam-page" className="link-texts">
                    <Button color='success'>Log In</Button>
                  </Link>
                
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