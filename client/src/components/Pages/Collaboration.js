import React, { useEffect } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

export default function Collaboration() {
  useEffect(() => {
    document.title = `Collaborate | ${REACT_APP_BASE_TITLE}`;
  }, [])

  return (
    <>
      <Loading time={2} />
      <div className="pagesa">
        <div className="overlaya">
          <div className="pageTitlea titleBolda">Collaborate</div>
          <div className="py-2">
            <p
              className="font-italic text-center my-5 quote"
              style={{ fontSize: "1.5rem" }}
            >
              "Alone we can do so little; together we can do so much." ~Helen
              Keller
          </p>
          </div>
        </div>
      </div>

      <div className="container col-10 col-md-10">

        <div className="my-5 collaborate" style={{border: "3px solid rgb(204, 67, 67)", padding:"20px", borderRadius:"7px"}}>
          <h4 className="my-3 titleBold d-flex justify-content-center topic">
            <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>About us</p>
          </h4>
          <div
            className="miniSep"
            style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
          ></div>
          <p className="text-xl paragr" style={{ textAlign: "justify" }}>
            AeroClub MNNIT is a student body under the Student Activity Centre
            (SAC), MNNIT Allahabad. We, here, congregate students from all over
            the college, not confining to branches but uniting by technology's
            passion. Since the establishment of the club, we have completed
            numerous projects, which do not only serve the purpose of competing
            in events but also solve real-life problems. Our projects cover all
            aerospace sector domains ranging from RC planes to design, from
            aerodynamic analysis to autonomous drones, and then astronomy. We
            are also the birthplace of a fully functional startup, TSAW (link).
            With years of hard work and persistence, we have honed our skills in
            multiple domains in aerospace.
          </p>
        </div>
        <div className="my-5 collaborate" style={{border: "3px solid rgb(204, 67, 67)", padding:"20px", borderRadius:"7px"}}>
          <h4 className="my-3 titleBold d-flex justify-content-center topic">
            <p>What We Have to Offer</p>
          </h4>
          <div
            className="miniSep"
            style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
          ></div>
          <p  className="text-xl paragr" style={{ textAlign: "justify" }}>
            There is no denying that we in our hand have many challenges which
            are yet far from being solved. We offer our skills, experience,
            passion, and commitment to solving them. We genuinely believe in the
            motto of MNNIT - "Success is born out of action". Since our
            establishment, we have gained expertise in all aspects related to
            this domain, notably (Research Themes of our Club-link).
          </p>
        </div>
        <div className="my-5 collaborate" style={{border: "3px solid rgb(204, 67, 67)", padding:"20px", borderRadius:"7px"}}>
          <h4 className="my-3 titleBold d-flex justify-content-center topic">
            <p>Technical Collaboration</p>
          </h4>
          <div
            className="miniSep"
            style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
          ></div>
          <p className="text-xl paragr" style={{ textAlign: "justify" }}>
            Our club's budding engineers are always present if you face any
            problems in the above technological domains. We believe that the
            essence of engineering must be instilled within us since the day we
            enter the college premises and shall not be held back to our
            graduation day. We offer a workforce equipped with all tools to deal
            with challenges and are eager to apply their knowledge to real-world
            problems. Hereby, we are open to all potential partners who want to
            collaborate with us. Any collaborative projects from startups or
            companies from the industries, related to technologies mentioned
            above, are most welcome. We assure you full professionalism and
            dedication from our end with anything you trust us.
          </p>
        </div>
        <div className="my-5 collaborate" style={{border: "3px solid rgb(204, 67, 67)", padding:"20px", borderRadius:"7px"}}>
          <h4 className="my-3 titleBold d-flex justify-content-center topic">
            <p style={{textAlign:"center"}}>Collaboration for Learning and Workshops</p>
          </h4>
          
          <div
            className="miniSep"
            style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
          ></div>
          <p className="text-xl paragr" style={{ textAlign: "justify" }}>
            Apart from technical expertise, the club also organizes workshops at
            both the school and college level, which will surely help you set a
            firm foot in technology. For more details, refer to this page
            (Jigyasa).
          </p>
        </div>
      </div>
    </>
  );
}
