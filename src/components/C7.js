import React, { Component } from "react";
import { Card, Carousel, Col, Container } from "react-bootstrap";
import fig1 from "../images/c7-fig1.png";
import person from "../images/c7-person.png";
class C7 extends Component {
  render() {
    return (
      <Container fluid id="testimonials" className="c7 text-center c-pad">
        <div className="c-h1 c7-h1">What People Say About Us</div>
        <div className="row mx-auto">
          <Col className="d-md-none">
            <Carousel>
              <Carousel.Item className="">
                <div className="carousel2 d-flex justify-content-center">
                  <div>
                    <img className="mx-auto" src={person} width="120px" />
                    <Card className="text-center m-3 p-3 c-shadow">
                      <div className="c-h2 carousel2-h1">
                        Junio is your child's own{" "}
                        <span style={{ fontFamily: "Poppins Bold" }}>
                          smart card for all their online
                        </span>{" "}
                        and offline expenses. With the Junio card, Junio is your
                        child's own smart card
                      </div>
                      <div className="c6-green">Arjun Kapoor</div>
                      <div className="c2-h2">Parent</div>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="">
                <div className="carousel2 d-flex justify-content-center">
                  <div>
                    <img className="mx-auto" src={person} width="120px" />
                    <Card className="text-center m-3 p-3 c-shadow">
                      <div className="c-h2 carousel2-h1">
                        Junio is your child's own{" "}
                        <span style={{ fontFamily: "Poppins Bold" }}>
                          smart card for all their online
                        </span>{" "}
                        and offline expenses. With the Junio card, Junio is your
                        child's own smart card
                      </div>
                      <div className="c6-green">Arjun Kapoor</div>
                      <div className="c2-h2">Parent</div>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="">
                <div className="carousel2 d-flex justify-content-center">
                  <div>
                    <img className="mx-auto" src={person} width="120px" />
                    <Card className="text-center m-3 p-3 c-shadow">
                      <div className="c-h2 carousel2-h1">
                        Junio is your child's own{" "}
                        <span style={{ fontFamily: "Poppins Bold" }}>
                          smart card for all their online
                        </span>{" "}
                        and offline expenses. With the Junio card, Junio is your
                        child's own smart card
                      </div>
                      <div className="c6-green">Arjun Kapoor</div>
                      <div className="c2-h2">Parent</div>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="">
                <div className="carousel2 d-flex justify-content-center">
                  <div>
                    <img className="mx-auto" src={person} width="120px" />
                    <Card className="text-center m-3 p-3 c-shadow">
                      <div className="c-h2 carousel2-h1">
                        Junio is your child's own{" "}
                        <span style={{ fontFamily: "Poppins Bold" }}>
                          smart card for all their online
                        </span>{" "}
                        and offline expenses. With the Junio card, Junio is your
                        child's own smart card
                      </div>
                      <div className="c6-green">Arjun Kapoor</div>
                      <div className="c2-h2">Parent</div>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="d-none d-md-block">
            <Carousel interval={null}>
              <Carousel.Item className="">
                <div className="carousel2 d-flex justify-content-center">
                  <div>
                    <img className="mx-auto" src={person} width="120px" />
                    <Card className="text-center m-3 p-3 c-shadow">
                      <div className="c-h2 carousel2-h1">
                        Junio is your child's own{" "}
                        <span style={{ fontFamily: "Poppins Bold" }}>
                          smart card for all their online
                        </span>{" "}
                        and offline expenses. With the Junio card, Junio is your
                        child's own smart card
                      </div>
                      <div className="c6-green">Arjun Kapoor</div>
                      <div className="c2-h2">Parent</div>
                    </Card>
                  </div>
                  <div>
                    <img className="mx-auto" src={person} width="120px" />
                    <Card className="text-center m-3 p-3 c-shadow">
                      <div className="c-h2 carousel2-h1">
                        Junio is your child's own{" "}
                        <span style={{ fontFamily: "Poppins Bold" }}>
                          smart card for all their online
                        </span>{" "}
                        and offline expenses. With the Junio card, Junio is your
                        child's own smart card
                      </div>
                      <div className="c6-green">Arjun Kapoor</div>
                      <div className="c2-h2">Parent</div>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="">
                <div className="carousel2 d-flex justify-content-center">
                  <div>
                    <img className="mx-auto" src={person} width="120px" />
                    <Card className="text-center m-3 p-3 c-shadow">
                      <div className="c-h2 carousel2-h1">
                        Junio is your child's own{" "}
                        <span style={{ fontFamily: "Poppins Bold" }}>
                          smart card for all their online
                        </span>{" "}
                        and offline expenses. With the Junio card, Junio is your
                        child's own smart card
                      </div>
                      <div className="c6-green">Arjun Kapoor</div>
                      <div className="c2-h2">Parent</div>
                    </Card>
                  </div>
                  <div>
                    <img className="mx-auto" src={person} width="120px" />
                    <Card className="text-center m-3 p-3 c-shadow">
                      <div className="c-h2 carousel2-h1">
                        Junio is your child's own{" "}
                        <span style={{ fontFamily: "Poppins Bold" }}>
                          smart card for all their online
                        </span>{" "}
                        and offline expenses. With the Junio card, Junio is your
                        child's own smart card
                      </div>
                      <div className="c6-green">Arjun Kapoor</div>
                      <div className="c2-h2">Parent</div>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </div>
        {/*} <div className="c7-h2 ">
          See over 1000+ customer reviews on Google Play
    </div>*/}
      </Container>
    );
  }
}

export default C7;
