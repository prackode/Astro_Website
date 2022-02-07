import React, { useEffect } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";
import f1 from "../../images/alumni/SHREY Dixit.jpg";
import f2 from "../../images/alumni/Soumya Khanna.jpeg";
import f3 from "../../images/alumni/Aman Sharma(1).jpg";
import f4 from "../../images/alumni/Kishan Tiwari.jfif";
import f5 from "../../images/alumni/VivekKumar.jfif";
import f6 from "../../images/alumni/Bhuvan Jhamb.jpg";
import f7 from "../../images/alumni/Ardhya_Kumar.jpg";
import f8 from "../../images/alumni/Apoorva Dinesh Singh.jpg";
import f9 from "../../images/alumni/Archit Chaudhary.jpg";
import { REACT_APP_BASE_TITLE } from "../../globalVars"
import { animateScroll } from "react-scroll";

export default function Alumni() {
  useEffect(() => {
    document.title = `Alumni | ${REACT_APP_BASE_TITLE}`;
    animateScroll.scrollToTop()
  }, [])


  const aluminiInfo = [
    {
      year: "Batch 2021",
      members: [
        {
          emailAddress: "bhuvanjhamb29@gmail.com",
          name: "Bhuvan Jhamb",
          yourLinkedinId: "https://www.linkedin.com/in/bhuvanjhamb/",
          presentOrganisation: "Intel Labs",
          areaOfInterests: "Theoretical Physics, Computational Physics, Observational Astronomy.",
          aPhotoForWebsiteOfYourself: f6
        },
        {
          emailAddress: "ardhyakumar55@gmail.com",
          name: "Ardhya Kumar",
          yourLinkedinId: "https://www.linkedin.com/in/ardhya/",
          presentOrganisation: "ServiceNow",
          areaOfInterests: "Observational Astronomy, Astrophysics",
          aPhotoForWebsiteOfYourself: f7
        },
        {
          emailAddress: "apoorva011199@gmail.com",
          name: "Apoorva Dinesh Singh ",
          yourLinkedinId: "https://www.linkedin.com/in/apoorva-singh-0111",
          presentOrganisation: "Arista Networks",
          areaOfInterests: "ML, CV",
          aPhotoForWebsiteOfYourself: f8
        },
        {
          emailAddress: "chaudharyarchit2000@gmail.com",
          name: "Archit Chaudhary",
          yourLinkedinId: "https://www.linkedin.com/in/archit-chaudhary-010a78164/",
          presentOrganisation: "Graduated Mechanical Engineer, MNNIT Allahabad",
          areaOfInterests: "theoretical physics",
          aPhotoForWebsiteOfYourself: f9
        },
      ]
    },
    {
      year: "Batch 2020",
      members: [
        {
          name: "Shrey Dixit",
          yourLinkedinId: "linkedin.com/in/shrey-dixit",
          yourContactInformationEmail: "shreydixit99@gmail.com ",
          aPhotoForWebsiteOfYourself: f1,
        },
        {
          emailAddress: "soumyakhanna17997@gmail.com",
          name: "Soumya Khanna",
          presentOrganisation: "Bajaj Auto Limited",
          presentLocation: "Akurdi, Pune",
          yourLinkedinId: "https://www.linkedin.com/in/soumya-khanna-20169040",
          yourContactInformationEmail: "soumyakhanna17997@gmail.com",
          aPhotoForWebsiteOfYourself: f2,
        },
        {
          emailAddress: "sharmaaman0571@gmail.com",
          name: "Aman sharma",
          presentOrganisation: "Hero motocorp",
          presentLocation: "Gurgaon",
          yourContactInformationEmail: "sharmaaman0571@gmail.com",
          yourLinkedinId: "https://www.linkedin.com/in/aman-sharma-910598149",
          aPhotoForWebsiteOfYourself: f3,
        },
        {
          emailAddress: "Kishan@tsaw.tech",
          name: "Vivek Kumar",
          presentOrganisation: "Graduated Mechanical Engineer, MNNIT Allahabad",
          presentLocation: "Gurgaon",
          yourLinkedinId: "https://www.linkedin.com/in/vivek-kumar-baa735151/",
          aPhotoForWebsiteOfYourself: f5,
        },
      ]
    },
    {
      year: "Batch 2019",
      members: [
        {
          emailAddress: "Kishan@tsaw.tech",
          name: "Kishan Tiwari",
          presentOrganisation: "TSAW Drones",
          presentLocation: "Gurgaon",
          yourLinkedinId: "https://www.linkedin.com/in/kishan-tiwari-poseidon/",
          yourContactInformationEmail: "kishan@tsaw.tech",
          aPhotoForWebsiteOfYourself: f4,
        },
      ]
    },
  ];

  return (
    <>
      <Loading time={1} />
      <h3 className="my-3 titleBold d-flex justify-content-center topic">
        <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>OUR ALUMNI</p>
      </h3>
      <div
        className="miniSep"
        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
      ></div>
      <div className="container alumni-container my-5 col-11" style={{ minHeight: '24rem' }}>
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          {aluminiInfo.map((info, id) => {
            return (
              <div className="panel panel-default bgrt">
                <div className="panel-heading bgrt">
                  <h4 className="panel-title">
                    <a
                      className="accordion-toggle"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href={"#collapse" + id}
                      aria-expanded="true" aria-controls={"collapse" + id}
                    >
                      {info.year}
                    </a>
                  </h4>
                </div>
                <div id={"collapse" + id} className={id === 0 ? "panel-collapse collapse show" : "panel-collapse collapse"}>
                  <div className="panel-body">
                    <div className="fluid-container">
                      <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                        {info.members.map((member, i) => {
                          return (
                            <div
                              className="card card-item-1 shadow item-alumni"
                              style={{ width: "17rem", minHeight: '33rem', maxHeight: '33rem' }}
                              key={i}
                            >
                              <img
                                className="card-img-top card-alumni"
                                src={`${member.aPhotoForWebsiteOfYourself}`}
                                alt="Card image cap"
                              />
                              <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
                                <h5
                                  className="card-title text-center text-uppercase"
                                  style={{ minHeight: "3rem" }}
                                >
                                  {member.name}
                                </h5>
                                <p
                                  className="card-text text-center"
                                  style={{ minHeight: "2rem" }}
                                >
                                  {member.presentOrganisation
                                    ? member.presentOrganisation
                                    : "Graduated Mechanical Engineer, MNNIT Allahabad"}
                                </p>

                                <div className="d-flex justify-content-center mt-4">
                                  <a href={member.yourLinkedinId} target="_blank">
                                    <i className="fab fa-linkedin fa-3x mx-2"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
      <br />
      <br />

    </>
  );
}
