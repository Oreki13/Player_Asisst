import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Auth from "./Layout/Auth";
import Home from "./Layout/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrap from "./Layout/AIO";
function App() {
  return (
    <Router>
      <Route path="/" render={props => <Wrap {...props} />} />
      <Route path="/login" render={props => <Wrap {...props} />} />
      <Route path="/register" render={props => <Wrap {...props} />} />
      <Route path="/home" render={props => <Wrap {...props} />} />
    </Router>
  );
}

export default App;
