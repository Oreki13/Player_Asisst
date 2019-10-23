import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../css/detail.css";
const Cards = props => {
  // console.log(props.name);

  return (
    <div style={{ width: "250px" }}>
      <Row
        style={{
          width: "250px"
        }}
      >
        <Col md={5}>
          <Image
            src="https://worldofwarplanes.com/dcont/fb/achievements/updated_achievements/gorovets.png"
            roundedCircle
          />
        </Col>
        <Col className="tex justify-content-center align-self-center text-center">
          <h2>{props.rate}</h2>
          <p>{props.name}</p>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
