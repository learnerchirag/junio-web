import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import girl from "../images/c4-girl.png";
import pattern from "../images/c4-pattern.png";
import sticker1 from "../images/c4-sticker.png";
import sticker2 from "../images/c4-sticker2.png";
class C4 extends Component {
  render() {
    return (
      <React.Fragment>
        <img
          className="c4-pattern"
          src={pattern}
          width="474px"
          height="504px"
        />
        <img className="c4-sticker2" src={sticker2} height="64px" />
        <img className="c4-sticker1" src={sticker1} height="332px" />
        <Container fluid className="c4">
          <div className="c-h1 c4-h1 text-center">
            Junio card is the best gift for the juniors you love!
          </div>
          <div className="c4-h2 text-center">
            Junio is your
            <span className="bold">child's own smart card for</span>
            all their online and offline expenses
          </div>
          <Row>
            <Col className="c4-col-1">
              <img src={girl} width="600px" height="410px" />
            </Col>
            <Col className="c4-col-2">
              <div className="d-flex flex-column justify-content-center">
                <div className="c4-p1">Instant Transfers​</div>
                <div className="c4-d1">
                  Junio is your child's own smart card for all their online and
                  offline expenses. With the Junio card,{" "}
                </div>
                <div className="c4-p1">Tasks for children</div>
                <div className="c4-d1">
                  Junio is your child's own smart card for all their online and
                  offline expenses. With the Junio card,
                </div>
                <div className="c4-p1">Allowance on autopilot​</div>
                <div className="c4-d1">
                  Junio is your child's own smart card for all their online and
                  offline expenses. With the Junio card,
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default C4;
