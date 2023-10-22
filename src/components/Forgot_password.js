import './Forgot_password.css';
import React from 'react';
import { Form, Input, Button, FormGroup, Label } from 'reactstrap';

function Forgot_password() {
    return (
    <div className="App">
        <header className="App-header">
            <h1><b>Forgot password?</b></h1>
            <Form>
                <p>Please enter your email address. We will you send an OTP</p>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                </FormGroup>
                <Button>
                    <a href="Newpassword.js" className="loginbutton">Log In</a>
                </Button>
            </Form>
        </header>
    </div>
  );
}

export default Forgot_password;
