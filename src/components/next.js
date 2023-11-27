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
    
  const [questions, setQuestions] = useState([
    { id: 1, placeholder: 'Type the question here...' },
  ]);

  const addQuestion = () => {
    const newId = Math.max(...questions.map((q) => q.id), 0) + 1;
    setQuestions([...questions, { id: newId, placeholder: `Question ${newId}` }]);
  };

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
                            <NavLink href="/my-exam-page">My Exams</NavLink>
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
            {questions.map((question, index) => (
          <div key={question.id}>
            <h5 className="create">Question {index + 1}:</h5>
            <Form>
              <FormGroup>
                <Input
                  className='que'
                  placeholder={question.placeholder}
                  id={`exampleText${question.id}`}
                  name={`text${question.id}`}
                  type="textarea"
                />
                
                <hr className="short-hr" />
              </FormGroup>
              <br />
                
            </Form>
          </div>
        ))}
        <Button color='primary' onClick={addQuestion}>
          + Add Question
        </Button>

        {' '}
        <Button color='secondary'>
            <Link to="/answersheet" className='submit-button'>Preview</Link>
        </Button>
        {' '}
        <Button color='success'>
            <Link to="/my-exam-page" className='submit-button'>Submit</Link>
        </Button>
      </Container>
    </div>
  );
}

export default Next;
