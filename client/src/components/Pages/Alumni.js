import React, { useEffect } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";
import f1 from "../../images/alumni/sunil saini.jpg";
import f2 from "../../images/alumni/Surendra Singh Jayant.jpg";
import f3 from "../../images/alumni/SHREY Dixit.jpg";
import f4 from "../../images/alumni/Robin Zachariah.jpg";
import f5 from "../../images/alumni/rahul thakur.jpg";
import f6 from "../../images/alumni/Mohammed Maaz Latifee.jpg";
import f7 from "../../images/alumni/Vaibhav Jha.jpg";
import f8 from "../../images/alumni/Soumya Khanna.jpeg";
import f9 from "../../images/alumni/Aman Sharma(1).jpg";
import f10 from "../../images/alumni/sarita chaudhary1.jpeg";
import f11 from "../../images/alumni/unnamed.jpg";
import f12 from "../../images/alumni/Kishan Tiwari.jfif";
import f13 from "../../images/alumni/Aniket Kumar.jpg";
import { REACT_APP_BASE_TITLE } from "../../grobalVars"

export default function Alumni() {
  useEffect(() => {
    document.title = `Alumni | ${REACT_APP_BASE_TITLE}`;
  }, [])

  const members = [
    {
      name: "Sunil Kumar saini",
      yearOfGraduation: 2019,
      presentOrganisation: "John Deere India Pvt. Ltd.",
      presentLocation: "Indore, Madhya Pradesh",
      yourLinkedinId: "https://www.linkedin.com/in/sunilsaini233601",
      yourContactInformationEmail: "sunilnit22@gmail.com",
      yourContactInformationPhoneNumber: 8003238261,
      aPhotoForWebsiteOfYourself: f1,
    },
    {
      name: "Surendra Singh Jayant",
      yearOfGraduation: 2019,
      presentOrganisation: "Hindalco",
      presentLocation: "Hirakud",
      yourLinkedinId: "https://www.linkedin.com/in/ssjayant",
      yourContactInformationEmail: "surendramnnit@hotmail.com",
      yourContactInformationPhoneNumber: 7704874507,
      aPhotoForWebsiteOfYourself: f2,
    },
    {
      name: "Shrey Dixit",
      yearOfGraduation: 2020,
      yourLinkedinId: "linkedin.com/in/shrey-dixit",
      yourContactInformationEmail: "shreydixit99@gmail.com ",
      aPhotoForWebsiteOfYourself: f3,
    },
    {
      name: "Robin John Zachariah",
      yearOfGraduation: 2020,
      presentOrganisation: undefined,
      presentLocation: "Kochi, India",
      yourLinkedinId: "www.linkedin.com/in/robin-john-zachariah",
      yourContactInformationEmail: "robinjohnzachariah@gmail.com",
      yourContactInformationPhoneNumber: 7388342800,
      aPhotoForWebsiteOfYourself: f4,
    },
    {
      name: "Rahul Thakur",
      yearOfGraduation: 2020,
      presentOrganisation: "Addverb Technologies",
      presentLocation: "Noida",
      yourLinkedinId: "Rahulkrt",
      yourContactInformationEmail: "Rahulkmrthakur24@gmail.com",
      aPhotoForWebsiteOfYourself: f5,
    },
    {
      emailAddress: "maaz.latifee2@gmail.com",
      name: "Mohammed Maaz Latifee",
      yearOfGraduation: 2020,
      presentOrganisation: "Infosys",
      presentLocation: "Abu Dhabi",
      yourLinkedinId: "linkedin.com/in/mohammed-maaz-latifee-0a3375169",
      yourContactInformationEmail: "maaz.latifee2@gmail.com",
      yourContactInformationPhoneNumber: "+91 7753848547",
      aPhotoForWebsiteOfYourself: f6,
    },
    {
      emailAddress: "vaibhavjha904@gmail.com",
      name: "Vaibhav Kumar Jha",
      yearOfGraduation: 2020,
      presentOrganisation: "Capgemini India",
      presentLocation: "Kharagpur",
      yourContactInformationEmail: "vaibhavjha904@gmail.com",
      yourContactInformationPhoneNumber: 8310731383,
      yourLinkedinId: "https://www.linkedin.com/in/vaibhav-jha-49745b166",
      aPhotoForWebsiteOfYourself: f7,
    },
    {
      emailAddress: "soumyakhanna17997@gmail.com",
      name: "Soumya Khanna",
      yearOfGraduation: 2020,
      presentOrganisation: "Bajaj Auto Limited",
      presentLocation: "Akurdi, Pune",
      yourLinkedinId: "https://www.linkedin.com/in/soumya-khanna-20169040",
      yourContactInformationEmail: "soumyakhanna17997@gmail.com",
      aPhotoForWebsiteOfYourself: f8,
    },
    {
      emailAddress: "sharmaaman0571@gmail.com",
      name: "Aman sharma",
      yearOfGraduation: 2020,
      presentOrganisation: "Hero motocorp",
      presentLocation: "Gurgaon",
      yourContactInformationEmail: "sharmaaman0571@gmail.com",
      yourLinkedinId: "https://www.linkedin.com/in/aman-sharma-910598149",
      yourContactInformationPhoneNumber: "08218289118",
      aPhotoForWebsiteOfYourself: f9,
    },
    {
      emailAddress: "saritachaudhary2507@gmail.com",
      name: "Sarita Chaudhary",
      yearOfGraduation: 2020,
      presentOrganisation: "Resonance Eduventures Pvt. Ltd.",
      presentLocation: "Kota",
      yourLinkedinId: " https://www.linkedin.com/in/sarita-chaudhary-b92170137/",
      yourContactInformationEmail: "saritachaudhary2507@gmail.com",
      yourContactInformationPhoneNumber: "+919554559909",
      aPhotoForWebsiteOfYourself: f10,
    },
    {
      emailAddress: "bhuvanjhamb29@gmail.com",
      name: "Ashwini Kumar",
      yearOfGraduation: 2018,
      aPhotoForWebsiteOfYourself: f11,
    },
    {
      emailAddress: "Kishan@tsaw.tech",
      name: "Kishan Tiwari",
      yearOfGraduation: 2019,
      presentOrganisation: "TSAW Drones",
      presentLocation: "Gurgaon",
      yourLinkedinId: "https://www.linkedin.com/in/kishan-tiwari-poseidon/",
      yourContactInformationEmail: "kishan@tsaw.tech",
      yourContactInformationPhoneNumber: 7905461842,
      aPhotoForWebsiteOfYourself: f12,
    },
    {
      emailAddress: "Kishan@tsaw.tech",
      name: "Aniket Tiwari",
      yearOfGraduation: 2019,
      presentOrganisation: "Assistant Manager, Maruti Suzuki",
      presentLocation: "Gurgaon",
      yourLinkedinId: "https://www.linkedin.com/in/aniket-tiwari/",
      yourContactInformationPhoneNumber: 7905461842,
      aPhotoForWebsiteOfYourself: f13,
    },
  ];

  return (
    <>
      <Loading time={2} />
      <h3 className="my-3 titleBold d-flex justify-content-center topic">
        <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>OUR ALUMNI</p>
      </h3>
      <div
        className="miniSep"
        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
      ></div>
      <div className="container alumni-container my-5 col-11" style={{ minHeight: '24rem' }}>
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  className="accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse2020"
                  aria-expanded="true" aria-controls='collapse2020'
                >
                  Batch 2020
                </a>
              </h4>
            </div>
            <div id="collapse2020" className="panel-collapse collapse show">
              <div className="panel-body">
                <div className="container">
                  <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                    {members.map(
                      (member, i) =>
                        member.yearOfGraduation === 2020 && (
                          <div
                            className="card card-item shadow item-alumni"
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
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  className="accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse2019"
                  aria-expanded="false" aria-controls='collapse2019'
                >
                  Batch 2019
                </a>
              </h4>
            </div>
            <div id="collapse2019" className="panel-collapse collapse">
              <div className="panel-body">
                <div
                  className="container"

                >
                  <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                    {members.map(
                      (member, i) =>
                        member.yearOfGraduation === 2019 && (
                          <div
                            className="card card-item shadow item-alumni"
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
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  className="accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse2018"
                  aria-expanded="false" aria-controls='collapse2018'
                >
                  Batch 2018
                </a>
              </h4>
            </div>
            <div id="collapse2018" className="panel-collapse collapse">
              <div className="panel-body">
                <div
                  className="container"
                >
                  <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                    {members.map(
                      (member, i) =>
                        member.yearOfGraduation === 2018 && (
                          <div
                            className="card card-item shadow item-alumni"
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
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
      <br />
      <br />

    </>
  );
}
