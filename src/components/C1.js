import React, { Component } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import background from "../images/c1-back.png";
import googlePlay from "../images/hero-google-play.png";
import apple from "../images/hero-apple.png";
class C1 extends Component {
  render() {
    return (
      <Container
        fluid
        id="home"
        className="c1 c-pad"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <Row className="h-100">
          <Col className="d-flex flex-column justify-content-center col-12 col-md-6">
            <h1 className="c1-h1 mb-5">
              The Smart Card
              <br className="c1-br" /> for Child's<span> pocket money</span>
            </h1>
            <div className="c1-h2">Get our ios or Android app</div>
            <div
              style={{
                marginBottom: "36px",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Input your number below and we will send you an app download link.
            </div>
            <Card
              style={{
                borderRadius: "30px",
                paddingLeft: "24px",
                marginBottom: "40px",
                width: "100%",
                maxWidth: "520px",
              }}
            >
              <div className="d-flex align-items-center">
                <div
                  className="d-flex"
                  style={{ color: "#1E0E62", alignItems: "center" }}
                >
                  91
                </div>
                <span
                  style={{
                    backgroundColor: "#1E0E62",
                    width: "2px",
                    height: "34%",
                    marginInline: "10px",
                  }}
                ></span>
                <FormControl
                  placeholder="9999999999"
                  aria-label=""
                  aria-describedby="basic-addon1"
                  style={{ border: "none" }}
                  className="ps-0"
                />
                <Button
                  className="btn-gradient"
                  style={{
                    padding: "16px 40px",
                    borderRadius: "30px",
                    marginLeft: "auto",
                  }}
                >
                  Send link
                </Button>
              </div>
            </Card>

            <div>
              App available on <img src={googlePlay} height="40px" />{" "}
              <img src={apple} height="40px" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default C1;
