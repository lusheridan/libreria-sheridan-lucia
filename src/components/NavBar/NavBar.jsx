import React from 'react';
import { CartWidget } from './CartWidget';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
            <Nav className="me-auto">
                <NavLink activeClassName={'activeLink'} className="link" to="/">
                    <Navbar.Brand href="#home"><img className="logo" src="/images/header-logo.png" alt="logo sheridan"/></Navbar.Brand>
                </NavLink>
            </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink activeClassName={'activeLink'} className="link" exact to="/category/escolar">Escolar</NavLink>
                    <NavLink activeClassName={'activeLink'} className="link" exact to="/category/artistica">Artística</NavLink>
                    <NavLink activeClassName={'activeLink'} className="link" exact to="/contacto">Contacto</NavLink>
                   <NavLink className="cart" to="/cart"><CartWidget/></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}
