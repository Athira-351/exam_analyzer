import './result.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, 
    Table,
    Button,
    Container } from 'reactstrap';

function Result(props) {
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
        <Container className='result-container'>   
        <h2 className='heading'>Result>></h2>
        <br />

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
                    <td>Computer Vision</td>
                    <td>23/10/2023</td>
                    <td>7 PM - 9 PM</td>
                    <td>2 hours</td>
                    <td>100</td>                                     
                </tr>
            </tbody>
        </Table>

        <div className='result-table'>
        <Table bordered>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Score Obtained</th>
                    <th>Maximum Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Aarav Cyriac</td>
                    <td>150</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Abhinav Singh</td>
                    <td>160</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Anjana Michael</td>
                    <td>140</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Cia Dominic</td>
                    <td>135</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>John Wilson</td>
                    <td>177</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Elizebath Dominic</td>
                    <td>193</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Sona Thomas</td>
                    <td>123</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Smith John</td>
                    <td>156</td>
                    <td>200</td>
                </tr>
            </tbody>
        </Table>
        </div>
        </Container>
        <br />
        <Button color='warning'>
            <Link to ="/my-exam-page" className='link-text'>Back</Link>
        </Button>
        </Container>
        </div>
    );
}
export default Result;