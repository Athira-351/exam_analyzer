import './signup.css';
import { Link } from 'react-router-dom'
import { Form, Input, Button, FormGroup, Label } from 'reactstrap';
const Signup = () => {
  return (
    <div className="App">
      <div className='signuppage'>
        <div className='container-page'>
          <header className="App-header">
            <h1 className='signup-header'>Sign Up</h1>
              <Form>
                <FormGroup>
                  <Label for="firstName">Full Name</Label>
                    <Input type="text" id="fullName" placeholder="Full Name" />
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
                <Button color='success'>
                  <Link to="/login" className='link-text'>Submit</Link>
                </Button>
              </Form>
          </header>
        </div>
      </div>
    </div>
  );
}

export default Signup;
