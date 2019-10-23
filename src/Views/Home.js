import React, { Component } from "react";
// import { View, Text, SafeAreaView, Image } from "react-native";
import {
  Container,
  Row,
  Col,
  Image,
  Spinner,
  Card,
  Button
} from "react-bootstrap";
import "../css/home.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    buffer: false
  };
  onBuf = () => {
    console.log("Piyuhhh");

    this.setState({ buffer: true });
  };
  render() {
    console.log("home", this.props.game);
    const { game } = this.props;
    return (
      <Container>
        {game.length === 0 ? (
          <div className="loadings">
            <Spinner animation="border" variant="info" />
          </div>
        ) : (
          <>
            <div className="text-center mt-4">
              <h2>Game List</h2>
            </div>
            <div className="box justify-content-center">
              {game.map((list, key) => {
                return (
                  <Card
                    style={{ width: "18rem", margin: 10 }}
                    className="text-center"
                  >
                    {this.state.buffer ? (
                      <ReactPlayer
                        url={list.video}
                        playing
                        loop
                        muted
                        controls={false}
                        onBuffer={() => this.setState({ buffer: true })}
                        youtubeConfig={{
                          playerVars: {
                            modestbranding: 1,
                            disablekb: 1,
                            showinfo: 0
                          }
                        }}
                        width="100%"
                        height="100%"
                        className="play"
                      />
                    ) : (
                      <Card.Img
                        variant="top"
                        src={list.img}
                        className="images"
                      />
                    )}

                    <Card.Body>
                      <Card.Title className="text-center">
                        {list.name}
                      </Card.Title>
                      <Link to={`/${list.path}`}>
                        <Button variant="primary">Go Search</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                  // <>
                  //   <Image className="m-3 images" src={list.img} thumbnail />
                  //   <h3>as</h3>
                  // </>
                );
              })}
              {/* <Card style={{ width: "18rem", margin: 10 }}>
                <Card.Img variant="top" src="asd" className="images" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", margin: 10 }}>
                <Card.Img variant="top" src="asd" className="images" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", margin: 10 }}>
                <Card.Img variant="top" src="asd" className="images" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", margin: 10 }}>
                <Card.Img variant="top" src="asd" className="images" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card> */}

              {/* <Image
                className="m-3"
                style={{ maxWidth: 300, maxHeight: 300 }}
                src="https://pngriver.com/wp-content/uploads/2018/04/Download-Anime-PNG.png"
                thumbnail
              />
              <Image
                className="m-3"
                style={{ maxWidth: 300, maxHeight: 300 }}
                src="https://pngriver.com/wp-content/uploads/2018/04/Download-Anime-PNG.png"
                thumbnail
              />
              <Image
                className="m-3"
                style={{ maxWidth: 300, maxHeight: 300 }}
                src="https://pngriver.com/wp-content/uploads/2018/04/Download-Anime-PNG.png"
                thumbnail
              />
              <Image
                className="m-3"
                style={{ maxWidth: 300, maxHeight: 300 }}
                src="https://pngriver.com/wp-content/uploads/2018/04/Download-Anime-PNG.png"
                thumbnail
              />
              <Image
                className="m-3"
                style={{ maxWidth: 300, maxHeight: 300 }}
                src="https://pngriver.com/wp-content/uploads/2018/04/Download-Anime-PNG.png"
                thumbnail
              />
              <Image
                className="m-3"
                style={{ maxWidth: 300, maxHeight: 300 }}
                src="https://pngriver.com/wp-content/uploads/2018/04/Download-Anime-PNG.png"
                thumbnail
              />
              <Image
                className="m-3"
                style={{ maxWidth: 300, maxHeight: 300 }}
                src="https://pngriver.com/wp-content/uploads/2018/04/Download-Anime-PNG.png"
                thumbnail
              /> */}
            </div>
          </>
        )}
      </Container>
    );
  }
}

export default Home;
