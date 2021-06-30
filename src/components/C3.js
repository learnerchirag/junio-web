import React, { Component } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import phone from "../images/c3-phone1.png";
import fig1 from "../images/c3-fig1.png";
import back from "../images/c3-back.png";
class C3 extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid className="c3">
          <Row>
            <img
              src={back}
              height="362px"
              width="100%"
              style={{
                position: "absolute",
                left: "0",
                marginTop: "-40px",
                zIndex: -1,
              }}
            />
            <Col className="c3-col-1 col-8">
              <div className="c3-blue">Mobile Application</div>
              <div className="c-h1 mb-4">Junio - Child's Pocket Money App</div>
              <div className="c-h2 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim,
                in at ipsum ac tristique semper auctor adipiscing eu.
              </div>
              <div>
                <Carousel>
                  <Carousel.Item>
                    <div className="d-flex">
                      <Card className="text-center ms-0 m-3 pb-5 p-3 c-shadow">
                        <img
                          className="mx-auto mb-4"
                          src={fig1}
                          width="76px"
                          height="56px"
                        />
                        <div className="carousel-h1 mb-3">
                          Instant Transfers
                        </div>
                        <div className="c2-h2">
                          Add funds instantly anytime, anywhere. And relax.
                        </div>
                      </Card>
                      <Card className="text-center m-3 pb-5 p-3 c-shadow">
                        <img
                          className="mx-auto mb-4"
                          src={fig1}
                          width="76px"
                          height="56px"
                        />
                        <div className="carousel-h1 mb-3">
                          Instant Transfers
                        </div>
                        <div className="c2-h2">
                          Add funds instantly anytime, anywhere. And relax.
                        </div>
                      </Card>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="d-flex">
                      <Card className="text-center ms-0 m-3 pb-5 p-3 c-shadow">
                        <img
                          className="mx-auto mb-4"
                          src={fig1}
                          width="76px"
                          height="56px"
                        />
                        <div className="carousel-h1 mb-3">
                          Instant Transfers
                        </div>
                        <div className="c2-h2">
                          Add funds instantly anytime, anywhere. And relax.
                        </div>
                      </Card>
                      <Card className="text-center m-3 pb-5 p-3 c-shadow">
                        <img
                          className="mx-auto mb-4"
                          src={fig1}
                          width="76px"
                          height="56px"
                        />
                        <div className="carousel-h1 mb-3">
                          Instant Transfers
                        </div>
                        <div className="c2-h2">
                          Add funds instantly anytime, anywhere. And relax.
                        </div>
                      </Card>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col className="c3-col-2" md="4">
              <img src={phone} height="520px" />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default C3;
