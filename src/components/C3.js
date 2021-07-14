import React, { Component } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import phone from "../images/c3-phone1.png";
import fig1 from "../images/c3-fig1.png";
import fig2 from "../images/c3-fig2.png";
import fig3 from "../images/c3-fig3.png";
import fig4 from "../images/c3-fig4.png";
import back from "../images/c3-back.png";

// import simpleParallax from "simple-parallax-js";

class C3 extends Component {
  componentDidMount() {
    if (window !== undefined) {
      const simpleParallax = require("simple-parallax-js");
      var image = document.getElementsByClassName("sp-thumb");
      new simpleParallax(image, {
        orientation: "left",
        overflow: "false",
        maxTransition: 60,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container
          fluid
          className="c3 c-pad"
          style={{ backgroundImage: `url(${back})` }}
        >
          <Row>
            <Col className="c3-col-1 col-md-8 col-sm-12 d-none d-md-block">
              {/*<div className="c3-blue">Mobile Application</div>*/}
              <div className="c-h1 mb-4">Junio - Child's Pocket Money App</div>
              <div className="c-h2 mb-4">
                Help your child grow into a financially responsible adult
              </div>
              <div>
                <Carousel className="carousel1" indicators={true}>
                  <Carousel.Item className="">
                    <div className="d-flex">
                      <Col>
                        <Card className="text-center ms-0 my-0 m-3 p-3 c-shadow h-100">
                          <img
                            className="mx-auto mb-4"
                            src={fig1}
                            // width="76px"
                            height="56px"
                          />
                          <div className="carousel-h1 mb-3">
                            Instant Transfers
                          </div>
                          <div className="c2-h2">
                            Transfer money to your child’s account anytime,
                            anywhere. And avoid the panic of any emergency.
                          </div>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="text-center my-0 m-3 p-3 c-shadow h-100">
                          <img
                            className="mx-auto mb-4"
                            src={fig2}
                            // width="76px"
                            height="56px"
                          />
                          <div className="carousel-h1 mb-3">
                            Allowance on autopilot​{" "}
                          </div>
                          <div className="c2-h2">
                            Weekly or monthly, you can set it and forget it.
                          </div>
                        </Card>
                      </Col>{" "}
                    </div>
                  </Carousel.Item>
                  <Carousel.Item className="">
                    <div className="d-flex">
                      <Col>
                        <Card className="text-center ms-0 my-0 m-3 p-3 c-shadow h-100">
                          <img
                            className="mx-auto mb-4"
                            src={fig3}
                            // width="76px"
                            height="56px"
                          />
                          <div className="carousel-h1 mb-3">
                            Real Time Notifications​
                          </div>
                          <div className="c2-h2">
                            Get real-time notifications any time whenever the
                            card is used.
                          </div>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="text-center my-0 m-3 p-3 c-shadow h-100">
                          <img
                            className="mx-auto mb-4"
                            src={fig4}
                            // width="76px"
                            height="56px"
                          />
                          <div className="carousel-h1 mb-3">
                            Child's Own Smart Card
                          </div>
                          <div className="c2-h2">
                            Buy online, in-store or anywhere that Mastercard™ is
                            accepted
                          </div>
                        </Card>
                      </Col>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col className="c3-col-1 col-md-8 col-sm-12 d-md-none">
              <div className="c-h1 mb-4">Junio - Child's Pocket Money App</div>
              <div className="c-h2 mb-4">
                Help your child grow into a financially responsible adult
              </div>
              <div>
                <Carousel className="carousel1" indicators={true}>
                  <Carousel.Item className="">
                    <div className="d-flex">
                      <Card className="text-center my-0 m-3 p-3 c-shadow">
                        <img
                          className="mx-auto mb-4"
                          src={fig1}
                          // width="76px"
                          height="56px"
                        />
                        <div className="carousel-h1 mb-3">
                          Instant Transfers
                        </div>
                        <div className="c2-h2">
                          Transfer money to your child’s account anytime,
                          anywhere. And avoid the panic of any emergency.
                        </div>
                      </Card>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item className="">
                    <div>
                      <Card className="text-center my-0 m-3 p-3 c-shadow">
                        <img
                          className="mx-auto mb-4"
                          src={fig2}
                          // width="76px"
                          height="56px"
                        />
                        <div className="carousel-h1 mb-3">
                          Allowance on autopilot​
                        </div>
                        <div className="c2-h2">
                          Weekly or monthly, you can set it and forget it.
                        </div>
                      </Card>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item className="">
                    <div className="d-flex">
                      <Card className="text-center my-0 m-3 p-3 c-shadow">
                        <img
                          className="mx-auto mb-4"
                          src={fig3}
                          // width="76px"
                          height="56px"
                        />
                        <div className="carousel-h1 mb-3">
                          Real Time Notifications​
                        </div>
                        <div className="c2-h2">
                          Get real-time notifications any time whenever the card
                          is used.
                        </div>
                      </Card>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item className="">
                    <div>
                      <Card className="text-center my-0 m-3 p-3 c-shadow">
                        <img
                          className="mx-auto mb-4"
                          src={fig4}
                          height="56px"
                        />
                        <div className="carousel-h1 mb-3">
                          Child's Own Smart Card
                        </div>
                        <div className="c2-h2">
                          Buy online, in-store or anywhere that Mastercard™ is
                          accepted
                        </div>
                      </Card>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>

            <Col
              className="c3-col-2 d-none d-md-flex flex-column-reverse"
              md="4"
            >
              <img className="sp-thumb" src={phone} height="520px" />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default C3;
