import './forgot-password.css';
import React from 'react';
import {Link} from 'react-router-dom'
import { Form, Input, Button, FormGroup, Label, Container } from 'reactstrap';

function ForgotPassword() {
    return (
        <div className="App">
            <div className='heading'>
                <Container className='container'>
                    <header className="App-header">
                        <h1 className='texts'><b>Forgot password?</b></h1>
                        <Form>
                            <p className='texts'>If you do not know your current password, you can change it. <br />
                            Please enter your email address. We will you send an OTP</p>
                            <FormGroup>
                                <Label for="email" className='texts'>Email</Label>
                                <Input type="email" id="email" placeholder="Email Address" />
                            </FormGroup>
                            <Link to ="/otp" className='link-text'>
                                <Button color='success'>Submit</Button>
                            </Link>
                        </Form>
                    </header>
                </Container>
            </div>
        </div>
    );
}

export default ForgotPassword;
