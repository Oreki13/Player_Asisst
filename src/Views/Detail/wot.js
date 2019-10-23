import React, { Component, Fragment } from "react";
import "../../css/detail.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Cards from "../../Component/card";
import Wp from "../../assets/wot.jpg";

class detailWot extends Component {
  render() {
    return (
      <Fragment>
        <div className="wot-bg p-3">
          <Container>
            <div className=" title-wot text-break">
              <h2>Arfandy</h2>
              <p>Created at 123123</p>
            </div>
            <div className="pt-1 d-flex justify-content-center">
              <Cards rate={"1010"} name={"Battle Score"} />
            </div>
            <div className="d-flex justify-content-center">
              <div className="d-flex">
                <Cards rate={"1010"} name={"Total Damage"} />
                <Cards rate={"1010"} name={"Average Killed"} />
                <Cards rate={"1010"} name={"Battles"} />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Cards rate={"1010"} name={"Max Damage"} />
              <Cards rate={"1010"} name={"Wins"} />
              <Cards rate={"1010"} name={"Lose"} />
            </div>
          </Container>
        </div>
        {/* <Container className="mb-5 mt-4">
          <div className="d-flex justify-content-center">
            <div>
              <div className="text-left contain">
                <p>Flight By Plane Type</p>
              </div>
              <div className="list-wot">
                <p>Fighter: 1</p>
                <p>Tank : 2</p>
                <p>Medium : 3</p>
                <p>Heavy : 1</p>
              </div>
            </div>
            <div>
              <div className="text-left contain">
                <p>Awokwokw</p>
              </div>
              <div className="list-wot">
                <p>Awookwo</p>
                <p>lorem ipsum</p>
                <p>lorem</p>
                <p>lorem ipsum</p>
              </div>
            </div>
          </div>
        </Container> */}
      </Fragment>
    );
  }
}

export default detailWot;
