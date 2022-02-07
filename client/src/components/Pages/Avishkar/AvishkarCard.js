import "../../../css/Event.css";

const AvishkarCard = (props) => {
    return (
        <section className="wrapper">
            <div className="container-f">
                <div>
                    <p className="cent">
                        <a
                            className="btn btn-outline-dark btn-lg"
                            data-toggle="collapse"
                            href={"#collapseExample" + props.id}
                            role="button"
                            aria-expanded="false"
                            aria-controls={"collapseExample" + props.id}
                        >
                            Avishkar {props.Year}
                        </a>
                    </p>
                    {/* <div className="colarea"> */}
                    <div className="collapse colarea" id={"collapseExample" + props.id}>
                        <div className="content yearevent">
                            <div className="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24">
                                <div className="sm:w-2/3 sm:mr-10">
                                    <div className="text">
                                        {/* <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">about us</span> */}

                                        <h5 className="font-bold text-3xl my-4 sm:text-4xl">
                                            <span className="text-indigo-300 font-bold">Avishkar {props.Year} was organised from {props.Start} - {props.End}
                                            </span>
                                        </h5>
                                        <div
                                            className="miniSep"
                                            style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>



                            <div className="text">
                                <h3 className="font-bold text-3xl my-4 sm:text-4xl">
                                    <span className="text-indigo-300 font-bold">Competitions</span>
                                </h3>
                                <div
                                    className="miniSep"
                                    style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                                ></div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-4">

                                    </div>

                                    <div className="col-xs-12 col-sm-4">
                                        <div className="card cardev">
                                            {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Guardian} />
                                                </a> */}
                                            <div className="card-content cardev-content">
                                                <h4 className="card-title cardev-title">
                                                    <a>
                                                        Lost in Space
                                                    </a>
                                                </h4>
                                                <p className="phonetxt">
                                                    {props.LISevent}<br></br><br></br>
                                                </p>
                                            </div>
                                            <div className="card-read-more">
                                                <a
                                                    href={props.LISProblemLink}
                                                    className="btn btn-link btn-block"

                                                >
                                                    Problem Statement
                                                </a>
                                            </div>
                                            {props.YTlink ?
                                                <div className="card-read-more">
                                                    <a
                                                        href={props.YTlink}
                                                        className="btn btn-link btn-block"
                                                    >
                                                        <i style={{ color: "red" }} className="fab fa-youtube fa-lg"></i>
                                                    </a>
                                                </div>
                                                : null}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default AvishkarCard;