import React from "react";
import "../../css/ResearchThemes.css";

const ResearchThemes = () => {
  return (
    <div className="container-fluid" style={{ background: "rgb(29, 29, 29)" }}>
      <div
        className="pageTitle titleBold headingc white-headingc"
        data-aos="fade-down"
        style={{ marginBottom: "-25px", color: "white" }}
      >
        Research Themes
      </div>
      <div className="jumbotron" style={{ marginBottom: "0", background: "rgba(0, 0, 0, 0)" }}>
        <div
          className="miniSep"
          style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
        ></div>
        <div className="row justify-content-center">
          <div
            className="col-sm-11"
            data-aos="fade-up"
            data-aos-duration="2000"
            style={{ padding: "0 4rem 0 4rem" }}
          >
            <div
              className="card text-center"
              style={{ marginBottom: "1.5rem", width: "auto" }}
            >
              <div
                className="card-header"
                style={{
                  fontSize: "1.5rem",
                  background: "rgb(56, 55, 55)",
                  color: "white",
                  border: "3px solid white",
                }}
              >
                Our Domains
              </div>
              <div className="card-body">
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <p className="card-text">
                  <p>Fixed Wing Aircraft </p>
                  <p>Multirotors</p>
                  <p>Space Vehicles </p>
                  <a href="#" className="btn btn-dark">
                    Astronomy
                  </a>
                </p>
              </div>
              {/* <div class="card-footer text-muted">
                    2 days ago
                </div> */}
            </div>
          </div>
        </div>
        <div className="i-am-centered">
          <div className="row justify-content-center">
            <div className="col-sm-10" data-aos="fade-up">
              <div
                className="card text-center"
                style={{ marginBottom: "0.5rem", width: "auto" }}
              >
                <div
                  className="card-header"
                  style={{
                    fontSize: "1.5rem",
                    background: "rgb(29, 29, 29)",
                    color: "white",
                    // border: "3px solid white",
                  }}
                >
                  Technologies
                </div>
              </div>
            </div>
            {/* <div className="row"> */}
            <div
              className="col-sm-4"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div className="card cardhgt phoneheight" style={{ marginBottom: "1rem", borderRadius: "10px" }}>
                <div
                  className="card-body cardbd"
                  style={{ background: "rgb(113, 48, 48)", borderRadius: "10px", margin: "2px" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    <i className="far fa-eye" style={{ paddingRight: "20px" }}></i>
                       Perception
                    <hr style={{ background: "white" }}></hr>
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    <ul className="lststyle" style={{ margin: "5px" }}>
                      <li>Perception using Sensors</li>
                      {/* <br /> */}
                      <li>GPS Based Navigation</li>
                      {/* <br /> */}
                      <li>Deep Learning</li>
                      {/* <br /> */}
                      <li>Object Detection, Tracking and Avoidance</li>
                      {/* <br /> */}
                      <li>Computer Vision</li>
                      {/* <br /> */}
                      <li>Sensor Fusion</li>
                      {/* <br /> */}
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-4"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div className="card cardhgt phoneheight" style={{ marginBottom: "1rem", borderRadius: "10px" }}>
                <div
                  className="card-body cardbd"
                  style={{ background: "rgb(113, 48, 48)", borderRadius: "10px", margin: "2px" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    <i className="fas fa-laptop-code" style={{ paddingRight: "20px" }}></i>
                    Design
                    <hr style={{ background: "white" }}></hr>
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    <ul className="lststyle" style={{ margin: "5px" }}>
                      <li>Computer Aided Design</li>
                      {/* <br /> */}
                      <li>Structural Analysis</li>
                      {/* <br /> */}
                      <li>Design and Manufacture of RC Aircrafts and Multirotors</li>
                      {/* <br /> */}
                      <li>3D Printing</li>
                      {/* <br /> */}
                      <li>Materials</li>
                      {/* <br /> */}
                      {/* <br /> */}
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-sm-4"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div className="card cardhgt phoneheight" style={{ marginBottom: "1rem", borderRadius: "10px" }}>
                <div
                  className="card-body cardbd"
                  style={{ background: "rgb(113, 48, 48)", borderRadius: "10px", margin: "2px" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    <i className="fa fa-tools" style={{ paddingRight: "20px" }}></i>
                    Planning & Control
                    <hr style={{ background: "white" }}></hr>
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    <ul className="lststyle" style={{ margin: "5px" }}>
                      <li>Swarm Intelligence</li>
                      {/* <br /> */}
                      <li>Control System Algorithms</li>
                      {/* <br /> */}
                      <li>Path Planning</li>
                      <li>Different Actuators and their Control</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            {/* </div> */}
            <div
              className="col-sm-4"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div className="card cardhgt phoneheight" style={{ marginBottom: "1rem", borderRadius: "10px" }}>
                <div
                  className="card-body cardbd"
                  style={{ background: "rgb(113, 48, 48)", borderRadius: "10px", margin: "2px" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    <i className="fas fa-fighter-jet" style={{ paddingRight: "20px" }}></i>
                  Aerodynamics
                    <hr style={{ background: "white" }}></hr>
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    <ul className="lststyle" style={{ margin: "5px" }}>
                      <li>CFD Simulations</li>
                      {/* <br /> */}
                      <li>Aerofoil Analysis</li>
                      {/* <br /> */}
                      <li>Lift and Drag Studies</li>

                      {/* <br /> */}
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-sm-4"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div className="card cardhgt phoneheight" style={{ marginBottom: "1rem", borderRadius: "10px" }}>
                <div
                  className="card-body cardbd"
                  style={{ background: "rgb(113, 48, 48)", borderRadius: "10px", margin: "2px" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    <i className="fas fa-bolt" style={{ paddingRight: "20px" }}></i>
                  Power Source
                    <hr style={{ background: "white" }}></hr>
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    <ul className="lststyle" style={{ margin: "5px" }}>
                      <li> Battery Related Studies</li>
                      {/* <br /> */}
                      <li>Electronic Speed Controllers</li>
                      {/* <br /> */}
                      <li>Propulsion Systems</li>

                      {/* <br /> */}
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-sm-4"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div className="card cardhgt phoneheight" style={{ marginBottom: "1rem", borderRadius: "10px" }}>
                <div
                  className="card-body cardbd"
                  style={{ background: "rgb(113, 48, 48)", borderRadius: "10px", margin: "2px" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    <i className="fas fa-microchip" style={{ paddingRight: "20px" }}></i>
                  Electronics
                    <hr style={{ background: "white" }}></hr>
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    <ul className="lststyle" style={{ margin: "5px" }}>
                      <li> Sensors and Microcontrollers</li>
                      {/* <br /> */}
                      {/* <li>Electronic Speed Controllers</li> */}
                      {/* <br /> */}
                      <li>Embedded systems</li>

                      {/* <br /> */}
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            {/* <div
              className="col-sm-5"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div
                className="card"
                style={{ marginBottom: "1rem", borderRadius: "9px" }}
              >
                <div
                  className="card-body"
                  style={{ background: "rgb(204, 67, 67)" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                  <i class="fas fa-bolt"></i>
                    Electronics
                  </h5>
                  <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div>
                  <p className="card-text" style={{ color: "white" }}>
                    Sensors and Microcontrollers
                    <br />
                    Embedded systems
                    <br />
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchThemes;
