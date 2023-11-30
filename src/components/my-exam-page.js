import './my-exam-page.css';
import { Link, useNavigate } from "react-router-dom";

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import axios from "axios";


function MyExamPage() {

    const [collapsed, setCollapsed] = useState(true);
    const [exams, setExams] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'http://127.0.01:5000/exams'
        };

        axios.request(options).then(function (response) {
            setExams(response.data)
        }).catch(function (error) {
            console.error(error);
        });

    })
    const toggleNavbar = () => setCollapsed(!collapsed);



    const handleCopyLink = (examId) => {
        navigator.clipboard.writeText(`${window.location.origin}/answersheet/${examId}`)
        toast.success("Exam Link copied to clipboard", { autoClose: 500 });
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
            <Container className='container' >
                <div className='newexam-button'>
                    <Link to="/new-exam" className='link-texts'>
                        <Button color='success' className='right-button'>
                            New Exam
                        </Button>
                    </Link>
                </div>
                <div className='myexam-table centered-table'>
                    <div className='center'>
                        <Table bordered>
                            <thead>
                                <tr className="table-dark">
                                    <th>Index</th>
                                    <th>Exam Name</th>
                                    <th>Exam Date</th>
                                    <th>Starting Time</th>
                                    <th>Exam Duration<br />(in minutes)</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    exams.map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.date}</td>
                                                <td>{item.start_time}</td>
                                                <td>{item.duration} Minutes</td>
                                                <td>
                                                    <Button
                                                        onClick={() => handleCopyLink(item.id)}
                                                        className="btn btn-outline-secondary copy-link"
                                                    >
                                                        Copy Link
                                                    </Button>

                                                    <Link
                                                        to="/result"
                                                        state={{ examId: item.id }}
                                                        className='result-button'
                                                    >
                                                        <Button color='primary' className="result-btn">
                                                            View Result
                                                        </Button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
            {/* Toast container */}
            <ToastContainer />
        </div>
    );
}
export default MyExamPage;