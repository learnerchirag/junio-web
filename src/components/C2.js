import React, { Component } from "react";
import { Container } from "react-bootstrap";
import rating from "../images/rating.png";
import playStore from "../images/c2-ps.png";
import appStore from "../images/c2-as.png";
class C2 extends Component {
  render() {
    return (
      <Container fluid className="c2">
        <div className="d-flex justify-content-center">
          <div className="c2-rate">
            <img src={rating} height="208px" />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <div className="c-h1 c2-h1">Get your Junio App</div>
            <div className="c2-h2 mb-4">
              Help your child grow into a financially responsible adult
            </div>
            <div className="d-flex">
              <img className="me-3" src={playStore} height="64px" />
              <img src={appStore} height="64px" />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default C2;
