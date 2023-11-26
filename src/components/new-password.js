import './new-password.css';
import { Link } from 'react-router-dom';
import { Form, Input, Button, FormGroup, Label, Container } from 'reactstrap';

function Newpassword() {
  return (
    <div className="App">
      <div className='heading'>
        <Container>
          <header className="App-header">
            <h1 className='texts'><b>Create a strong password</b></h1>
            <br />
            <Form>
              <FormGroup>
                <p className='texts'>Password should be at least 8 characters and maximum 13 characters. Must include atleast one digits(0-9), upper-case(A-Z) letters, lower-case letters(a-z) and any special characters(!@#$%^&*-=
                    =<>?/ </>).</p>
                <Label for="password" className='texts'>Password</Label>
                  <Input type="password" id="password" placeholder="New Password" />
              </FormGroup>
              <FormGroup>
                <Label for="password" className='texts'>Confirm Password</Label>
                  <Input type="password" id="password" placeholder="Confirm New Password" />
              </FormGroup>
              <Link to="/login" className='link-text'>
                <Button color='success'>Reset Password</Button>
              </Link>
            </Form>
          </header>
        </Container>
      </div>
    </div>
  );
}

export default Newpassword;
