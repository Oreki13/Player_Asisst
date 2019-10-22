import React, { Fragment, Component } from "react";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";
import "../css/navbar.css";

class Header extends Component {
  render() {
    return (
      <Navbar className="bar" variant="dark">
        <Navbar.Brand>Player Assist</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
