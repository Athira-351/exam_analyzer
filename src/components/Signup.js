import './Signup.css';
import { Form, Input, Button, FormGroup, Label } from 'reactstrap';

function Signup() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><b>Sign Up</b></h1>
        <Form>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input type="text" id="firstName" placeholder="First Name" />
            </FormGroup>
            <FormGroup>
              <Label for="middleName">Middle Name</Label>
              <Input type="text" id="middleName" placeholder="Middle Name" />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input type="text" id="lastName" placeholder="Last Name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox"/>
                Remember me
              </Label>
            </FormGroup>
            <Button>
              Sign Up
            </Button>
          </Form>
        <a href="Login.js">Log In</a>
      </header>
    </div>
  );
}

export default Signup;
