import React, { Component } from "react";
import { Col, Container } from "react-bootstrap";
import rating from "../images/rating.png";
import playStore from "../images/c2-ps.png";
import appStore from "../images/c2-as.png";
import sticker1 from "../images/c4-sticker.png";
import sticker2 from "../images/c4-sticker2.png";

class C2 extends Component {
  componentDidMount() {
    if (window !== undefined) {
      const simpleParallax = require("simple-parallax-js");
      var image = document.getElementsByClassName("sp-thumb1");
      new simpleParallax(image, {
        orientation: "down",
        overflow: "false",
        maxTransition: 80,
      });
      var image2 = document.getElementsByClassName("sp-thumb2");
      new simpleParallax(image2, {
        orientation: "left",
        overflow: "false",
        maxTransition: 80,
      });
    }
  }
  render() {
    return (
      <Container fluid className="c2 c-pad">
        <img className="c2-sticker1 sp-thumb1" src={sticker1} height="332px" />
        <img
          className="c2-sticker2 sp-thumb2 d-none d-md-block"
          src={sticker2}
          height="64px"
        />
        <div className="row d-flex justify-content-center">
          <div className="col col-md-auto text-center c2-rate col-12" sm="12">
            <img src={rating} height="180px" />
          </div>
          <div className="col col-md-auto d-flex flex-column justify-content-center text-center text-md-start">
            <div className="c-h1 c2-h1">Trusted by 1 Lakh+ Users!</div>
            <div className="c2-h2 mb-4">
              Download the Junio app for your mobile device
            </div>
            <div className="row d-flex justify-content-md-start justify-content-center">
              <Col className="col-auto d-none d-md-block ">
                <a
                  href="https://play.google.com/store/apps/details?id=in.junio"
                  target="_blank"
                >
                  <img src={playStore} height="64px" />
                </a>
              </Col>
              {/* <Col className="col-auto d-none d-md-block">
                <img src={appStore} height="64px" />
              </Col> */}
              <Col className="col-auto d-md-none ">
                <a
                  href="https://play.google.com/store/apps/details?id=in.junio"
                  target="_blank"
                >
                  <img src={playStore} height="42px" />
                </a>
              </Col>
              {/* <Col className="col-auto d-md-none">
                <img src={appStore} height="42px" />
              </Col> */}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default C2;
