import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/auth.css";
import { Form, Button } from "react-bootstrap";
import firebase from "../../config/firebase";
import Header from "../../Component/Header";

const Register = props => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorUser, setErrorUser] = useState(false);
  const [error, setError] = useState("");

  const onRegister = async () => {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim;
    const validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,25}$/gim;
    let checkEmail = email.match(validEmail);
    let checkPassword = password.match(validPass);

    setLoading(true);
    if (checkEmail === null) {
      setLoading(false);
      setErrorEmail(true);
    } else if (checkPassword === null) {
      setLoading(false);
      setErrorPass(true);
    } else if (username.length < 3) {
      setLoading(false);
      setErrorUser(true);
    } else {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase.auth().currentUser.updateProfile({
            displayName: username
          });
          props.history.push("home");
        })
        .catch(err => {
          console.log(err.message);
          setError(err.message);
        });
    }
  };

  return (
    <div className="Box p-3">
      <Form.Group controlId="formBasicEmail">
        {error ? (
          <Form.Text className="text-center text-danger my-2">
            {error}
          </Form.Text>
        ) : null}
        <Form.Label>UserName</Form.Label>
        <Form.Control
          onChange={e => setUsername(e.target.value)}
          type="email"
          placeholder="UserName"
        />
        {errorUser ? (
          <Form.Text className="text-center text-danger ">
            UserName to short
          </Form.Text>
        ) : null}
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
        {errorEmail ? (
          <Form.Text className="text-center text-danger">
            Invalid Format
          </Form.Text>
        ) : null}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        {errorPass ? (
          <Form.Text className="text-center text-danger">
            Password to short, min length 8, combine number and word
          </Form.Text>
        ) : null}
      </Form.Group>

      <Button variant="primary" type="submit" onClick={onRegister}>
        Submit
      </Button>

      <Link to="/">
        <Button className="ml-3" variant="primary" type="submit">
          login
        </Button>
      </Link>
    </div>
  );
};

export default Register;
