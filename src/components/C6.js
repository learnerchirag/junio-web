import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import pattern from "../images/c6-pattern.png";
// import sticker from "../images/c6-sticker.png";
class C6 extends Component {
  render() {
    return (
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
          <img
            src={pattern}
            style={{
              position: "absolute",
              zIndex: "-1",
              left: "300px",
              marginTop: "50px",
            }}
            height="140px"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=kJNEbRhMjpo"
            style={{ marginInline: "auto", borderRadius: "24px" }}
            controls={true}
          />
        </div>
      </Container>
    );
  }
}

export default C6;
