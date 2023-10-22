import '/Result.css'
import React, { useState } from 'react';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button } from 'reactstrap';

function Result() {
    const [collapsed, setCollapsed] = useState(true);
    
    const toggleNavbar = () => setCollapsed(!collapsed);
      
    const [inputdata, setInputData] = useState({ name: '' });
      
    const handleChange = (event) => {
      const { name, value } = event.target;
      setInputData({ ...inputdata, [name]: value });
    };
    return (
        <div className='App'>
        <Navbar color="faded" light>
            <NavbarBrand href="/" className="me-auto">
                <h3>BERT</h3>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="Profile.js">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="Login.js">Logout</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        <br /><br />
        <h3>Create Exam</h3>
        <br />
        <b>Exam Name : </b>
        <input type="text" name="examName" value={inputdata.examName} id="examNameInput" onChange = { handleChange } />        
        <br /><br />

        <b>Exam Date : </b>
        <input type="text" name="examStartDate" value={inputdata.examStartDate} id="name" onChange = { handleChange } />
        <br /><br />

        <b>Exam Starting Time : </b> <t / ><t / ><t / >
        <input type="text" name="examStartTime" value={inputdata.examStartTime} id="name" onChange = { handleChange } />
        <br /><br />

        <b>Exam Duration(in minutes): </b>
        <input type="text" name="examDuration" value={inputdata.examDuration} id="name" onChange = { handleChange } />
        <br /><br />

        <b>Exam Content : </b>
        <input type="text" name="examContent" value={inputdata.examContent} id="name" onChange = { handleChange } />
        <br /><br />

        </div>
    );
}
export default Result;