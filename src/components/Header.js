import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../images/junio_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";
import "../css/custom.css";
import classNames from "classnames";
class Header extends Component {
  state = {
    wWidth: null,
    isTop: true,
  };
  componentDidMount = () => {
    if (window !== undefined) {
      this.setState({ wWidth: window.innerWidth });
      window.addEventListener("resize", () => {
        this.setState({
          wWidth: window.innerWidth,
        });
      });
      document.addEventListener("scroll", () => {
        const isTop = window.scrollY < 40;
        if (isTop !== this.state.isTop) {
          this.setState({ isTop });
        }
      });
    }
  };
  handleStyle = () => {
    setTimeout(() => {
      if (document.getElementsByClassName("show").length > 0) {
        console.log(document.getElementsByClassName("show"));
        document.getElementById("navbar").style.background =
          "linear-gradient(90deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%)";
      } else {
        document.getElementById("navbar").style.background = "none";
      }
    }, 500);
  };
  render() {
    return (
      <Container
        fluid
        className="p-0"
        style={{ position: "fixed", top: "0px", zIndex: 4, width: "100%" }}
      >
        <Navbar
          id="navbar"
          expand={this.state.wWidth >= 1400 ? true : false}
          className={classNames({
            "nav-down": !this.state.isTop,
            "c-pad": true,
          })}
          // expand="xl"
        >
          <Navbar.Brand
            href="/"
            style={{
              color: "white",
              fontWeight: "700",
              fontFamily: "Helvetica",
            }}
          >
            <img
              alt=""
              src={logo}
              height="26px"
              width="120px"
              style={{ marginRight: "28px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav navbar-dark"
            style={{ color: "white", borderColor: "white" }}
          >
            <FontAwesomeIcon
              icon={faBars}
              color="white"
              onClick={this.handleStyle}
            />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{
              color: "white",
              fontFamily: "Montserrat",
            }}
          >
            <Nav
              className="ml-auto"
              style={{ color: "white", fontSize: "normal", marginLeft: "auto" }}
            >
              <Nav.Link href="#home" className="active">
                Home
              </Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#faq" className="n-link-faq">
                FAQs
              </Nav.Link>
              <Button
                className="btn-pri"
                style={{
                  borderRadius: "60px",
                  paddingInline: "16px",
                }}
                href="https://intercom.help/junioin/en/"
                target="_blank"
              >
                Get Help
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
