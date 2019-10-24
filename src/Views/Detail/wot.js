import React, { Component, Fragment } from "react";
import "../../css/detail.css";
import { Container, Row, Col, Image, Table } from "react-bootstrap";
import Cards from "../../Component/card";
import { getDetailWot, getTanks, getTanksName } from "../../Redux/Actions/Wot";
import Bullet from "../../assets/bullets.svg";
import { connect } from "react-redux";

class detailWot extends Component {
  state = {
    result: [],
    list_idTank: [],
    Tank: [],
    loading: true
  };
  componentDidMount = async () => {
    const country = this.props.match.params.country;
    const id = this.props.match.params.id;
    // let idTanks = this.props.details
    // console.log(idTanks);

    // console.log("Ini COun", country);

    await this.props.dispatch(getDetailWot(id, country));
    await this.props.dispatch(getTanks(id, country));
    this.setState({
      result: this.props.details,
      list_idTank: this.props.getTank
    });
    await this.getTankNem();
  };
  getTankNem = async () => {
    const id = this.props.match.params.id;
    const tanks = this.state.list_idTank;
    const country = this.props.match.params.country;
    console.log("Ini Tanks", tanks);
    // if (tank !== undefined) {
    // }
    let complet = [];

    await tanks[id].map(async (tank, key) => {
      let tmp = {};
      await this.props.dispatch(getTanksName(country, tank.tank_id));
      let tankId = tank.tank_id;
      let tankName = this.props.getName[tankId].short_name;
      let tankImage = this.props.getName[tankId].images;
      let winRateCal = (tank.all.wins / tank.all.battles) * 100;
      let winRate = Math.floor(winRateCal);

      tmp = { ...tank, tankName, winRate, tankImage };
      await complet.push(tmp);
      this.setState({ Tank: complet });
    });
  };
  render() {
    console.log(this.state.Tank);

    console.log(this.state);
    const { result } = this.state;
    const { id } = this.props.match.params;
    console.log(result[id]);

    return (
      <Fragment>
        <div className="wot-bg p-3">
          <Container>
            {result[id] !== undefined ? (
              <>
                <div className=" title-wot text-break">
                  <h2>{result[id].nickname}</h2>
                </div>
                <div className="pt-1 d-flex justify-content-center">
                  <Cards rate={result[id].global_rating} name={"Ratings"} />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="d-flex">
                    <Cards
                      rate={result[id].statistics.all.damage_dealt}
                      name={"Total Damage"}
                    />
                    <Cards
                      rate={result[id].statistics.all.max_xp}
                      name={"Max Xp in Battle"}
                    />
                    <Cards
                      rate={result[id].statistics.all.battles}
                      name={"Battles"}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <Cards
                    rate={result[id].statistics.all.avg_damage_blocked}
                    name={"Average Damage Blocked"}
                  />
                  <Cards rate={result[id].statistics.all.wins} name={"Wins"} />
                  <Cards
                    rate={result[id].statistics.all.losses}
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
                <th>Name Tank</th>
                <th>Perang</th>
                <th>Win Rate</th>
                <th>Xp per Game</th>
                <th>Mastery</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Tank.length > 0
                ? this.state.Tank.map((data, key) => {
                    return (
                      <>
                        <tr className="text-center">
                          <td style={{ width: 300 }}>
                            <Row>
                              <Col md={3}>
                                <Image
                                  src={data.tankImage.small_icon}
                                  rounded
                                />
                              </Col>
                              <Col md>
                                <p>{data.tankName}</p>
                              </Col>
                            </Row>
                          </td>
                          <td>{data.all.battles}</td>
                          <td>{data.winRate} %</td>
                          <td>{data.all.battle_avg_xp}</td>
                          <td>{data.mark_of_mastery}</td>
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
const mapStateToProps = state => {
  return {
    details: state.Wot.detail,
    getTank: state.Wot.tanks,
    getName: state.Wot.nameTanks
  };
};

export default connect(mapStateToProps)(detailWot);
