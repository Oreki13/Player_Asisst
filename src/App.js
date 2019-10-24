import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Auth from "./Layout/Auth";
import Home from "./Layout/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrap from "./Layout/AIO";
import { Provider } from "react-redux";
import Store from "./Redux/store";
import Register from "./Views/Auth/Register";
import Login from "./Views/Auth/Login";
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Route exact path="/" render={props => <Login {...props} />} />
        {/* <Route path="/login" render={props => <Wrap {...props} />} /> */}
        <Route path="/register" render={props => <Register {...props} />} />
        <Route path="/home" render={props => <Wrap {...props} />} />
        <Route path="/wot" render={props => <Wrap {...props} />} />
        <Route path="/wows" render={props => <Wrap {...props} />} />
        <Route path="/wowp" render={props => <Wrap {...props} />} />
        <Route
          path="/detailWowp/:country/:id"
          render={props => <Wrap {...props} />}
        />
        <Route
          path="/detailWot/:country/:id"
          render={props => <Wrap {...props} />}
        />
        <Route
          path="/detailWows/:country/:id"
          render={props => <Wrap {...props} />}
        />
      </Router>
    </Provider>
  );
}

export default App;
