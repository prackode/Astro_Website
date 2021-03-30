import React, { useEffect } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Sponsor.css";
import mnnit from "../../images/utils/collegelogo.png";
import cisco from "../../images/Sponsors/cisco.png";
import teqip from "../../images/Sponsors/teqip3.png";
import cosmo3d from "../../images/Sponsors/cosmo3d.png";
import knowhow from "../../images/Sponsors/knowhow.png";
import pcb from "../../images/Sponsors/pcb.png";
import ultratech from "../../images/Sponsors/ultra.png";
import alumni from '../../images/Sponsors/alumni2.PNG';
import { REACT_APP_BASE_TITLE } from "../../grobalVars"
import tsaw from "../../images/Sponsors/tsawlogo.png";

export default function Ṣponsors() {
  useEffect(() => {
    document.title = `Sponsors | ${REACT_APP_BASE_TITLE}`;
  }, [])

  return (
    <>
      <Loading time={2} />
      <div className="pagesg">
        <div className="overlayg">
          <div className="pageTitleg titleBoldg">Sponsors</div>
          <div className="py-2">
            <p
              className="font-italic text-center my-5 quote"
              style={{ fontSize: "1.5rem" }}
            >
              "The purpose of life is to contribute in some way to making things better." ~ Robert F. Kennedy

          </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">

        <div className="jumbotron">
          <h4 className="my-3 titleBold d-flex justify-content-center topic">
            <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>About us</p>
          </h4>
          <div
            className="miniSep"
            style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
          ></div>
          <div className="">
            <div className="text-center">
              <p>

                <button className="btn btn-danger" type="button" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                  Who are we?
                                                     </button>
              </p>

              <div class="collapse collapsews" id="collapse11">
                <div class="card card-body details" >
                  <p className="just">AeroClub MNNIT, established in 2018, is a student body under the Student Activity Centre (SAC). Since then, it has been the epicenter of the surging ideas in various aerospace field domains, passing through the students, genuinely prepared to do impactful interdisciplinary work. Here, we work across all the aerospace sector domains ranging from RC planes to design, from aerodynamic analysis to autonomous drones, from biomimicking to astronomy, and various others (Link), catalyzed by abstract classes, open discussions, and projects.
                  Speaking of achievements, our club has won accolades in many national level competitions (Link) and completed a diverse range of projects (Link) and, most importantly, emphasized innovation with state-of-the-art projects like drone automation, RC planes, etc.
                  We are proud to say that our club is the birthplace of a fully functional startup, TSAW (Link). Also, our club's prosperity resulted in an offshoot, Astrowing(Link) itself, which focuses entirely upon the field of astronomy and theoretical sciences. The club, in these years, has achieved enormous growth, and in the future, we aim to surpass our past achievements.
</p>
                  <p className="just">With an eye on that, we look forward to:<br></br><br></br>
                    <ul>
                      <li>Collaborate with industries and work on current challenges prevailing in all domains of the aerospace sector</li>
                      <li>Proceed as a center of excellence by carrying leading-edge research in our club, in the theoretical and applied domains.</li>
                      <li>Bring honors to college and nation by participating not only in national but also international competitions.</li>
                    </ul>
                  </p>

                </div>
              </div>

              <p>

                <button className="btn btn-danger" type="button" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                  How can You Help Us?
                                                     </button>
              </p>

              <div class="collapse collapsews" id="collapse12">
                <div class="card card-body details">

                  <p className="just">We ask for support suitable to your capability. This support can be in the form of:<br></br><br></br>
                    <ul>
                      <li>Financial support</li>
                      <li>Helping us purchase equipment for projects and competitions</li>
                      <li>Any form of concession in equipments</li>
                      <li>Any form of technical mentorship</li>
                      <li>Helping us with industrial connections</li>
                      <li>Connecting us with other people who can help us</li>
                    </ul>
                  </p>

                </div>
              </div>

              <p>

                <button className="btn btn-danger" type="button" data-toggle="collapse" data-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                  Why Sponsor Us?
                                                     </button>
              </p>

              <div class="collapse collapsews" id="collapse13">
                <div class="card card-body details">

                  <p className="just">It took centuries to engineer 1st human flight, and just a few years later, we had crossed the solar system. With the advent of drone delivery, air taxis, and privatization of India's space sector, the demand for people who understand flying machines is increasing exponentially. However, not many people are ready for the same. Aeroclub MNNIT attempts to bridge this gap and utilize engineering students' potential and passion, converting them into leaders who can solve problems in the aerospace sector and beyond.
                  </p>

                </div>
              </div>


            </div>
          </div>
        </div>

        <div
          className="d-flex flex-wrap mx-auto justify-content-center align-items-center"
          style={{ width: "90%" }}
        >


          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="http://www.mnnit.ac.in/"
                target="_blank"
              >
                <img
                  className="card-img-top mx-auto imgphone sponimg"
                  src={mnnit}
                  alt="mnnit"
                  srcSet=""
                />
              </a>
            </div>

            <div className="card-body d-flex flex-column transition: transform 400ms ease-out">
              {/* <h5 class="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="http://www.mnnit.ac.in/"
                target="_blank"
              >
                MNNIT ALLAHABAD
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  Motilal Nehru National Institute of Technology Allahabad,
                  Prayagraj (MNNIT) is an Institute of National Importance with
                  total commitment to quality and excellence in academic pursuits.
                  It was established as one of the Seventeen Regional Engineering
                  Colleges of India in the year 1961 as a joint enterprise of
                  Government of India and Government of Uttar Pradesh, and was an
                  associated college of University of Allahabad, which is the
                third oldest university in India</div>
              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="https://www.cisco.com/c/m/en_in/thingqbator.html"
                target="_blank"
              >
                <img
                  className="card-img-top mx-auto sponimg"
                  src={cisco}
                  alt="cisco"
                  srcSet=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column" style={{ transition: "transform 400ms ease-out" }}>
              {/* <h5 class="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="https://www.cisco.com/c/m/en_in/thingqbator.html"
                target="_blank"
              >
                Cisco ThingQbator
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  Encourages a rapid prototyping mindset with 24/7 access to the
                  makerspace and all the equipment therein as well as active
                mentorship and training</div>
              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="https://tsaw.tech/index.php"
                target="_blank"
              >
                <img
                  className="card-img-top mx-auto sponimg"
                  src={tsaw}
                  alt="tsaw"
                  srcSet=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
              {/* <h5 className="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="https://tsaw.tech/index.php"
                target="_blank"
              >
                TSAW
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  TSAW's establishment depends on the standards of coordinated
                  effort and creation with long haul objectives in sight. The
                  errands are not straightforward and the clock is ticking as of
                  now. With numerous players as of now in the part, it will be a
                  long and hard assignment, be that as it may, we accept with our
                  exceptionally determined and serious group, it wouldn't be some
                  time before we accomplish every one of our objectives,
                empowering humankind to flourish without any problem.</div>
              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="https://www.facebook.com/cosmo3D.India/"
                target="_blank"
              >
                <img

                  className="card-img-top mx-auto sponimg"
                  src={cosmo3d}
                  alt="cosmo3d"
                  srcSet=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
              {/* <h5 className="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="https://www.facebook.com/cosmo3D.India/"
                target="_blank"
              >
                Cosmo 3D
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  Cosmo 3D is a rapid prototyping-based startup, currently focused on high-quality 3D or printing service in Allahabad & nearby regions and achieved big goals in a short span of time. The company deals with product development, research aid, 3D  printing of functional models, small-batch manufacturing, customized gifts, etc.</div>

              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="https://www.teqip.in/"
                target="_blank"
              >
                <img

                  className="card-img-top mx-auto sponimg"
                  src={teqip}
                  alt="teqip"
                  srcSet=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
              {/* <h5 className="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="https://www.teqip.in/"
                target="_blank"
              >
                TEQIP 3
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  TEQIP is a Government of India project, assisted by the world bank. TEQIP Aims to strengthen few affiliated technical universities to improve their policies, academics, and management practices</div>

              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="https://knowhow3d.in/"
                target="_blank"
              >
                <img

                  className="card-img-top mx-auto sponimg"
                  src={knowhow}
                  alt="knowhow"
                  srcSet=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
              {/* <h5 className="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="https://knowhow3d.in/"
                target="_blank"
              >
                Knowhow 3D
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  Knowhow 3D is a popular 3D Printing studio contributing its part in changing the era of education they take pride in helping engineering and school students in their various innovations and projects. With their knowledge and experience in 3D printing, they provide 3D printing services/job work with the best quality in the least time</div>

              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href=""
                target="_blank"
              >
                <img

                  className="card-img-top mx-auto sponimg"
                  src={pcb}
                  alt="knowhow"
                  srcSet=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
              {/* <h5 className="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href=""
                target="_blank"
              >
                PCB House
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  PCB House is an electronics store in Allahabad providing services to college and school students and covers a large market in Allahabad and nearby regions. The store deals with providing electronics components and equipment, project development, PCB manufacturing, etc.</div>

              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="http://www.mnnit.ac.in/"
                target="_blank"
              >
                <img
                  className="card-img-top mx-auto imgphone alumnilogowdth sponimg "
                  src={alumni}
                  alt="mnnit"
                  srcSet=""
                />
              </a>
            </div>

            <div className="card-body d-flex flex-column transition: transform 400ms ease-out">
              {/* <h5 className="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="http://www.mnnit.ac.in/"
                target="_blank"
              >
                MNNIT Alumni Association
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  MNNIT Alumni Association is an organisation set up at college level to have a smooth functioning between our Alumni network base and the college for the benefit of college students. It’s a helping hand for students and extends various supports to students in various forms.</div>
              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="https://www.ultratechcement.com/"
                target="_blank"
              >
                <img

                  className="card-img-top mx-auto sponimg"
                  src={ultratech}
                  alt="alumni"
                  srcSet=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
              <a
                className="card-title text-center sponabt"
                href="https://www.ultratechcement.com/"
                target="_blank"
              >
                Ultratech Cement
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  Global major in cement industry and among the world's largest cement producer.</div>

              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
