import React, { Component } from "react";
import Typewriter from "typewriter-effect";

class Hometext extends Component {
  render() {
    return (
      <Typewriter
        options={{
          strings: ["AERO CLUB  MNNIT", "Wings Of Wisdom"],
          autoStart: true,
          loop: true,
        }}
      />
    );
  }
}

export default Hometext;
