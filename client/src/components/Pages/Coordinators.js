import React, { useEffect } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";
import f1 from "../../images/coordinators&Nontech/Amit Gupta.jpg";
import f2 from "../../images/coordinators&Nontech/Sandeep Singh.jpg";
import f3 from "../../images/coordinators&Nontech/Devansh Sethi.jpg";
import f4 from "../../images/coordinators&Nontech/Kanak Agrawal.jpg";
import f5 from "../../images/coordinators&Nontech/nitish kushwaha.jpeg";
import f6 from "../../images/coordinators&Nontech/Pushpa Devi.jpeg";
import f7 from "../../images/coordinators&Nontech/RUCHI SRIVASTAVA.jpg";
import f8 from "../../images/coordinators&Nontech/Prasanna Sneha.jpg";
import f9 from "../../images/coordinators&Nontech/Ayush.jpg";
import f10 from "../../images/coordinators&Nontech/Rishabh.jpg";
import f11 from "../../images/coordinators&Nontech/Harsh Kumar Singh.jpg";
import f12 from "../../images/coordinators&Nontech/Bhuvan Jhumb.jpg";
import f13 from "../../images/coordinators&Nontech/Apoorva Dinesh Singh.jpg";
import f14 from "../../images/coordinators&Nontech/Archit Chaudhary.jpg";
import f15 from "../../images/coordinators&Nontech/Ayan Santania.jpg";
import f16 from "../../images/coordinators&Nontech/ABHISHEK GAUTAM.jpg";
import f17 from "../../images/coordinators&Nontech/Karimulla Mohammad.bmp";
import f18 from "../../images/coordinators&Nontech/Ankur Singh.jpg";
import { REACT_APP_BASE_TITLE } from "../../grobalVars"

export default function Coordinators() {
  useEffect(() => {
    document.title = `Coordinators | ${REACT_APP_BASE_TITLE}`;
  }, [])

  const members = [
    {
      emailAddress: "amit758000@gmail.com",
      name: "Amit Gupta",
      year: "2nd",
      photo: f1,
      linkedinId: "https://www.linkedin.com/in/amit-gupta-0b64991bb/",
      areaOfInterests:
        "Drone Automation, Deep Learning, Path Planning",
    },
    {
      emailAddress: "sandeepsingh.avanti@gmail.com",
      name: "SANDEEP SINGH",
      year: "2nd",
      photo: f2,
      linkedinId: "https://www.linkedin.com/in/sandeep-singh-b020a6168/",
      areaOfInterests: "Drone Automation, Flying, Electronics",
    },
    {
      emailAddress: "devanshsethi77@gmail.com",
      name: "Devansh Sethi",
      year: "2nd",
      photo: f3,
      linkedinId: "https://www.linkedin.com/in/devansh-sethi-2a97721b3/",
      areaOfInterests:
        "Electronics, Aerodynamics",
    },
    {
      emailAddress: "akanak101@gmail.com",
      name: "Kanak Agrawal",
      year: "2nd",
      photo: f4,
      linkedinId: "https://www.linkedin.com/in/kanak-agrawal-03b55b159/",
      areaOfInterests: "Mechanical Design and Analysis, Controls",
    },
    {
      emailAddress: "nitishkumarkushwaha89@gmail.com",
      name: "Nitish Kumar",
      year: "2nd",
      photo: f5,
      linkedinId: "https://www.linkedin.com/in/nitish-kumar-9b1b84206/",
      areaOfInterests: "Mechanical Design and Analysis, Aerodynamics",
    },
    {
      emailAddress: "prasannamkumar43@gmail.com",
      name: "Prasannam Kumar Sah",
      year: "2nd",
      photo: f6,
      linkedinId: "https://www.linkedin.com/in/prasannam-kumar-sah-a4125b1b2/",
      areaOfInterests: "Drone Automation, Electronics, Aerodynamics",
    },
    {
      emailAddress: "ruchi1112200@gmail.com",
      name: "Ruchi Srivastava",
      year: "2nd",
      photo: f7,
      linkedinId: "https://www.linkedin.com/in/ruchi-srivastava-aaa2701b3",
      areaOfInterests:
        "Design and Simulations, CFD",
    },
    {
      emailAddress: "prasannasneha1322@gmail.com",
      name: "Prasanna Sneha",
      year: "2nd",
      photo: f8,
      linkedinId: "Prasanna Sneha",
      areaOfInterests: "CAD, Aerodynamics"
    },
    {
      emailAddress: "ayushchaturvedi702@gmail.com",
      name: "Ayush Chaturvedi",
      year: "2nd",
      photo: f9,
      areaOfInterests:
        "Design and Manufacturing , Drone Automation (Basics i.e dronekit)",
    },
    {
      emailAddress: "rishabhdwivedi462@gmail.com",
      name: "Rishabh Dwivedi",
      year: "2nd",
      photo: f10,
      linkedinId: "https://www.linkedin.com/in/rishabh-dwivedi-8b85491a2",
      areaOfInterests: "CAD, Aerodynamics",
    },
    {
      emailAddress: "harshkumarsingh325@gmail.com",
      name: "Harsh Kumar Singh ",
      year: "2nd",
      photo: f11,
      linkedinId: "harshkumarsingh325@gmail.com",
      areaOfInterests: "Drone Automation, Computer Vision, Simulation",
    },
    {
      emailAddress: "bhuvanjhamb29@gmail.com",
      name: "Bhuvan Jhamb",
      year: "Final",
      photo: f12,
      linkedinId: "https://www.linkedin.com/in/bhuvanjhamb",
      areaOfInterests:
        "Drone Automation, Controls, Path Planning, AI, Simulations",
    },
    {
      emailAddress: "apoorva011199@gmail.com",
      name: "Apoorva Dinesh Singh ",
      year: "Final",
      photo: f13,
      linkedinId: "https://www.linkedin.com/in/apoorva-singh-0111",
      areaOfInterests: "Machine Learning, Computer Vision, Path Planning",
    },
    {
      emailAddress: "chaudharyarchit2000@gmail.com",
      name: "ARCHIT CHAUDHARY",
      year: "Final",
      photo: f14,
      linkedinId: "https://www.linkedin.com/in/archit-chaudhary-010a78164/",
      areaOfInterests: "Automation, Aerodynamics, Propulsion",
    },
    {
      emailAddress: "ayan.santania@gmail.com",
      name: "Ayan Kishore",
      year: "Final",
      photo: f15,
      areaOfInterests: "CAD, 3D Printing, Manufacturing",
    },
    {
      emailAddress: "abhishekgautam689@gmail.com",
      name: "Abhishek Gautam",
      year: "Final",
      photo: f16,
      linkedinId: "https://www.linkedin.com/in/abhishekgautam01",
      areaOfInterests: "Mechanical Design and Analysis, Controls and Electronics",
    },
    {
      emailAddress: "karimulla17999@gmail.com",
      name: "Karimulla Mohammad",
      year: "2nd",
      photo: f17,
      linkedinId: "https://www.linkedin.com/in/karimulla1098/",
      areaOfInterests: "Deep Learning, Path Planning, ROS, AI",
    },
    {
      emailAddress: "as096255@gmail.com",
      name: "Ankur Pratap Singh",
      year: "2nd",
      photo: f18,
      linkedinId: "https://linkedin.com/in/ankur-singh-82496514b/",
      areaOfInterests:
        "Autonomous Systems, Data Science, Computer Vision",
    },
  ];

  return (
    <>
      <Loading time={2} />
      <h3 className="my-3 titleBold d-flex justify-content-center topic">
        <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>COORDINATORS</p>
      </h3>
      <div
        className="miniSep"
        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
      ></div>

      <div className="pageTitle my-5 titleBold header white-heading padtop">
        Core Coordinators
      </div>
      <div className="container alumni-container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {members.map(
            (member, i) =>
              member.year === "Final" && (
                <div className="card card-item shadow" style={{ width: "17rem", minHeight: '35rem', maxHeight: '35rem' }} key={i}>
                  <img
                    className="card-img-top card-alumni"
                    src={`${member.photo}`}
                    alt="Card image cap"
                  />
                  <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
                    <h5 className="card-title text-center text-uppercase" style={{ minHeight: "3rem" }}
                    >
                      {member.name}
                    </h5>
                    <p
                      className="card-text text-center"
                      style={{ minHeight: "5rem" }}
                    >
                      <strong>Area of Interest</strong> :{" "}
                      {member.areaOfInterests}
                    </p>
                    <div className="d-flex justify-content-center">
                      <a href={member.linkedinId} target="_blank">
                        <i className="fab fa-linkedin fa-3x mx-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      {/* <div className="pageTitle my-5 titleBold header white-heading padtop">
        Senior Coordinators
      </div>
      <div className="container alumni-container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {members.map(
            (member, i) =>
              member.year === "3rd" && (
                <div class="card card-item shadow" style={{ width: "17rem", minHeight: '35rem', maxHeight: '35rem' }} key={i}>
                  <img
                    className="card-img-top card-alumni"
                    src={`${member.photo}`}
                    alt="Card image cap"
                  />
                  <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
                    <h5 className="card-title text-center text-uppercase" style={{ minHeight: "3rem" }}
                    >
                      {member.name}
                    </h5>
                    <p
                      className="card-text text-center"
                      style={{ minHeight: "5rem" }}
                    >
                      <strong>Area of Interest</strong> :{" "}
                      {member.areaOfInterests}
                    </p>
                    <div className="d-flex justify-content-center">
                      <a href={member.linkedinId} target="_blank">
                        <i className="fab fa-linkedin fa-3x mx-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div> */}
      <div className="pageTitle my-5 titleBold header white-heading padtop">
        Junior Coordinators
      </div>
      <div className="container alumni-container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {members.map(
            (member, i) =>
              member.year === "2nd" && (
                <div className="card card-item shadow" style={{ width: "17rem", minHeight: '35rem', maxHeight: '35rem' }} key={i}>
                  <img
                    className="card-img-top card-alumni"
                    src={`${member.photo}`}
                    alt="Card image cap"
                  />
                  <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
                    <h5 className="card-title text-center text-uppercase" style={{ minHeight: "3rem" }}
                    >
                      {member.name}
                    </h5>
                    <p
                      className="card-text text-center"
                      style={{ minHeight: "5rem" }}
                    >
                      <strong>Area of Interest</strong> :{" "}
                      {member.areaOfInterests}
                    </p>
                    <div className="d-flex justify-content-center">
                      <a href={member.linkedinId} target="_blank">
                        <i className="fab fa-linkedin fa-3x mx-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}
