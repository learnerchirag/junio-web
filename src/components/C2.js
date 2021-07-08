import React, { Component } from "react";
import { Col, Container } from "react-bootstrap";
import rating from "../images/rating.png";
import playStore from "../images/c2-ps.png";
import appStore from "../images/c2-as.png";
class C2 extends Component {
  render() {
    return (
      <Container fluid className="c2 c-pad">
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
              <Col className="col-auto d-none d-md-block me-3">
                <img src={playStore} height="64px" />
              </Col>
              <Col className="col-auto d-none d-md-block">
                <img src={appStore} height="64px" />
              </Col>
              <Col className="col-auto d-md-none me-3">
                <img src={playStore} height="42px" />
              </Col>
              <Col className="col-auto d-md-none">
                <img src={appStore} height="42px" />
              </Col>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default C2;
