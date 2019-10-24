import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/auth.css";
import { Form, Button } from "react-bootstrap";
import firebase from "../../config/firebase";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const onLogin = async () => {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim;
    let checkEmail = email.match(validEmail);
    if (checkEmail == null) {
      setError(true);
    } else {
      setLoading(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setEmail("");
          setPassword("");
          setLoading(false);
          props.history.push("home");
          // console.log("propzz", this.props);
        })
        .catch(err => {
          console.log(err);

          setError(true);
          setLoading(false);
        });
    }
  };
  const cekLogin = () => {
    firebase.auth().onAuthStateChanged(user => {
      props.history.push(user ? "home" : "/");
    });
  };
  useEffect(() => {
    cekLogin();
  }, []);
  return (
    <div className="">
      <div className="Box p-3">
        <Form.Group controlId="formBasicEmail">
          {error ? (
            <Form.Text className="text-center text-danger">
              Email or password Invalid
            </Form.Text>
          ) : null}
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onLogin}>
          Submit
        </Button>

        <Link to="/register">
          <Button className="ml-3" variant="primary">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
