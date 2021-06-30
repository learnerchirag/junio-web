import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import pattern from "../images/c6-pattern.png";
import sticker from "../images/video-right_patrn.png";
class C6 extends Component {
  render() {
    return (
      <Container fluid className="c6">
        {/*<img
          className="c6-sticker"
          src={sticker}
          height="428px"
          width="198px"
        />*/}
        <div className="c6-green text-center">Featured Video</div>
        <div className="c-h1 text-center mb-4">
          The smart card for child's pocket money
        </div>
        <div className="c-h2 text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, in at
          ipsum ac tristique semper auctor adipiscing eu. Iaculis justo,
        </div>
        <div>
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
            height="240px"
            width="570px"
          />
        </div>
      </Container>
    );
  }
}

export default C6;
