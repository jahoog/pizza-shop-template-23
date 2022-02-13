import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = ({ user }) => (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">Andys Pizza</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/menu">Menu</Nav.Link>
                {user ?
                    <NavDropdown title="My Profile" id="profile">
                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                        <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
                    </NavDropdown>
                    :
                    <Nav.Link href="/login">Login</Nav.Link>
                }
                <Nav.Link href="/feedback">Feedback</Nav.Link>
            </Nav>
        </Container>
        {user ? <Navbar.Brand>Hello {user.attributes.given_name}!</Navbar.Brand> : null}
    </Navbar>
);

export default Header;
