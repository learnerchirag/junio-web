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
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          paddingInline: "120px",
        }}
      >
        <Row className="h-100">
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingInline: "0px",
            }}
          >
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                fontFamily: "Poppins bold",
                marginBottom: "32px",
              }}
            >
              The Smart Card for <br />
              Child's pocket money
            </h1>
            <div style={{ fontSize: "16px", fontWeight: "700" }}>
              Get our ios or Android app
            </div>
            <div
              style={{
                marginBottom: "36px",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Input your number below and we will send you an app
              <br /> download link.
            </div>
            <Card
              style={{
                borderRadius: "30px",
                paddingLeft: "24px",
                marginBottom: "40px",
                width: "fit-content",
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
                    height: "50%",
                    marginInline: "4px",
                  }}
                ></span>
                <FormControl
                  placeholder="9999999999"
                  aria-label=""
                  aria-describedby="basic-addon1"
                  style={{ border: "none", width: "auto" }}
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
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default C1;
