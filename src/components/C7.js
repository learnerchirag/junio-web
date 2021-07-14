import React, { Component } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import fig1 from "../images/c7-fig1.png";
import person from "../images/quotes.png";
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
                    <Card className="text-center m-3 p-3 c-shadow">
                      <img className="mx-auto" src={person} />
                      <div className="c-h2 carousel2-h1">
                        I love Junio. The pocket money that I earn has
                        doubled because of the Junio app
                      </div>
                      <div className="c6-green">Rahul</div>
                      <div className="c2-h2">12 years young</div>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="">
                <div className="carousel2 d-flex justify-content-center">
                  <div>
                    <Card className="text-center m-3 p-3 c-shadow">
                      <img className="mx-auto" src={person} />
                      <div className="c-h2 carousel2-h1">
                        I love showing off  my own, cool Junio card when I an
                        purchasing anything..makes my friends go all jealous:)
                      </div>
                      <div className="c6-green">Anshita</div>
                      <div className="c2-h2">14 years young</div>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="">
                <div className="carousel2 d-flex justify-content-center">
                  <div>
                    <Card className="text-center m-3 p-3 c-shadow">
                      <img className="mx-auto" src={person} />
                      <div className="c-h2 carousel2-h1">
                        Great initiative. I have ordered Junio cards for both my
                        children. I am already seeing signs that they are more
                        careful with their own money after having their Junio
                        cards. Also, they are becoming more independent
                        financially, which is a great thing. Well done, Junio!
                      </div>
                      <div className="c6-green">Lakshmi Arora</div>
                      <div className="c2-h2">Parent</div>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="">
                <div className="carousel2 d-flex justify-content-center">
                  <div>
                    <Card className="text-center m-3 p-3 c-shadow">
                      <img className="mx-auto" src={person} />
                      <div className="c-h2 carousel2-h1">
                        Very nice, smooth app. Took me less than 5 minutes to
                        order a card for my daughter Neera. Now I don't need to
                        worry whether she has money with her when she goes out
                      </div>
                      <div className="c6-green">Vikram Talwar</div>
                      <div className="c2-h2">Parent</div>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="d-none d-md-block">
            <Carousel>
              <Carousel.Item className="">
                <div className="carousel2 d-flex justify-content-center">
                  <Col className="col-6">
                    <Card className="text-center  mx-3 p-3 c-shadow">
                      <img className="mx-auto" src={person} />
                      <div className="c-h2 carousel2-h1">
                        I love Junio. The pocket money that I earn has
                        doubled because of the Junio app
                      </div>
                      <div className="c6-green mt-auto">Rahul</div>
                      <div className="c2-h2">12 years young</div>
                    </Card>
                  </Col>
                  <Col className="col-6">
                    <Card className="text-center  mx-3 p-3 c-shadow">
                      <img className="mx-auto" src={person} />
                      <div className="c-h2 carousel2-h1">
                        I love showing off  my own, cool Junio card when I an
                        purchasing anything..makes my friends go all jealous:)
                      </div>
                      <div className="c6-green mt-auto">Anshita</div>
                      <div className="c2-h2">14 years young</div>
                    </Card>
                  </Col>
                </div>
              </Carousel.Item>
              <Carousel.Item className="">
                <div className="carousel2 d-flex justify-content-center">
                  <Col className="col-6">
                    <Card className="text-center  mx-3 p-3 c-shadow">
                      <img className="mx-auto" src={person} />
                      <div className="c-h2 carousel2-h1">
                        Great initiative. I have ordered Junio cards for both my
                        children. I am already seeing signs that they are more
                        careful with their own money after having their Junio
                        cards. Also, they are becoming more independent
                        financially, which is a great thing. Well done, Junio!
                      </div>
                      <div className="c6-green mt-auto">Lakshmi Arora</div>
                      <div className="c2-h2">Parent</div>
                    </Card>
                  </Col>
                  <Col className="col-6">
                    <Card className="text-center  mx-3 p-3 c-shadow">
                      <img className="mx-auto" src={person} />
                      <div className="c-h2 carousel2-h1">
                        Very nice, smooth app. Took me less than 5 minutes to
                        order a card for my daughter Neera. Now I don't need to
                        worry whether she has money with her when she goes out
                      </div>
                      <div className="c6-green mt-auto">Vikram Talwar</div>
                      <div className="c2-h2">Parent</div>
                    </Card>
                  </Col>
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
