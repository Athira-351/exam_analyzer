import './my-exam-page.css';
import { Link } from "react-router-dom";
import React , { useState } from 'react';
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
    
function MyExamPage(props) {
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
            <Container className = 'container' >
            <div className='newexam-button'>
                <Button color='success' className='right-button'>
                    <Link to ="/new-exam" className='link-texts'>New Exam</Link>
                </Button>
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
                        <th>Students Attended</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Deep Learning</td>
                        <td>23/10/2023</td>
                        <td>7 PM - 9 PM</td>
                        <td>2 hours</td>
                        <td>100</td>
                        <td>
                            <a href="/">copy link</a>
                            <Button color='primary'>
                                <Link to="/result" className= 'result-button'>View Result</Link>
                            </Button>
                        </td>                   
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Computer Vision</td>
                        <td>24/10/2023</td>
                        <td>12.30 PM - 3.30 PM</td>
                        <td>3 hours</td>
                        <td>100</td>
                        <
                            td>
                            <a href="/">copy link</a>
                            <Button color='primary'>
                                <Link to="/result" className= 'result-button'>View Result</Link>
                            </Button> 
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Computer Forensics</td>
                        <td>24/10/2023</td>
                        <td>4 PM - 7 PM</td>
                        <td>2 hours</td>
                        <td>100</td>
                        <td>    
                            <a href="/">copy link</a>
                            <Button color='primary'>
                                <Link to="/result" className= 'result-button'>View Result</Link>
                            </Button> 
                        </td>
                    </tr>
                </tbody>
            </Table>
            </div>
            </div>
            </Container>
        </div>     
    );
}
export default MyExamPage;