import React, { Component, Fragment } from "react";
import Header from "../Component/Header";
import Login from "../Views/Auth/Login";
import Register from "../Views/Auth/Register";
import Home from "../Views/Home";
import Wot from "../Views/Game/wot";
import Wowp from "../Views/Game/wowp";
import Wows from "../Views/Game/wows";
import DetailWowp from "../Views/Detail/wowp";
import firebase from "../config/firebase";

class Aio extends Component {
  state = {
    game: [],
    loading: true
  };
  componentDidMount = async () => {
    const data = firebase.database().ref("game");
    data.on("value", result => {
      const list = result.val();
      this.setState({ game: list, loading: false });
    });
  };
  render() {
    const getMatch = this.props.match.path;
    console.log(this.state);
    const { loading } = this.state;
    return (
      <Fragment>
        {getMatch === "/" ? <Header /> : null}

        {getMatch === "/login" ? <Login /> : null}
        {getMatch === "/register" ? <Register /> : null}
        {getMatch === "/home" ? <Home game={this.state.game} /> : null}
        {getMatch === "/wot" ? <Wot /> : null}
        {getMatch === "/wows" ? <Wows /> : null}
        {getMatch === "/wowp" ? <Wowp game={this.state.game} /> : null}
        {getMatch === "/detailWowp" ? <DetailWowp /> : null}
      </Fragment>
    );
  }
}

export default Aio;
