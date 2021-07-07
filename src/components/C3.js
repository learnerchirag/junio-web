import React, { Component } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import phone from "../images/c3-phone1.png";
import fig1 from "../images/c3-fig1.png";
import back from "../images/c3-back.png";
class C3 extends Component {
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
              <div className="c3-blue">Mobile Application</div>
              <div className="c-h1 mb-4">Junio - Child's Pocket Money App</div>
              <div className="c-h2 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim,
                in at ipsum ac tristique semper auctor adipiscing eu.
              </div>
              <div>
                <Carousel className="carousel1" indicators={true}>
                  <Carousel.Item className="mb-5">
                    <div className="d-flex">
                      <Card className="text-center ms-0 m-3 p-3 c-shadow">
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
                      <Card className="text-center m-3 p-3 c-shadow">
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
                  <Carousel.Item className="mb-5">
                    <div className="d-flex">
                      <Card className="text-center ms-0 m-3 p-3 c-shadow">
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
                      <Card className="text-center m-3 p-3 c-shadow">
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
            <Col className="c3-col-1 col-md-8 col-sm-12 d-md-none">
              <div className="c3-blue">Mobile Application</div>
              <div className="c-h1 mb-4">Junio - Child's Pocket Money App</div>
              <div className="c-h2 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim,
                in at ipsum ac tristique semper auctor adipiscing eu.
              </div>
              <div>
                <Carousel className="carousel1" indicators={true}>
                  <Carousel.Item className="mb-5">
                    <div className="d-flex">
                      <Card className="text-center m-3 p-3 c-shadow">
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
                  <Carousel.Item className="mb-5">
                    <div>
                      <Card className="text-center m-3 p-3 c-shadow">
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
                  <Carousel.Item className="mb-5">
                    <div className="d-flex">
                      <Card className="text-center m-3 p-3 c-shadow">
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
                  <Carousel.Item className="mb-5">
                    <div>
                      <Card className="text-center m-3 p-3 c-shadow">
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

            <Col
              className="c3-col-2 d-none d-md-flex flex-column-reverse"
              md="4"
            >
              <img src={phone} height="520px" />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default C3;
