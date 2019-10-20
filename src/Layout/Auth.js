import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "../routes";
import "../css/auth.css";
import Gambar from "../assets/auth/auth.jpg";
import { Row, Col, Container, Card, Button } from "react-bootstrap";

const Auth = () => {
  const getRouter = pages => {
    console.log(Routes);

    return pages.map((page, key) => {
      console.log(page.layout);

      if (page.layout === "/auth") {
        return (
          <Route
            path={page.layout + page.path}
            render={props => <page.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <Fragment>
      <Container>
        <Row>
          {/* <img src={Gambar} /> */}
          <Col>
            <div style={{ backgroundColor: "red", height: 400 }}>
              <h1>Heloo</h1>
              <h1>Hwew</h1>
            </div>
          </Col>
          <Col>
            <Switch>{getRouter(Routes)}</Switch>
          </Col>
        </Row>
        {/* <div className="bodys">
      </div> */}
      </Container>
    </Fragment>
  );
};

export default Auth;
