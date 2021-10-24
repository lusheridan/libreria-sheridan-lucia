import React from "react";
import { CartWidget } from "./CartWidget";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Nav className="me-auto">
          <NavLink activeClassName={"activeLink"} className="link" to="/">
            <img
              className="logo"
              src="/images/header-logo.png"
              alt="logo sheridan"
            />
          </NavLink>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink
                activeClassName={"activeLink"}
                className="link"
                exact
                to="/category/escolar"
              >
                Escolar
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeClassName={"activeLink"}
                className="link"
                exact
                to="/category/artistica"
              >
                Artística
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeClassName={"activeLink"}
                className="link"
                exact
                to="/contacto"
              >
                Contacto
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav.Link>
            <NavLink className="cart" to="/cart">
              <CartWidget />
            </NavLink>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
