import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import card from "../images/c5-card.png";
import card2 from "../images/c5-card2.png";
import sticker from "../images/c5-sticker2.png";

class C5 extends Component {
  componentDidMount() {
    if (window !== undefined) {
      const simpleParallax = require("simple-parallax-js");
      var image = document.getElementsByClassName("sp-thumb1");
      new simpleParallax(image, {
        orientation: "up",
        overflow: "false",
        maxTransition: 80,
      });
      var image2 = document.getElementsByClassName("sp-thumb2");
      new simpleParallax(image2, {
        orientation: "left",
        overflow: "false",
        maxTransition: 60,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <img className="c5-sticker" src={sticker} />
        <Container fluid className="c5 pe-md-0 c-pad">
          <Row>
            <Col className="order-2 order-md-1 col-md-6">
              <div className="c-h1 c5-h1">Get your Junio Smart Card Now !</div>
              <div className="c4-d1">
                With their own Junio card, teens have the opportunity to learn
                financial accountability and budgeting from an early age.
              </div>
              <div>
                <Button className="c5-button btn-pri">
                  Get your Junio Smart Card
                </Button>
              </div>
            </Col>
            <Col className="order-1 order-md-2 p-0 text-end d-none d-md-block">
              <img
                className="sp-thumb2"
                src={card}
                width="493px"
                height="311px"
              />
            </Col>
            <Col className="col-12 order-1 order-md-2 text-center d-md-none">
              <img className="sp-thumb1" src={card2} width="75%" />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default C5;
