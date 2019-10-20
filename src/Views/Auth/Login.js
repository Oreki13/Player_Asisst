import React from "react";
import { Link } from "react-router-dom";
import "../../css/auth.css";

const Login = () => {
  return (
    <div className="card">
      <h1>Hello World</h1>
      <Link to="/auth/register">Hello</Link>
    </div>
  );
};

export default Login;
