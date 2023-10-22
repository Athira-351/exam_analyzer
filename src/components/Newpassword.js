import './Newpassword.css';
import { Form, Input, Button, FormGroup, Label } from 'reactstrap';

function Newpassword() {
  return (
    <div className="App">
          <header className="App-header">
            <h1><b>Create a strong password</b></h1>
            <br />
            <Form>
                <FormGroup>
                <p>Password should be at least 8 characters and maximum 13 characters. Must include atleast one digits(0-9), upper-case(A-Z) letters, lower-case letters(a-z) and any special characters(!@#$%^&*-=
                    =<>?/ </>).</p>
                  <Label for="password">Password</Label>
                  <Input type="password" id="password" placeholder="New Password" />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Conform Password</Label>
                  <Input type="password" id="password" placeholder="Confirm New Password" />
                </FormGroup>
                <Button>
                    <a href="Login.js">Reset Password</a>
                </Button>
              </Form>
          </header>
        </div>
  );
}

export default Newpassword;
