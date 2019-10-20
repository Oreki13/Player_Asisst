import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Auth from "./Layout/Auth";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Route path="/auth" render={props => <Auth {...props} />} />
      <Redirect from="/" to="/auth/login" />
    </Router>
  );
}

export default App;
