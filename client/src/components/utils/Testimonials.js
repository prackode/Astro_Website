import React from "react";
import "../../css/testimonials.css";
import shrey from "../../images/alumni/SHREY Dixit.jpg";
import soumya from "../../images/alumni/Soumya Khanna.jpeg";
import surendra from "../../images/alumni/Surendra Singh Jayant.jpg";
import maaz from "../../images/alumni/Mohammed Maaz Latifee.jpg";
import sarita from "../../images/alumni/sarita chaudhary1.jpeg";
import kishan from "../../images/alumni/Kishan Tiwari.jfif";
import { Container, Jumbotron } from "react-bootstrap";

export default function Testimonials() {
  return (

    <section className="testimonial text-center">
      <div className="container">
      <div
        className="pageTitle titleBold headingc white-headingc"
        data-aos="fade-down"
        style={{ marginBottom: "0px"}}
      >
        Testimonials
      </div>
      <div className="miniSep" style={{ marginBottom: '30px' }} ></div>
        {/* <Jumbotron> */}
        
        <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval={5000} data-duration={2000} data-aos="zoom-in-down">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="testimonial4_slide">
                <img src={surendra} className="img-circle img-responsive" /> 
                {/* <div className="scrollert" id="stylet-2"> */}
                <p className="testfont scrollert" id="stylet-2">"This club is one of the best platforms to learn something new & the best part is the implementation of your imagination. As humans, we're always curious to fly like birds; this platform gives you the wings to pursue that. It also has a great career opportunity if we take it further beyond the club. As a club member, you also get to interact with people with different ideas, which helps to enhance your visualization and thinking abilities. Being part of this club was one of the best phases in my college life."</p>

                {/* <div className="miniSep" style={{ marginBottom: '25px', width: '70%', height: '3px' }} ></div> */}
                <h4>Surendra Singh Jayant</h4>
                <a href="https://www.linkedin.com/in/ssjayant" target="_blank">
                  <i className="fab fa-linkedin fa-3x mx-2"></i>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                <img src={shrey} className="img-circle img-responsive" /><p className="testfont scrollert" id="stylet-2">"It was an honor being part of the Aeromodelling Club, MNNIT. I will remember all those priceless moments that I had with my supporting friends, guiding professors, visionary seniors, and enthusiastic juniors throughout my college life. The experiences made me a better person and prepared me in unpredictable ways for my career. I wish I had a time machine to relive all of those memories for eternity. Memories worth being cherished!!"</p>
                {/* <div className="miniSep" style={{ marginBottom: '25px', width: '70%', height: '3px' }} ></div> */}
                <h4>Shrey Dixit</h4>
                <a href="linkedin.com/in/shrey-dixit" target="_blank">
                  <i className="fab fa-linkedin fa-3x mx-2"></i>
                </a>'
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                <img src={maaz} className="img-circle img-responsive" />
                <p className="testfont scrollert" id="stylet-2">"I remember my 1st day in Aeroclub, where I was assigned to start making my first RC Plane. I mostly remember my happy days with club members while working on various projects and models. I am pleased that Aeroclub seniors have always taught me technical and nontechnical experiences. I am glad that I was one of the members of Aeroclub during my final year"</p>
                {/* <div className="miniSep" style={{ marginBottom: '25px', width: '70%', height: '3px' }} ></div> */}
                <h4>Mohammed Maaz Latifee</h4>
                <a href="linkedin.com/in/mohammed-maaz-latifee-0a3375169" target="_blank">
                  <i className="fab fa-linkedin fa-3x mx-2"></i>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                <img src={soumya} className="img-circle img-responsive" />
                <p className="testfont scrollert" id="stylet-2">"The time I spent while working on my project as a part of Aero Club under Kishan sir was a great learning experience for me, and I think it ended up being a pivotal part of my placement."</p>
                {/* <div className="miniSep" style={{ marginBottom: '25px', width: '70%', height: '3px' }} ></div> */}
                <h4>Soumya Khanna</h4>
                <a href="https://www.linkedin.com/in/soumya-khanna-20169040" target="_blank">
                  <i className="fab fa-linkedin fa-3x mx-2"></i>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                <img src={sarita} className="img-circle img-responsive" />
                <p className="testfont scrollert" id="stylet-2">"The journey began with Aero Club from the day when I took part in a flying challenging event in the first year. Learning aerodynamics, flying practice under the guidance of supportive and friendly seniors were excellent experiences for me. I'll always cherish all memories from participant to coordinator at Aero Club."</p>
                {/* <div className="miniSep" style={{ marginBottom: '25px', width: '70%', height: '3px' }} ></div> */}
                <h4>Sarita Chaudhary</h4>
                <a href="https://www.linkedin.com/in/sarita-chaudhary-b92170137/" target="_blank">
                  <i className="fab fa-linkedin fa-3x mx-2"></i>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                <img src={kishan} className="img-circle img-responsive" />
                <p className="testfont scrollert" id="stylet-2">"Thanks to the club for everything. Being student president for the session 2018-19, we reimagined the whole way of doing things. We launched around 20+ projects, initiated Prosang, connected club projects to the companies, and launched my startup TSAW Drones during the event. The club's time, with the members, transformed me a lot, taught me to dare things & do it uniquely, being fearless."</p>
                {/* <div className="miniSep" style={{ marginBottom: '25px', width: '70%', height: '3px' }} ></div> */}
                <h4>Kishan Tiwari</h4>
                <a href="https://www.linkedin.com/in/kishan-tiwari-poseidon/" target="_blank">
                  <i className="fab fa-linkedin fa-3x mx-2"></i>
                </a>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#testimonial4" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
        {/* </Jumbotron> */}
      </div>
      
    </section>
  );
}