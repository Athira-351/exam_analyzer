import './result.css';
import axios from "axios";
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Table,
    Button,
    Container
} from 'reactstrap';

function Result() {

    const location = useLocation()
    const [exam, setExam] = useState([])
    const [results, setResults] = useState([])

    const getResults = () => {

        const options = {
            method: 'GET',
            url: 'http://127.0.0.1:5000/result',
            params: { exam_id: location.state.examId }
        };

        axios.request(options).then(function (response) {
            console.log(response.data)
            setResults(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }

    const getExamData = () => {

        const options = {
            method: 'GET',
            url: 'http://127.0.0.1:5000/exam',
            params: { exam_id: location.state.examId }
        };

        axios.request(options).then(function (response) {
            setExam(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        getResults()
        getExamData()
    }, [])

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
            <br /><br /><br />
            <Container className='result-container'>
                <h2 className='result-heading'><b>RESULT</b></h2>
            </Container>
            <br /><br /><br />


            <Container className='container'>
                <Table bordered>
                    <thead>
                        <tr className="table-dark">
                            <th>Exam Name</th>
                            <th>Exam Date</th>
                            <th>Starting Time</th>
                            <th>Exam Duration<br />(in minutes)</th>
                            <th>Students Attended</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{exam.name}</td>
                            <td>{exam.date}</td>
                            <td>{exam.start_time}</td>
                            <td>{exam.duration}</td>
                            <td>{results.length}</td>
                        </tr>
                    </tbody>
                </Table>

                {
                    results.length > 0 ?
                    <div className='result-table'>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Student ID</th>
                                    <th>Marks Obtained</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    results.map((each, index) => (
                                        <tr key={each.result_id}>
                                            <td>{index + 1}</td>
                                            <td>{each.student_id}</td>
                                            <td>{each.score.toFixed(2)} Marks</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                    :
                    <h5>No students attended this exam so far</h5>
                }

            </Container>
            <br />
            <Link to="/my-exam-page" className='link-text'>
                <Button outline color='secondary' className='back-btn'>
                    Back
                </Button>
            </Link>
        </div>
    );
}

export default Result;
