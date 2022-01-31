import React, { useEffect } from "react";
import Loading from "../../../Animations/Loading";
import "../../../css/Event.css";
import m from "../../../images/utils/avishkar.png";
import Phantom from "../../../images/Events/Phantom.PNG";

import lostinspace from "../../../images/Events/lostinspace.PNG";
import { REACT_APP_BASE_TITLE } from "../../../globalVars"
import { animateScroll } from "react-scroll";
import AvishkarCard from "./AvishkarCard";

export default function Avishkar() {

    // initial page loading
    useEffect(() => {
        document.title = `Avishkar | ${REACT_APP_BASE_TITLE}`;
        animateScroll.scrollToTop()
    }, [])

    // new events for each year can be added as below
    const events = [
        {
            year: "2021",
            startDate: "26th",
            EndDate: "29th December 2021",
            LISEventname: "Quizing event",
            LISProblemStatement: "https://drive.google.com/file/d/1fDKJd6XrvdA3u1uQgTCXZW8URKh_somX/view?usp=sharing",
            YTlink: null,
        },
        {
            year: "2020",
            startDate: "31st October",
            EndDate: "3rd November 2020",
            LISEventname: "LIS comprised of 2 events: Quiz and a problem statement to implement",
            LISProblemStatement: "https://drive.google.com/file/d/1DbkAoBGyDD5eRcRWVCJ-XSouIjnWyf-d/view?usp=sharing",
            YTlink: "https://youtube.com/playlist?list=PLY2QAhcYlBMAngxpVSCn4C2GAEZrMTrfU",
        },
        {
            year: "2019",
            startDate: "18th",
            EndDate: "21st September 2019",
            LISEventname: "LIS was composed of 1 event: Quiz",
            LISProblemStatement: "https://drive.google.com/file/d/1atcwBaM5EoTfrCXJUu_eFphPkTy8Fr_w/view?usp=sharing",
            YTlink: null,
        },
    ]

    return (
        <>
            <Loading time={1} />
            <section className="section1 pagese">
                <div className="overlaye starbg">
                    <div className="containere ">
                        <h1 className="titlee">
                            <div className="pageTitlee titleBolde">
                                {/* <div><img src={`${baseURL}/images/utils/Prosang.jpg`} alt="prosang" srcset="" style={{alignItems:'center', width: '12%'}} /></div> */}
                                Avishkar
                                {/* </div> */}
                            </div>
                        </h1>
                        <div className="content-wrapper">
                            <div className="img-wrapper">
                                <div className="img imgev">
                                    <img
                                        src={m}
                                        alt="avishkar"
                                        srcSet=""
                                        style={{ alignItems: "center" }}
                                    />
                                </div>
                            </div>
                            <div
                                className="text-wrapper"
                                style={{
                                    border: "2px solid white",
                                    borderRadius: "10px",
                                    padding: "10px",
                                }}
                            >
                                {/* <div > */}
                                <p className="texte">
                                    Avishkar is MNNIT's annual techno-management festival and is held either in September or October. Equipped with many technical and managerial events, Avishkar is an excellent platform for students to hone their skills, create outstanding projects, expand their networks, and build a superb CV.
                                </p>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className=" pagesa">
                <div className="overlaya">
                    <div className="pageTitlea titleBolda">
                        Avishkar
                            </div>
                </div>
            </div> */}
            {/* <Jumbotron> */}
            <section className="wrapper">
                <div className="container-f">
                    {/* <div className="pageTitle titleBold">
                        AVISHKAR
                    </div> */}
                    {/* <div className="miniSep"></div> */}
                    <div className="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24">
                        <div className="sm:w-2/3 sm:mr-10">
                            <div className="text">
                                {/* <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">about us</span> */}
                                <h2 className="font-bold text-3xl my-4 sm:text-4xl">
                                    <span className="text-indigo-600 font-bold cent">About the Event</span>
                                </h2>
                                <div className="bgBox phonev"
                                    style={{
                                        border: "3px solid rgb(22, 101, 151)",
                                        padding: "2px",
                                        borderRadius: "8px",
                                        margin: "2em",
                                        fontSize: "14px"
                                    }}
                                >
                                    <div style={{ padding: "10px" }}>
                                        <p className="text-gray-700 texte" style={{ fontSize: "16px" }}><i>
                                            Avishkar is MNNIT's annual techno-management festival and is held either in September or October. Equipped with many technical and managerial events, Avishkar is an excellent platform for students to hone their skills, create outstanding projects, expand their networks, and build a superb CV.</i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bgBox"
                        style={{
                            border: "3px solid rgb(22, 101, 151)",
                            padding: "2px",
                            borderRadius: "8px",
                            margin: "2em",
                            fontSize: "14px"

                        }}
                    >
                        <div style={{ padding: "10px" }} className="texte">
                            <p className="text-gray-700" style={{ fontSize: "16px" }}><i>
                                All the college departments and technical clubs of MNNIT conduct multiple exciting competitions during Avishkar, which are open to students of MNNIT and students all across the nation. These competitions witness cut-throat competitors every year and truly bring alive the "Ideate, Innovate and Create" spirit amongst budding technocrats. </i>
                            </p>
                            <p className="text-gray-700" style={{ fontSize: "16px" }}><i>
                                Apart from these competitions, many inspiring talks by eminent people in the industry and academia and other activities also happen during Avishkar, enlightening and preparing its participants for many challenges that lie ahead.</i>
                            </p>
                            <p classNameName="text-gray-700" style={{ textAlign: "justify" }}>
                                <i style={{ fontSize: "medium" }}>As a technical club, Astrowing MNNIT organizes one event during Avishkar under Aerodynamix:</i><br></br><br></br><ul className="ulprosang">

                                    <li><b>Lost in Space: </b>
                                        Astrowing, under Aeroclub, organizes the competition ‘Lost in Space’ in MNNIT. An enlightening yet fun event, LIS mainly deals with astronomy, space science, and theoretical aspects.</li><br></br>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="cont featured-proj">
                        <div className="main">
                            <ul className="cards">
                                <li className="cards_item" data-aos="flip-left" data-aos-duration="1000">
                                    <div className="card">
                                        <div className="card_image">
                                            <img className="evavishkar" src={lostinspace} style={{ marginBottom: "2px" }} />
                                        </div>
                                        <div className="card_content avishkar_cont">
                                            <h2 className="card_title">Lost in Space</h2>
                                            <p className="card_text" style={{ fontSize: "small" }}>
                                                This quizing event can help you gain a feel of how
                                                exactly space missions are planned and executed, down to controls and choice of parts
                                                for designing your own craft.
                                            </p>
                                            {/* <button className="btns card_btns">Read More</button> */}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* </Jumbotron> */}
            {
                events.map((e, i) => {
                    return (
                        <AvishkarCard
                            id={i}
                            Year={e.year}
                            Start={e.startDate}
                            End={e.EndDate}
                            LISevent={e.LISEventname}
                            LISProblemLink={e.LISProblemStatement}
                            YTlink={e.YTlink}
                        />
                    )
                })
            }
        </>
    );
}