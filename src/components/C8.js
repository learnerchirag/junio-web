import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { Component } from "react";
import { Accordion, Button, Container } from "react-bootstrap";
import sticker from "../images/c8-sticker.png";
class C8 extends Component {
  state = {
    ans: 1,
  };
  render() {
    return (
      <Container fluid id="faq" className="c8 pe-md-0 c-pad">
        <div className="row d-flex">
          <div className="col col-12 col-md-8 c8-accordion">
            <div className="c-h1 c8-h1">Your questions answered</div>
            <div
              className="c8-p1 d-flex justify-content-between"
              onClick={() => {
                this.setState({ ans: 1 });
              }}
            >
              Easy to Use
              {this.state.ans === 1 ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </div>
            <div
              className="c8-d1"
              style={{ display: this.state.ans === 1 ? "block" : "none" }}
            >
              Junio is your child's own smart card for all their online and
              offline expenses. With the Junio card, Junio is your child's own
              smart card for all their online and offline expenses. With the
              Junio card,
            </div>
            <div
              className="c8-p1 d-flex justify-content-between"
              onClick={() => {
                this.setState({ ans: 2 });
              }}
            >
              Variety of Designs Easy to Use
              {this.state.ans === 2 ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </div>
            <div
              className="c8-d1"
              style={{ display: this.state.ans === 2 ? "block" : "none" }}
            >
              Junio is your child's own smart card for all their online and
              offline expenses. With the Junio card, Junio is your child's own
              smart card for all their online and offline expenses. With the
              Junio card,
            </div>
            <div
              className="c8-p1 d-flex justify-content-between"
              onClick={() => {
                this.setState({ ans: 3 });
              }}
            >
              Feel our Design Easy to Use
              {this.state.ans === 3 ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </div>
            <div
              className="c8-d1"
              style={{ display: this.state.ans === 3 ? "block" : "none" }}
            >
              Junio is your child's own smart card for all their online and
              offline expenses. With the Junio card, Junio is your child's own
              smart card for all their online and offline expenses. With the
              Junio card,
            </div>
          </div>
          <div className="ques-div col col-md-4 mt-4 my-md-auto">
            <img className="c8-sticker" src={sticker} height="168px" />
            <div className="c8-ques">Have a Question?</div>
            <div className="c8-ans">
              Junio is your child's own smart card for all their online and
              offline expenses.
            </div>
            <div>
              <Button className="btn-pri">Get Help</Button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default C8;
