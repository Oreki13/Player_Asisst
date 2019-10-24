import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../css/detail.css";
const Cards = props => {
  // console.log(props.name);

  return (
    <div className="card-box">
      <Row
        style={{
          width: "280px"
        }}
      >
        <Col className="tex justify-content-center align-self-center text-center">
          <h2>{props.rate}</h2>
          <p>{props.name}</p>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
