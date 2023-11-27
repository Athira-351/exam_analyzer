import './answersheet.css';
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
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
function Ans(props) {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
      // Use dummy data if no predefined questions are provided
      const dummyQuestions = [
        { id: 1, text: 'What is Natural Language Processing?' },
        { id: 2, text: 'Explain any two real-life applications of Natural Language Processing.' },
        { id: 3, text: 'What are unigrams, bigrams, trigrams, and n-grams in NLP?' },
        { id: 4, text: 'What are the steps involved in solving an NLP problem?' },
        { id: 5, text: 'How to tokenize a sentence using the nltk package?' }
        
        // Add more dummy questions as needed
      ];
  
      // Use predefined questions if provided, otherwise use dummy questions
      setQuestions(props.predefinedQuestions || dummyQuestions);
    }, [props.predefinedQuestions]);

    const handleNextQuestion = () => {
      if (currentQuestion < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 1) {
          setCurrentQuestion(currentQuestion - 1);
        }
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
            <h4 className="step">Answer Sheet</h4>
            <p>You can answer the question by typing or uploading a single PDF file.</p>
            <br />
            <h5 className="create">Question {currentQuestion}:</h5>
            <Form>
            <FormGroup>
            <Input
              className="que"
              placeholder={questions[currentQuestion - 1]?.text || 'Type the question here...'}
              id="exampleText"
              name="text"
              type="textarea"
              readOnly // Make the input read-only
            />
            <FormText className='formtext'>
              Only the owner can edit or change the content.
            </FormText><br />
            
            <hr className="short-hr" />
          </FormGroup>
         
          
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
              <Input className='que'
                placeholder='Type your answer here...'
                id="exampleText"
                name="text"
                type="textarea"
              />
            </FormGroup>
            <div className='button-group'>
              {currentQuestion > 1 && (
                <Button color='primary' className='prev-button' onClick={handlePreviousQuestion}>
                  Previous
                </Button>
              )}
              {' '}
              <Button color='success' onClick={handleNextQuestion}>
                {currentQuestion < questions.length ? 'Next Question' : 'Finished'}
              </Button>
            </div>
          </div>
        </Form>
        <Button color='success'>
        <Link to="/end" className='submit-button'>Submit</Link>
        </Button>
      </Container>
    </div>
  );
}
export default Ans;