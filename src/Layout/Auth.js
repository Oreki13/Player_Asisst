import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Auth } from "../routes";
import "../css/auth.css";
import Gambar from "../assets/auth/auth.jpg";
import { Row, Col, Container, Card, Button, Image } from "react-bootstrap";

const Auths = () => {
  const getRouter = pages => {
    return pages.map((page, key) => {
      console.log(page.layout);

      if (page.layout === "/") {
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
        <Row className="mt-5">
          <Col>
            <div className="justify-content-center lef p-3">
              <img
                style={{ marginLeft: "25%" }}
                src="http://www.oogazone.com/wp-content/uploads/2018/11/hd-vector-rifle-photos.jpg"
                width="50%"
                height="50%"
              />

              <div className="text-center">
                <h1>Welcome to Player Assist</h1>
              </div>
              <div>
                <h3>Search Player Status</h3>
                <h4>In Game </h4>
              </div>
              <div className="text-center">
                <Image
                  src="https://wallpaperplay.com/walls/full/c/6/e/342345.jpg"
                  roundedCircle
                  width="130px"
                  height="130px"
                  style={{ border: "1pxs", marginRight: 10, marginBottom: 10 }}
                />
                <Image
                  src="https://wallpaperplay.com/walls/full/c/6/e/342345.jpg"
                  roundedCircle
                  width="130px"
                  height="130px"
                  style={{ border: "1pxs", marginRight: 10, marginBottom: 10 }}
                />
                <Image
                  src="https://wallpaperplay.com/walls/full/c/6/e/342345.jpg"
                  roundedCircle
                  width="130px"
                  height="130px"
                  style={{ border: "1pxs", marginRight: 10, marginBottom: 10 }}
                />
                <Image
                  src="https://wallpaperplay.com/walls/full/c/6/e/342345.jpg"
                  roundedCircle
                  width="130px"
                  height="130px"
                  style={{ border: "1pxs", marginRight: 10, marginBottom: 10 }}
                />
                <Image
                  src="https://wallpaperplay.com/walls/full/c/6/e/342345.jpg"
                  roundedCircle
                  width="130px"
                  height="130px"
                  style={{ border: "1pxs", marginRight: 10, marginBottom: 10 }}
                />
              </div>
            </div>
          </Col>
          <Col>
            <Switch>{getRouter(Auth)}</Switch>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Auths;
