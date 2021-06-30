import React, { Component } from "react";
import { Button, Col, Container, FormControl, Row } from "react-bootstrap";

class C9 extends Component {
  render() {
    return (
      <Container fluid className="c9">
        <Row>
          <Col className="col-4">
            <div className="c9-h1">
              Send Junio App Link to your mobile number
            </div>
            <div className="c9-d1" style={{ marginBottom: "32px" }}>
              Junio is your child's own smart card for all their online and
              offline expenses
            </div>
            <div className="d-flex">
              <FormControl placeholder="Phone Number" />
              <Button className="btn-sec ms-2">Get App Link</Button>
            </div>
          </Col>
          <Col className="c9-d1" style={{ paddingLeft: "120px" }}>
            <div className="c9-p1">About</div>
            <div className="c9-p1">Features</div>
            <div className="c9-p1">Templates</div>
            <div className="c9-p1">Integrations</div>
            <div className="c9-p1">Team</div>
          </Col>
          <Col className="c9-d1">
            <div className="c9-p1">Resources</div>
            <div className="c9-p1">EBooks</div>
            <div className="c9-p1">Infographics</div>
            <div className="c9-p1">Tools</div>
            <div className="c9-p1">Videos</div>
            <div className="c9-p1">Podcasts</div>
          </Col>
          <Col className="c9-d1 col-auto text-center">
            <div>
              <Button className="btn-gradient px-3 py-2">Help & Support</Button>
            </div>
            <div>or Learn More</div>
          </Col>
        </Row>
        <div
          className="d-flex c9-d1"
          style={{ justifyContent: "space-between" }}
        >
          <div className="d-flex">
            <div>Terms of Services</div>
            <div className="mx-5">Privacy Policy</div>
          </div>
          <div>2020 Firstpay Technologies Private Limited copyright</div>
        </div>
      </Container>
    );
  }
}

export default C9;
