import './NewExam.css';
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
    Table } from 'reactstrap';

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
        <Navbar color="dark" light>
            <NavbarBrand href="/" className="me-auto">
                <h3>Exam Analyzer</h3>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/Profile/">Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/ /">My Exams</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/ /">Settings</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Login/">Logout</NavLink>
                        </NavItem>
                    </Nav>
            </Collapse>
        </Navbar>
        <br /><br />
        <h3>Create Exam</h3>
        <br />
        <Table>
            <thead><tr></tr></thead>
                <tbody>
                    <tr>
                        <td><b>Exam Name : </b></td>
                        <td><input type="text" name="examName" value={inputdata.examName} id="examNameInput" onChange = { handleChange } /></td>        
                    </tr>
                    <tr>
                        <td><b>Exam Date : </b></td>
                        <td><input type="text" name="examStartDate" value={inputdata.examStartDate} id="name" onChange = { handleChange } /></td>
                    </tr>
                    <tr>
                        <td><b>Exam Starting Time : </b></td>
                        <td><input type="text" name="examStartTime" value={inputdata.examStartTime} id="name" onChange = { handleChange } /></td>
                    </tr>
                    <tr>
                        <td><b>Exam Duration(in minutes): </b></td>
                        <td><input type="text" name="examDuration" value={inputdata.examDuration} id="name" onChange = { handleChange } /></td>
                    </tr>
                    <tr>
                        <td><b>Exam Content : </b></td>
                        <td><input type="text" name="examContent" value={inputdata.examContent} id="name" onChange = { handleChange } /></td>
                    </tr>
                </tbody>
            </Table>

        <Button color='success'>
            <Link to ="/MyExamPage" className='link-texts'>Create Exam</Link>
        </Button>
 
        <Button>
            <Link to ="/MyExamPage" className='link-texts'>Cancel</Link>
        </Button>
        </div>

      );
}

export default NewExam;