import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import card from "../images/c5-card.png";
import card2 from "../images/c5-card2.png";
import sticker from "../images/c5-sticker2.png";
class C5 extends Component {
  render() {
    return (
      <React.Fragment>
        <img className="c5-sticker" src={sticker} />
        <Container fluid className="c5 pe-md-0 c-pad">
          <Row>
            <Col className="order-2 order-md-1 col-md-6">
              <div className="c-h1 c5-h1">Get your junio Smart Card Now !</div>
              <div className="c4-d1">
                Junio is your child's own smart card for all their online and
                offline expenses. With the Junio card,
              </div>
              <div>
                <Button className="c5-button btn-pri">
                  Get your Junio Smart Card
                </Button>
              </div>
            </Col>
            <Col className="order-1 order-md-2 p-0 text-end d-none d-md-block">
              <img src={card} width="493px" height="311px" />
            </Col>
            <Col className="col-12 order-1 order-md-2 text-center d-md-none">
              <img src={card2} width="75%" />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default C5;
