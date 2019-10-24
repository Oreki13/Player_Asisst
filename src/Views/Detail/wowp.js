import React, { Component, Fragment } from "react";
import "../../css/detail.css";
import { Container, Row, Col, Image, Table } from "react-bootstrap";
import Cards from "../../Component/card";
import {
  getDetailWowp,
  getPlanes,
  getPlanesName
} from "../../Redux/Actions/Wowp";
import Bullet from "../../assets/bullets.svg";
import { connect } from "react-redux";

class detailWowp extends Component {
  state = {
    result: [],
    list_idPlanes: [],
    Planes: []
  };
  componentDidMount = async () => {
    const country = this.props.match.params.country;
    const id = this.props.match.params.id;
    // console.log("Ini COun", country);

    await this.props.dispatch(getDetailWowp(country, id));
    await this.props.dispatch(getPlanes(country, id));
    this.setState({
      result: this.props.details,
      list_idPlanes: this.props.idPlane
    });
    this.getPlanesNem();
  };

  getPlanesNem = async () => {
    const id = this.props.match.params.id;
    const planes = this.state.list_idPlanes;
    const country = this.props.match.params.country;
    // if (tank !== undefined) {
    // }
    let complet = [];

    await planes[id].map(async (plane, key) => {
      let planeId = plane.plane_id;
      await this.props.dispatch(getPlanesName(country, planeId));
      let planeNames = this.props.namePlane[planeId];
      if (planeNames !== null) {
        let tmp = {};
        let planeNam = planeNames.name;
        let planeImage = planeNames.images;

        tmp = { ...plane, planeNam, planeImage };
        complet.push(tmp);

        // tmp = { ...plane, planeNames };
        // await complet.push(tmp);

        this.setState({ Planes: complet });
      }
    });
  };
  render() {
    // console.log("LOG NAME GANNNN", this.props.match.params.country);
    // console.log("LOG ID GANN", this.props.match.params.id);
    console.log(this.state);
    const { result } = this.state;
    const { id } = this.props.match.params;
    console.log(result[id]);

    return (
      <Fragment>
        <div className="wowp-bg p-3">
          <Container>
            {result[id] !== undefined ? (
              <>
                <div className=" title-wowp text-break">
                  <h2>{result[id].nickname}</h2>
                  {/* <p>Created at 123123</p> */}
                </div>
                <div className="pt-1 d-flex justify-content-center">
                  <Cards
                    rate={result[id].statistics.all.battle_score}
                    name={"Battle Score"}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="d-flex">
                    <Cards
                      rate={result[id].statistics.all.players.damage_dealt}
                      name={"Total Damage"}
                    />
                    <Cards
                      rate={result[id].statistics.all.players.avg_killed}
                      name={"Average Killed"}
                    />
                    <Cards
                      rate={result[id].statistics.all.battles}
                      name={"Battles"}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <Cards
                    rate={result[id].statistics.all.players.max_damage_dealt}
                    name={"Max Damage"}
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
                <th>Name Plane</th>
                <th>Perang</th>
                <th>Damage Dealt</th>
                <th>Lose</th>
                <th>Win</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Planes.length > 0
                ? this.state.Planes.map((data, key) => {
                    return (
                      <>
                        <tr className="text-center">
                          <td style={{ width: 300 }}>
                            <Row>
                              <Col md={3}>
                                <Image src={data.planeImage.small} rounded />
                              </Col>
                              <Col md>
                                <p>{data.planeNam}</p>
                              </Col>
                            </Row>
                          </td>
                          <td>{data.all.battles}</td>
                          <td>{data.all.players.damage_dealt}</td>
                          <td>{data.all.losses}</td>
                          <td>{data.all.wins}</td>
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
              <div className="list-wowp">
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
              <div className="list-wowp">
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
    details: state.Wowp.detail,
    idPlane: state.Wowp.Plane,
    namePlane: state.Wowp.namePlane
  };
};

export default connect(mapStateToProps)(detailWowp);
