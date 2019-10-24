import React, { Component, Fragment } from "react";
import Header from "../Component/Header";
import Login from "../Views/Auth/Login";
import Register from "../Views/Auth/Register";
import Home from "../Views/Home";
import Wot from "../Views/Game/wot";
import Wowp from "../Views/Game/wowp";
import Wows from "../Views/Game/wows";
import DetailWowp from "../Views/Detail/wowp";
import DetailWows from "../Views/Detail/wows";
import DetailWot from "../Views/Detail/wot";
import firebase from "../config/firebase";

class Aio extends Component {
  state = {
    game: [],
    loading: true
  };
  componentDidMount = async () => {
    const user = firebase.auth().currentUser;
    console.log("asd", user);

    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push("/");
      }
    });
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
        <Header />
        {/* {getMatch === "/" ? <Login {...this.props} /> : null} */}

        {/* {getMatch === "/login" ? <Login /> : null} */}

        {getMatch === "/home" ? <Home game={this.state.game} /> : null}
        {getMatch === "/wot" ? <Wot game={this.state.game} /> : null}
        {getMatch === "/wows" ? <Wows game={this.state.game} /> : null}
        {getMatch === "/wowp" ? <Wowp game={this.state.game} /> : null}
        {getMatch === "/detailWowp/:country/:id" ? (
          <DetailWowp {...this.props} />
        ) : null}
        {getMatch === "/detailWot/:country/:id" ? (
          <DetailWot {...this.props} />
        ) : null}
        {getMatch === "/detailWows/:country/:id" ? (
          <DetailWows {...this.props} />
        ) : null}
      </Fragment>
    );
  }
}

export default Aio;
