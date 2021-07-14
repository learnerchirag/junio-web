import React, { Component } from "react";
import { Button, Col, Container, FormControl, Row } from "react-bootstrap";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

class C9 extends Component {
  render() {
    return (
      <Container fluid className="c9 c-pad">
        {/*<Col className="col-12 col-md-4 order-3 order-md-1 mt-4 mt-md-0">
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
          <Col className="c9-d1 order-md-2">
            <div className="c9-p1">About</div>
            <div className="c9-p1">Features</div>
            <div className="c9-p1">Templates</div>
            <div className="c9-p1">Integrations</div>
            <div className="c9-p1">Team</div>
          </Col>
          <Col className="c9-d1 order-md-3">
            <div className="c9-p1">Resources</div>
            <div className="c9-p1">EBooks</div>
            <div className="c9-p1">Infographics</div>
            <div className="c9-p1">Tools</div>
            <div className="c9-p1">Videos</div>
            <div className="c9-p1">Podcasts</div>
          </Col>
    
          <Col className="c9-d1 col-auto text-center d-none d-md-block order-md-4">
            <div>
              <Button className="btn-gradient px-3 py-2">Help & Support</Button>
            </div>
            <div>or Learn More</div>
          </Col>
        */}
        <div
          className="row d-flex c9-d1"
          style={{ justifyContent: "space-between" }}
        >
          <Col className="d-flex col-12 col-lg-6">
            {/*// <link href="https://junio.in/terms/" target="_blank">
            //   Terms of Services
      // </link>*/}
            <a href="https://junio.in/terms/" target="_blank">
              Terms of Services
            </a>
            <a href="https://junio.in/terms/" target="_blank" className="mx-5">
              Privacy Policy
            </a>
          </Col>
          <Col className="text-start text-lg-end mt-4 mt-md-0">
            2020 Firstpay Technologies Private Limited copyright
          </Col>
        </div>
        <Row className="justify-content-end">
          <Col className="col-md-auto px-2">
            <a target="_blank" href="https://www.facebook.com/JunioIndia">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </Col>
          <Col className="col-md-auto px-2">
            <a target="_blank" href="https://www.instagram.com/junio_in/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </Col>
          <Col className="col-md-auto px-2">
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCZIRTZYoelCMox8Gvp6SOpw"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </Col>
          <Col className="col-md-auto px-2">
            <a target="_blank" href="https://twitter.com/junio_in">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Col>
          <Col className="col-md-auto px-2">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/junio-smart-card/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default C9;
