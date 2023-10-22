import './myExamPage.css';
import React, { useState } from 'react';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

function myExamPage() {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
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
        <Table responsive>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Exam Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                    <th>Students Attended</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                </tr>
            </tbody>
        </Table>
        <Button>
            <a href="Login.js">New Exam</a>
        </Button>
        </div>
    );
}

export default myExamPage;