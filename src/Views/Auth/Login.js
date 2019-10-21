import React from "react";
import { Link } from "react-router-dom";
import "../../css/auth.css";
import { Form, Button } from "react-bootstrap";

const Login = props => {
  return (
    <div className="">
      <div className="Box p-3">
        <Form>
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
          <Link to="/register">
            <Button className="ml-3" variant="primary" type="submit">
              Register
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
