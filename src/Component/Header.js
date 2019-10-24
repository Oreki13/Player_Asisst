import React, { Fragment, Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Button,
  Form,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
import "../css/navbar.css";
import firebase from "../config/firebase";

class Header extends Component {
  logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location = "/";
      })
      .catch(error => console.log(error));
  };
  render() {
    const name = firebase.auth().currentUser;

    return (
      <Navbar className="bar justify-content-between" variant="dark">
        <Navbar.Brand>Player Assist</Navbar.Brand>
        <Navbar.Brand style={{ fontSize: 18, color: "rgb(212, 212, 212)" }}>
          {name !== null ? name.displayName : null}
        </Navbar.Brand>
        <Navbar.Brand
          style={{
            fontSize: 18,
            color: "rgba(184, 24, 24, 0.616)",
            fontWeight: "bold",
            cursor: "pointer"
          }}
          onClick={() => this.logOut()}
        >
          Logout
        </Navbar.Brand>
        {/* <Nav className="mr-auto"></Nav> */}
      </Navbar>
    );
  }
}

export default Header;
