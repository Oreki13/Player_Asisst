import React, { Component, Fragment } from "react";
import "../../css/detail.css";
import { Container, Row, Col, Image, Table } from "react-bootstrap";
import Cards from "../../Component/card";
import {
  getDetailWows,
  getShips,
  getShipsName
} from "../../Redux/Actions/Wows";
import Bullet from "../../assets/bullets.svg";
import { connect } from "react-redux";

class detailWows extends Component {
  state = {
    result: [],
    list_idShips: [],
    Ships: [],
    loading: true
  };
  componentDidMount = async () => {
    const country = this.props.match.params.country;
    const id = this.props.match.params.id;
    // let idTanks = this.props.details
    // console.log(idTanks);

    // console.log("Ini COun", country);

    await this.props.dispatch(getDetailWows(id, country));
    await this.props.dispatch(getShips(id, country));
    this.setState({
      result: this.props.details,
      list_idShips: this.props.getShips
    });
    await this.getShipsNem();
  };
  makeWinRate = (wins, battles) => {
    const rate = (wins / battles) * 100;
    const winRate = Math.floor(rate);
    return winRate + "%";
  };
  getShipsNem = async () => {
    const id = this.props.match.params.id;
    const ships = this.state.list_idShips;
    const country = this.props.match.params.country;
    // if (tank !== undefined) {
    // }
    let complet = [];

    await ships[id].map(async (ship, key) => {
      let shipId = ship.ship_id;
      await this.props.dispatch(getShipsName(country, ship.ship_id));
      let shipNames = this.props.getName[shipId];
      if (shipNames !== null) {
        let tmp = {};
        let shipName = shipNames.name;
        let shipImage = shipNames.images;
        let winRateCal = (ship.pvp.wins / ship.battles) * 100;
        let winRate = Math.floor(winRateCal);
        tmp = { ...ship, shipName, shipImage, winRate };
        complet.push(tmp);

        // tmp = { ...ship, shipNames };
        // await complet.push(tmp);

        this.setState({ Ships: complet });
      }
    });
  };
  render() {
    console.log(this.state);
    const { result } = this.state;
    const { id } = this.props.match.params;
    console.log("asdasd", result[id]);

    return (
      <Fragment>
        <div className="wows-bg p-3">
          <Container>
            {result[id] !== undefined ? (
              <>
                <div className=" title-wows text-break">
                  <h2>{result[id].nickname}</h2>
                </div>
                <div className="pt-1 d-flex justify-content-center">
                  <Cards
                    rate={this.makeWinRate(
                      result[id].statistics.pvp.wins,
                      result[id].statistics.battles
                    )}
                    name={"Win Rate"}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="d-flex">
                    <Cards
                      rate={result[id].statistics.pvp.damage_dealt}
                      name={"Total Damage"}
                    />
                    <Cards
                      rate={result[id].statistics.pvp.max_xp}
                      name={"Max Xp in Battle"}
                    />
                    <Cards
                      rate={result[id].statistics.battles}
                      name={"Battles"}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <Cards
                    rate={result[id].statistics.pvp.max_damage_scouting}
                    name={"Max Damage Scouting"}
                  />
                  <Cards rate={result[id].statistics.pvp.wins} name={"Wins"} />
                  <Cards
                    rate={result[id].statistics.pvp.losses}
                    name={"Lose"}
                  />
                </div>
              </>
            ) : null}
          </Container>
        </div>
        <Container className="mt-5">
          <Table striped bordered>
            <thead>
              <tr className="text-center">
                <th>Name Ship</th>
                <th>Perang</th>
                <th>Win Rate</th>
                <th>Damage Dealt</th>
                <th>Win</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Ships.length > 0
                ? this.state.Ships.map((data, key) => {
                    return (
                      <>
                        <tr className="text-center">
                          <td style={{ width: 300 }}>
                            <Row>
                              <Col md={3}>
                                <Image src={data.shipImage.small} rounded />
                              </Col>
                              <Col md>
                                <p>{data.shipName}</p>
                              </Col>
                            </Row>
                          </td>
                          <td>{data.battles}</td>
                          <td>{data.winRate} %</td>
                          <td>{data.pvp.damage_dealt}</td>
                          <td>{data.pvp.wins}</td>
                        </tr>
                      </>
                    );
                  })
                : null}
            </tbody>
          </Table>
        </Container>
        {/* <Container className="mb-5 mt-4">
          <div className="d-flex justify-content-center">
            <div>
              <div className="text-left contain">
                <p>Flight By Plane Type</p>
              </div>
              <div className="list-wows">
                <p>Fighter: 1</p>
                <p>ships : 2</p>
                <p>Medium : 3</p>
                <p>Heavy : 1</p>
              </div>
            </div>
            <div>
              <div className="text-left contain">
                <p>Awokwokw</p>
              </div>
              <div className="list-wows">
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
const mapStateToProps = state => {
  return {
    details: state.Wows.detail,
    getShips: state.Wows.ships,
    getName: state.Wows.nameShips
  };
};

export default connect(mapStateToProps)(detailWows);
