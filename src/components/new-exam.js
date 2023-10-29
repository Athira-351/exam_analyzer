import './new-exam.css';
import {Link} from "react-router-dom"
import React, { useState } from 'react';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Table,
    Container } from 'reactstrap';

function NewExam() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
  
    const [inputdata, setInputData] = useState({ name: '' });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setInputData({ ...inputdata, [name]: value });
    };

    return (
        <div className='App'>
            <Navbar className='nav' light expand="md">
                <NavbarBrand href="/" className="me-auto">
                    <h3>Exam Analyzer</h3>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2"/>
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
        <h4 className='step'>Step 1:</h4>
        <h3 className='create'>Create Exam</h3>
        <br />
        <div className='create-table'>
            <div className='table'>
        <Table bordered>
            <thead></thead>
            <tbody>
                <tr>
                    <td>
                        <b>Exam Name : </b>
                    </td>
                    <td>
                        <input type="text" name="examName" placeholder='Exam Name' value={inputdata.examName} id="examNameInput" onChange = { handleChange } />
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Exam Date : </b>
                    </td>
                    <td>
                        <input type="text" name="examStartDate" placeholder='dd/mm/yyyy' value={inputdata.examStartDate} id="name" onChange = { handleChange } />
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Exam Starting Time : </b>
                    </td>
                    <td>
                        <input type="text" name="examStartTime" placeholder='00:00 AM' value={inputdata.examStartTime} id="name" onChange = { handleChange } />
                    </td>
                </tr>
                <tr>
                    <td>
                    <b>Exam Duration(in minutes):</b>
                    </td>
                    <td>
                        <input type="text" name="examDuration" placeholder='in minutes' value={inputdata.examDuration} id="name" onChange = { handleChange } />
                    </td>
                </tr>
            </tbody>
        </Table>
        </div>
        </div>
        <Button color='success'>
            <Link to ="/next" className='link-texts'>Next</Link>
        </Button>
        {' '}
        <Button color='warning' className='cancel-button'>
            <Link to ="/my-exam-page" className='link-texts'>Cancel</Link>
        </Button>
        </Container>
    </div>

    );
}

export default NewExam;