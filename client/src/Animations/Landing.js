import React from "react";
import "../css/Landing.css";
import m from "../images/utils/logo-aero2.png";

class Landing extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="pagesl">
          <div className="landing d-flex align-items-center justify-content-start">
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className="landing-logo">
                <img src={m} alt="aero" srcSet="" />
              </div>
              <div className="landing-about">
                <h1 className="font-weight-bold text-uppercase">
                  AeroClub MNNIT
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
