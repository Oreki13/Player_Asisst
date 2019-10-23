import React, { Component, Fragment } from "react";
import "../../css/game.css";
import {
  Container,
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup,
  Nav,
  Dropdown,
  DropdownButton,
  Form,
  Row,
  Col,
  Table,
  Card,
  Button
} from "react-bootstrap";
import { connect } from "react-redux";
import { getNameWows } from "../../Redux/Actions/Wows";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

class Wows extends Component {
  state = {
    country: "",
    nameCon: "",
    names: [],
    tmpName: "",
    result: false
  };
  handleChange = (coun, alias) => {
    this.setState({ country: coun, nameCon: alias });
  };

  handleInput = event => {
    this.setState({ tmpName: event.target.value });
  };
  getName = async event => {
    if (event.key === "Enter") {
      if (this.state.tmpName.length === 0) {
        Swal.fire({
          position: "center",
          type: "error",
          title: "Field do math",
          showConfirmButton: false,
          timer: 1500
        });
      } else if (this.state.country.length === 0) {
        Swal.fire({
          position: "center",
          type: "error",
          title: "Please Select the server",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        await this.props.dispatch(
          getNameWows(this.state.tmpName, this.state.country)
        );
        this.setState({ names: this.props.name, result: true });
      }
    }
  };

  render() {
    console.log(this.state);

    const country1 = [
      {
        name: "Europe",
        handel: "eu"
      },
      {
        name: "Rusia",
        handel: "ru"
      },
      {
        name: "Japan",
        handel: "com"
      },
      {
        name: "Asia",
        handel: "asia"
      }
    ];
    const games = this.props.game.filter(
      data => data.name !== "World of Warships"
    );
    console.log(games);

    return (
      <Fragment>
        <div className="img-wows">
          <Container>
            <div className="pt-4">
              <h2 className="text-center tex-title">World of Tanks</h2>
            </div>
            <div>
              <Row className="mt-5">
                <Col md={2}>
                  <DropdownButton
                    id="dropdown-item-button"
                    title="Select Server"
                    variant="dark"
                  >
                    {country1.map((count, key) => {
                      return (
                        <Dropdown.Item
                          onClick={() =>
                            this.handleChange(count.handel, count.name)
                          }
                        >
                          {count.name}
                        </Dropdown.Item>
                      );
                    })}
                  </DropdownButton>
                </Col>
                <Col>
                  <Form.Control
                    name="search"
                    type="text"
                    placeholder="Input UserName"
                    onChange={this.handleInput}
                    onKeyPress={this.getName}
                  />
                  <Form.Text className="text-white">
                    Selected Server:{" "}
                    {this.state.country.length > 0
                      ? this.state.nameCon
                      : "None"}
                  </Form.Text>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Container className="mt-4">
          {this.state.result === true && this.state.names.length > 0 ? (
            <>
              <h2>Result</h2>
              <Table striped bordered>
                <thead>
                  <tr className="text-center">
                    <th>UserName</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.names.map((data, key) => {
                    return (
                      <tr>
                        <td>{data.nickname}</td>
                        <td className="text-center">
                          <Link to="/detailWows">Detail</Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </>
          ) : this.state.result === true && this.state.names.length === 0 ? (
            <>
              <h2>Result</h2>
              <Table striped bordered>
                <thead>
                  <tr className="text-center">
                    <th>UserName</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td colSpan="2">Not Found</td>
                  </tr>
                </tbody>
              </Table>
            </>
          ) : null}
          {games.length > 0 ? (
            <>
              <h2>Select Another Game</h2>
              <div className="box justify-content-center">
                {games.map((data, key) => {
                  return (
                    <Card
                      style={{ width: "18rem", margin: 10 }}
                      className="text-center"
                    >
                      <Card.Img
                        variant="top"
                        src={data.img}
                        className="images"
                      />

                      <Card.Body>
                        <Card.Title className="text-center">
                          {data.name}
                        </Card.Title>
                        <Link to={`/${data.path}`}>
                          <Button variant="primary">Go Search</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </>
          ) : null}
        </Container>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    name: state.Wows.name
  };
};
export default connect(mapStateToProps)(Wows);
