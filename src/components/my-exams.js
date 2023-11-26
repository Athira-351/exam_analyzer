import './my-exams.css';
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

function MyExams(props) {
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
                            <NavLink href="/my-exams">My Exams</NavLink>
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
               <h5 className='result-heading'><b>List of created exams</b></h5>
            </Container>
            <br /><br /><br />
       

        <Container className='container'>
        <Table bordered>
            <thead>
                <tr className="table-dark">
                    <th>sl.no</th>
                    <th>Exam Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Exam Duration<br />(in minutes)</th>
                    <th>Students Attended</th>                   
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Computer Vision</td>
                    <td>23/10/2023</td>
                    <td>7 PM</td>
                    <td>2 hours</td>
                    <td>10</td>                                     
                </tr>
            </tbody>
        </Table>
        </Container>
        <br />
        <Button color='warning'>
            <Link to ="/my-exam-page" className='link-text'>Back</Link>
        </Button>
       
        </div>
    );
}
export default MyExams;