import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import card from "../images/c5-card.png";
class C5 extends Component {
  render() {
    return (
      <Container fluid className="c5 pr-0">
        <Row>
          <Col>
            <div className="c-h1 c4-h1">
              Get your junio Smart Card
              <br />
              Now !
            </div>
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
          <Col className="p-0 text-end">
            <img src={card} width="493px" height="311px" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default C5;
