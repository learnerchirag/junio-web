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
        <div className="c-h1 c8-h1">Your questions answered</div>
        <div className="row d-flex">
          <div className="col col-12 col-md-8 c8-accordion">
            <div className="acc-cont">
              <div
                className="c8-p1 d-flex justify-content-between align-items-center"
                onClick={() => {
                  this.setState({ ans: 1 });
                }}
              >
                What is Junio?
                {this.state.ans === 1 ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </div>
              <div
                className="c8-d1 text-left"
                style={{ display: this.state.ans === 1 ? "block" : "none" }}
              >
                Junio is your child's own smart card for all their online and
                offline expenses. With the Junio card, your child can learn how
                to earn, spend and save, while you keep a loving eye over their
                spending. It is very easy to order, no full KYC to order for the
                physical card. You can instantly top up the Junio card, and it
                is ready for use by your little one.
              </div>
            </div>
            <div className="acc-cont">
              <div
                className="c8-p1 d-flex justify-content-between align-items-center"
                onClick={() => {
                  this.setState({ ans: 2 });
                }}
              >
                Annual Charge for the JUNIO Card?{" "}
                {this.state.ans === 2 ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </div>
              <div
                className="c8-d1 text-left"
                style={{ display: this.state.ans === 2 ? "block" : "none" }}
              >
                There is ZERO annual charge for Junio.
              </div>
            </div>
            <div className="acc-cont">
              <div
                className="c8-p1 d-flex justify-content-between align-items-center"
                onClick={() => {
                  this.setState({ ans: 3 });
                }}
              >
                Is this a credit card card or debit card?
                {this.state.ans === 3 ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </div>
              <div
                className="c8-d1 text-left"
                style={{ display: this.state.ans === 3 ? "block" : "none" }}
              >
                This is a Pocket Money Smart Card connected with Junio App. You
                can load money in Junio App and use the card for the online and
                offline payments.
              </div>
            </div>
          </div>
          <div className="ques-div col col-md-4 mt-4 mt-md-0">
            <img className="c8-sticker" src={sticker} height="168px" />
            <div className="c8-ques">Have a Question?</div>
            <div className="c8-ans">
              Check out our answers to frequently asked questions
            </div>
            <div>
              <Button
                className="btn-pri"
                href="https://intercom.help/junioin/en/"
                target="_blank"
              >
                View more FAQs
              </Button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default C8;
