import './next.css';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  Input,
  FormGroup,
  FormText,

  Button,
  Container,
} from 'reactstrap';

function Next(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="App">
        <Navbar className='nav' light expand="md">
            <NavbarBrand href="/" className="me-auto">
                <h3>Exam Analyzer</h3>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/ /">My Exams</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/ /">Settings</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login/">Logout</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <br />  
            <Container className='container'>
            <br />
            <h4 className="step">Step 2:</h4>
            <br />
            <h5 className="create">Question.1:</h5>
            <Form>
                <FormGroup>           
                    <Input  className='que'
                        placeholder='Type the question here...'
                        id="exampleText"
                        name="text"
                        type="textarea"
                    />
                    <FormText className='formtext'>
                          Only the owner can edit or change the content.
                    </FormText><br />
                    <Button color='success'>
                        <Link to="/my-exam-page" className= 'submit-button'>Submit</Link>
                    </Button>
                    <hr className="short-hr"/>
                </FormGroup>
                <br />
                <p>You can answer the question by typing or uploading a single PDF file.</p>
                <br />
                <div className='answer'>
                <FormGroup>
                    <Input className='que'               
                        id="exampleFile"
                        name="file"
                        type="file"
                    />
                    <FormText className='formtext'>
                        Upload the file here
                    </FormText>
                </FormGroup>
                <div className='or'><h5>OR</h5></div>
                <FormGroup>
                    <Input  className='que'
                        placeholder='Type your answer here...'
                        id="exampleText"
                        name="text"
                        type="textarea"
                    />
                    </FormGroup>
                    <Button color='success'>
                        <Link to="/end" className= 'submit-button'>Submit</Link>
                    </Button>
                </div>
            </Form>
        </Container>
    </div>   
  );
}

export default Next;
