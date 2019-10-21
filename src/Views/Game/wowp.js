import React, { Component, Fragment } from "react";
import "../../css/game.css";
import { Container } from "react-bootstrap";
class Wowp extends Component {
  render() {
    return (
      <Fragment>
        <div className="img-wowp">
          <Container>
            <div>
              <h2 className="text-center tex-title">World of Warplanes</h2>
            </div>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Wowp;
