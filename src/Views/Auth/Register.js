import React from "react";
import { Link } from "react-router-dom";
import "../../css/auth.css";
import { Form, Button } from "react-bootstrap";

const Register = props => {
  return (
    <div className="Box p-3">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Link to="/home">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Link>
        <Link to="/login">
          <Button className="ml-3" variant="primary" type="submit">
            login
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Register;
