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
        <img className="c4-pattern" src={pattern} width="auto" height="504px" />
        <img className="c4-sticker2" src={sticker2} height="64px" />
        <img className="c4-sticker1" src={sticker1} height="332px" />
        <Container fluid id="features" className="c4 c-pad">
          <div className="c-h1 c4-h1 text-center">
            Junio card is the best gift for the juniors you love!
          </div>
          <div className="c4-h2 text-center">
            Junio is your
            <span className="bold"> child's own smart card for </span>
            all their online and offline expenses
          </div>
          <Row>
            <Col className="c4-col-1 col-lg-auto col-12">
              <img className="c4-girl" src={girl} />
            </Col>
            <Col className="c4-col-2">
              <div className="d-flex flex-column justify-content-center mt-5 mt-lg-0">
                <div className="c4-p1">Instant Transfers​</div>
                <div className="c4-d1">
                  Transfer money to your child’s account anytime, anywhere. And
                  avoid the panic of any emergency.
                </div>
                <div className="c4-p1">Tasks for children</div>
                <div className="c4-d1">
                  Children can earn pocket money when they complete tasks that
                  you set. Incentivise desired behaviour with bonus additions
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
