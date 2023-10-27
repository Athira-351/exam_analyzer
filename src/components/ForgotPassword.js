import './ForgotPassword.css';
import React from 'react';
import {Link} from 'react-router-dom'
import { Form, Input, Button, FormGroup, Label } from 'reactstrap';

function ForgotPassword() {
    return (
    <div className="App">
        <header className="App-header">
            <h1><b>Forgot password?</b></h1>
            <Form>
                <p>If you do not know your current password, you can change it. <br />
                    Please enter your email address. We will you send an OTP</p>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email Address" />
                </FormGroup>
                <Button color='success'>
                    <Link to ="/OTP" className='link-text'>Submit</Link>
                </Button>
            </Form>
        </header>
    </div>
  );
}

export default ForgotPassword;
