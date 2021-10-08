import React from 'react';
import { CartWidget } from './CartWidget';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
            <Navbar.Brand href="#home"><img className="logo" src="images/header-logo.png" alt="logo sheridan"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Escolar</Nav.Link>
                    <Nav.Link href="#link">Artística</Nav.Link>
                    <Nav.Link href="#link">Técnica</Nav.Link>
                    <Nav.Link href="#link">Gráfica</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#link" className="d-flex"><CartWidget/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}
