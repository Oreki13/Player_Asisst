import React, { Component, Fragment } from "react";
import "../../css/detail.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Cards from "../../Component/card";
import { getDetailWowp } from "../../Redux/Actions/Wowp";
import Bullet from "../../assets/bullets.svg";
import { connect } from "react-redux";

class detailWowp extends Component {
  state = {
    result: []
  };
  componentDidMount = async () => {
    const country = this.props.match.params.country;
    const id = this.props.match.params.id;
    // console.log("Ini COun", country);

    await this.props.dispatch(getDetailWowp(country, id));
    this.setState({ result: this.props.details });
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
                  <p>Created at 123123</p>
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
    details: state.Wowp.detail
  };
};

export default connect(mapStateToProps)(detailWowp);
