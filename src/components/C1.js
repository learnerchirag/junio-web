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
import axios from "axios";
import cogoToast from "cogo-toast";
class C1 extends Component {
  state = {
    phone: "",
  };
  componentDidMount() {}
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  sendLink = () => {
    var phone = this.state.phone;
    console.log(phone, "phone");
    if (this.state.phone.length == 10) {
      axios
        .post("https://falcon.junio.in/notification/send-invite", {
          mobile_number: this.state.phone,
        })
        .then((res) => {
          if (res.data.status === "success") {
            cogoToast.success("Link sent to you mobile number via SMS");
          } else {
            cogoToast.error(res.data.status);
          }
        })
        .catch((err) => {
          cogoToast.error(err);
          console.log(err);
        });
    } else {
      cogoToast.error("Please enter a valid mobile number");
    }
  };
  render() {
    return (
      <Container
        fluid
        id="home"
        className="c1 c-pad"
        style={{
          backgroundImage: `url(${background})`,
          paddingBottom: "16px",
          backgroundAttachment: "fixed",
        }}
      >
        <Row className="h-100">
          <Col className="d-flex flex-column justify-content-end col-12 col-lg-6">
            <h1 className="c1-h1 mb-5">
              The Smart Card
              <br className="c1-br" /> for Child's
              <span> pocket money</span>
            </h1>
            <div className="c1-h2">Get our Android app</div>
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
                  style={{
                    border: "none",
                    marginLeft: "-10px",
                    paddingLeft: "10px",
                  }}
                  type="number"
                  maxLength="10"
                  onChange={this.handleInput}
                  name="phone"
                  value={this.state.phone}
                />
                <Button className="btn-gradient s-link" onClick={this.sendLink}>
                  Get link
                </Button>
              </div>
            </Card>

            {/* {/* <div>
              App available on <img src={googlePlay} height="40px" />{" "}
              {/* <img src={apple} height="40px" /> */}
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default C1;
