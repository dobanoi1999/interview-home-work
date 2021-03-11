import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar sticky="top" bg="light">
      <LinkContainer to="/">
        <Navbar.Brand>DBN Blog</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Blogs</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Header;
