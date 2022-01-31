import "../../../css/Sponsor.css";

const SponsorCard = (props) => {
      return (
            <div className="card card-item shadow c1">
                  <div className="img-wrappers mx-auto">
                        <a
                              className="card-title text-center sponimg"
                              href={props.link}
                              target="_blank"
                        >
                              <img
                                    className="card-img-top mx-auto imgphone sponimg"
                                    src={props.image}
                                    alt={props.imageAlt}
                                    srcSet=""
                              />
                        </a>
                  </div>
                  <div className="card-body d-flex flex-column transition: transform 400ms ease-out">
                        <a
                              className="card-title text-center sponabt"
                              href={props.link}
                              target="_blank"
                        >
                              {props.title}
                        </a>
                        <p className="card-text txt scroller" id="style-2">
                              <div className="">
                                    {props.desc}
                              </div>
                        </p>
                        {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
                  </div>
            </div>
      )
}

export default SponsorCard;