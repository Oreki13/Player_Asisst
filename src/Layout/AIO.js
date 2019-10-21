import React, { Component, Fragment } from "react";
import Header from "../Component/Header";
import Login from "../Views/Auth/Login";
import Register from "../Views/Auth/Register";
import Home from "../Views/Home";

class Aio extends Component {
  render() {
    const getMatch = this.props.match.path;
    console.log(getMatch);

    return (
      <Fragment>
        {getMatch === "/" ? <Header /> : null}
        {getMatch === "/login" ? <Login /> : null}
        {getMatch === "/register" ? <Register /> : null}
        {getMatch === "/home" ? <Home /> : null}
      </Fragment>
    );
  }
}

export default Aio;
