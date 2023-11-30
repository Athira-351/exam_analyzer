import './answersheet.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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
  Label
} from 'reactstrap';

function Ans() {

  let { examId } = useParams()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [studentId, setStudentId] = useState([])

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'http://127.0.0.1:5000/questions',
      params: { exam_id: examId }
    };

    axios.request(options).then(function (response) {
      setQuestions(response.data)
    }).catch(function (error) {
      console.error(error);
    });

  }, []);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitExam = () => {
    
    const answers = questions.map(each => {
      return { questionId: each.question_id, answerText: each.answer_text }
    })

    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:5000/answers',
      headers: { 'Content-Type': 'application/json' },
      data: {
        exam_id: examId,
        student_id: studentId,
        answers
      }
    };

    axios.request(options).then(function (response) {
      navigate('/end')
    }).catch(function (error) {
      console.error(error);
    });

  }

  if (questions.length > 0) {
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

          <FormGroup style={{ display:'flex' }}>
            <Label style={{ width: '30%'}} for="studentIdInput">Enter Student ID:</Label>
            <Input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              id="studentIdInput"
              placeholder="Enter student ID..."
            />
          </FormGroup>

          <br />

          <h5 className="create">Question {currentQuestion + 1}:</h5>
          <Form>
            <FormGroup>
  
              <h4>
                {questions[currentQuestion].question_text}
              </h4>
              {/* <Input
                className="que"
                placeholder={questions[currentQuestion - 1]?.text || 'Type the question here...'}
                id="exampleText"
                name="text"
                type="textarea"
                readOnly // Make the input read-only
              /> */}
              {/* <FormText className='formtext'>
                Only the owner can edit or change the content.
              </FormText> */}
              <br />
  
              <hr className="short-hr" />
            </FormGroup>
  
  
            <br />
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
                { console.log(questions[currentQuestion].answer_text) }
                <Input className='que'
                  placeholder='Type your answer here...'
                  id="answerText"
                  name="text"
                  type="textarea"
                  value={questions[currentQuestion].answer_text ? questions[currentQuestion].answer_text : ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    const updatedQuestions = [...questions]; // Create a copy of the questions array
                    updatedQuestions[currentQuestion].answer_text = value; // Update the answer_text field in the copied array
                    setQuestions(updatedQuestions); 
                  }}
                />
              </FormGroup>
              <div
                className='button-group'
                style={{ display:'flex', flexDirection: 'row', justifyContent:'space-between' }}
              >
                <div>
                  {currentQuestion > 0 && (
                    <Button color='primary' className='prev-button' onClick={handlePreviousQuestion}>
                      Previous
                    </Button>
                  )}
                </div>
                <div>
                  {currentQuestion + 1 < questions.length ?
                    <Button color='success' onClick={handleNextQuestion}>
                      Next
                    </Button>
                    : null
                  }
                </div>
              </div>
            </div>
          </Form>
          <Button color='success' onClick={submitExam}>
            Submit
          </Button>
        </Container>
      </div>
    );
  } else {
    return 'Loading...'
  }

}
export default Ans;