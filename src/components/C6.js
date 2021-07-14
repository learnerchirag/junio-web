import React, { Component } from "react";
import { Carousel, Col, Card, Container } from "react-bootstrap";

import pattern from "../images/c6-pattern.png";
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import "../css/modal-video.css";
import t1 from "../images/thumb_01V.png";
import t3 from "../images/thumb_022V.png";
import t2 from "../images/thumb3.png";
import pattern2 from "../images/c4-pattern.png";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// import sticker from "../images/c6-sticker.png";
class C6 extends Component {
  state = {
    isOpen: 0,
    win: false,
  };
  componentDidMount() {
    if (window !== undefined) {
      this.setState({ win: true });
      let items = document.getElementsByClassName("tile");
      console.log(items);
      items[1].classList.add("tile-hover");
      [...items].forEach((element, i) => {
        element.addEventListener("mouseenter", () => {
          items[i].classList.add("tile-hover");
          items[(i + 1) % 3].classList.remove("tile-hover");
          items[(i + 2) % 3].classList.remove("tile-hover");
        });
        element.addEventListener("mouseleave", () => {
          items[1].classList.add("tile-hover");
          items[2].classList.remove("tile-hover");
          items[0].classList.remove("tile-hover");
        });
      });
    }
  }
  render() {
    const options = {
      responsive: {
        0: { items: 1 },
        600: { items: 3 },
      },
      dots: true,
      nav: true,
      rewind: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 3000,
      smartSpeed: 500,
      loop: true,
      center: true,
      navText: [
        "<div><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-circle-left' class='svg-inline--fa fa-chevron-circle-left fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z'></path></svg></div>",
        "<div><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-circle-right' class='svg-inline--fa fa-chevron-circle-right fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z'></path></svg></div>",
      ],
    };
    const events = {
      onDragged: function (event) {},
      onChanged: function (event) {},
    };

    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
    };
    const items = [
      <div className="item" data-value="1">
        <img src={t1} alt="" />
      </div>,
      <div className="item" data-value="2">
        <img src={t2} alt="" />
      </div>,
      <div className="item" data-value="3">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
          alt=""
        />
      </div>,
      <div className="item" data-value="4">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
          alt=""
        />
      </div>,
    ];

    const responsive = {
      0: { items: 1 },
      568: { items: 2 },
      1024: { items: 3 },
    };
    return (
      <React.Fragment>
        <img
          className="c6-pattern2"
          src={pattern2}
          width="auto"
          height="504px"
        />
        <img
          className="c6-pattern3"
          src={pattern2}
          width="auto"
          height="504px"
        />
        <Container fluid className="c6 c-pad">
          {/*<img
          className="c6-sticker"
          src={sticker}
          height="428px"
          width="198px"
        />*/}
          <div className="c6-green text-center">Featured Video</div>
          <div
            className="c-h1 text-center mb-5"
            style={{ maxWidth: "548px", marginInline: "auto" }}
          >
            Watch this explainer video to know more about Junio
          </div>
          {/*<div className="c-h2 text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, in at
          ipsum ac tristique semper auctor adipiscing eu. Iaculis justo,
      </div>*/}
          <div className="react-player">
            {/* <img
            src={pattern}
            style={{
              position: "absolute",
              zIndex: "-1",
              left: "300px",
              marginTop: "50px",
            }}
            height="140px"
          /> */}
            {/* <ReactPlayer
            url="https://www.youtube.com/watch?v=kJNEbRhMjpo"
            style={{ marginInline: "auto", borderRadius: "24px" }}
            controls={true}
          /> */}
            {/* <Carousel
            responsive={responsive}
            autoPlay={false}
            autoPlaySpeed={1000}
          >
            <div className="tile">
              <img
                class="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
                alt=""
              />
            </div>
            <div className="tile">
              <img
                class="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
                alt=""
              />
            </div>
            <div className="tile">
              <img
                class="tile__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
                alt=""
              />
            </div>
          </Carousel>
           */}
            {/* <Slider {...settings}>
            <div>
              <h3>
                <img
                  class="tile__img"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
                  alt=""
                />
              </h3>
            </div>
            <div>
              <h3>
                <img
                  class="tile__img"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
                  alt=""
                />
              </h3>
            </div>
            <div>
              <h3>
                <img
                  class="tile__img"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
                  alt=""
                />
              </h3>
            </div>
            {/* <div>
              <h3>
                <img
                  class="tile__img"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
                  alt=""
                />
              </h3>
            </div> */}
            {/* </Slider> */}
            {/* <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            activeIndex={1}
            autoPlay={false}
            infinite={true}
          /> */}
            <Carousel className="d-md-none video-carousel">
              <Carousel.Item className="">
                <div className="" onClick={() => this.setState({ isOpen: 1 })}>
                  <div className="video-overlay"></div>
                  <div className="">
                    <img className="" src={t1} alt="" />
                  </div>
                  <div className="">
                    <div className="video-title">
                      Junio - Pocket Money Made Smarter [Hindi]
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="">
                <div className="" onClick={() => this.setState({ isOpen: 2 })}>
                  <div className="video-overlay"></div>
                  <div className="">
                    <img className="" src={t2} alt="" />
                  </div>
                  <div className="">
                    <div className="video-title">
                      JUNIO: Child's Pocket Money App | AD
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="">
                <div className="" onClick={() => this.setState({ isOpen: 3 })}>
                  <div className="video-overlay"></div>
                  <div className="">
                    <img className="" src={t3} alt="" />
                  </div>
                  <div className="">
                    <div className="video-title">
                      Junio - Pocket Money Made Smarter [English]
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>

            <div class="contain d-none d-md-block">
              <div class="mv-row">
                <div class="row__inner">
                  <div
                    class="tile"
                    onClick={() => this.setState({ isOpen: 1 })}
                  >
                    <div class="tile__media">
                      <img class="tile__img" src={t1} alt="" />
                    </div>
                    <div class="tile__details">
                      <div class="tile__title">
                        Junio - Pocket Money Made Smarter [Hindi]
                      </div>
                    </div>
                  </div>
                  <div
                    class="tile"
                    onClick={() => this.setState({ isOpen: 2 })}
                  >
                    <div class="tile__media">
                      <img class="tile__img" src={t2} alt="" />
                    </div>
                    <div class="tile__details">
                      <div class="tile__title">
                        JUNIO: Child's Pocket Money App | AD
                      </div>
                    </div>
                  </div>
                  <div
                    class="tile"
                    onClick={() => this.setState({ isOpen: 3 })}
                  >
                    <div class="tile__media">
                      <img class="tile__img" src={t3} alt="" />
                    </div>
                    <div class="tile__details">
                      <div class="tile__title">
                        Junio - Pocket Money Made Smarter [English]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.win ? (
            <React.Fragment>
              <ModalVideo
                channel="youtube"
                isOpen={this.state.isOpen === 1}
                videoId="kJNEbRhMjpo"
                onClose={() => this.setState({ isOpen: 0 })}
                autoplay
              />
              <ModalVideo
                channel="youtube"
                isOpen={this.state.isOpen === 2}
                videoId="mIqx6ei6fRE"
                onClose={() => this.setState({ isOpen: 0 })}
              />
              <ModalVideo
                channel="youtube"
                isOpen={this.state.isOpen === 3}
                videoId="wedN2mAv68A"
                onClose={() => this.setState({ isOpen: 0 })}
              />
            </React.Fragment>
          ) : null}
        </Container>
      </React.Fragment>
    );
  }
}

export default C6;
