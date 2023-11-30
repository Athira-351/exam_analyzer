import './next.css';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom";
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
  Button,
  Container,
} from 'reactstrap';

function Next() {

  const location = useLocation()
  const navigate = useNavigate()

  const submitExam = () => {
    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:5000/exam',
      headers: { 'Content-Type': 'application/json' },
      data: {
        name: location.state.examName,
        start_time: location.state.examStartTime,
        date: location.state.examStartDate,
        duration: location.state.examDuration,
        instructor_id: 1,
        questions
      }
    };

    axios.request(options).then(function (response) {
      navigate('/my-exam-page')
    }).catch(function (error) {
      alert("Error")
      console.error(error)
      console.error(error.response)
    })

  }
  
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const [questions, setQuestions] = useState([
    { id: 1, placeholder: 'Type the question here...' },
  ]);

  const addQuestion = () => {
    const newId = Math.max(...questions.map((q) => q.id), 0) + 1;
    setQuestions([...questions, { id: newId, placeholder: `Question ${newId}` }]);
  }

  const handleChange = (id, value, field) => {
    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, [field]: value } : q
    );
    setQuestions(updatedQuestions);
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
                  value={question.question_text}
                  onChange={(e) => handleChange(question.id, e.target.value, 'question_text')}
                />
                <br />
                <p>You can answer the question by typing or uploading a single PDF file.</p>
                <div className='answer'>
                  {/* <FormGroup>
                  <Input className='que'
                    id="exampleFile"
                    name="file"
                    type="file"
                  />
                  <FormText className='formtext'>
                    Upload the file here
                  </FormText>
                </FormGroup> */}
                  {/* <div className='or'><h5>OR</h5></div> */}
                  <FormGroup>
                    <Input
                      className='que'
                      placeholder='Type your answer here...'
                      id="exampleText"
                      name="text"
                      type="textarea"
                      rows={10}
                      value={question.correct_answer}
                      onChange={(e) => handleChange(question.id, e.target.value, 'correct_answer')}
                    />
                  </FormGroup>
                </div>
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
        <Button
          color='success'
          onClick={submitExam}
        >
            Submit
        </Button>
      </Container>
    </div>
  );
}

export default Next;
