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
  Table
} from "react-bootstrap";
import { connect } from "react-redux";
import { getNameWowp } from "../../Redux/Actions/Wowp";

class Wowp extends Component {
  state = {
    country: "",
    names: [],
    tmpName: ""
  };
  handleChange = coun => {
    this.setState({ country: coun });
  };

  handleInput = event => {
    this.setState({ tmpName: event.target.value });
  };
  getName = async event => {
    if (event.key === "Enter") {
      await this.props.dispatch(
        getNameWowp(this.state.tmpName, this.state.country)
      );
      this.setState({ names: this.props.name });
    }
  };

  render() {
    console.log(this.state);

    const country1 = [
      {
        name: "Eu",
        handel: "eu"
      },
      {
        name: "Ru",
        handel: "ru"
      },
      {
        name: "Na",
        handel: "na"
      },
      {
        name: "Asia",
        handel: "asia"
      }
    ];
    return (
      <Fragment>
        <div className="img-wowp">
          <Container>
            <div className="pt-4">
              <h2 className="text-center tex-title">World of Warplanes</h2>
            </div>
            <div>
              <Row className="mt-5">
                <Col md={2}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Select Server"
                  >
                    {country1.map((count, key) => {
                      return (
                        <Dropdown.Item
                          onClick={() => this.handleChange(count.handel)}
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
                      ? this.state.country
                      : "None"}
                  </Form.Text>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    name: state.Wowp.name
  };
};
export default connect(mapStateToProps)(Wowp);
