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
        const isTop = window.scrollY < 100;
        if (isTop !== this.state.isTop) {
          this.setState({ isTop });
        }
      });
    }
  };
  render() {
    return (
      <Container
        fluid
        className="p-0"
        style={{ position: "fixed", top: "0px", zIndex: 4, width: "100%" }}
      >
        <Navbar
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
              fontSize: "32px",
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
            <FontAwesomeIcon icon={faBars} color="white" />
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
                className="btn-sec"
                style={{
                  borderRadius: "60px",
                }}
              >
                Order Card
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
