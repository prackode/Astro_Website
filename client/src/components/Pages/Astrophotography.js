import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Loading from "../../Animations/Loading";
import "../../css/featured-proj.css";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars";
import { animateScroll } from 'react-scroll'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";

function AstrophotoGraphy() {
  const [photos, SetPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [no_of_pages, setNoOfPages] = useState(0);
  const [page, SetPage] = useState(1);
  const [currTag, setCurrTag] = useState('')
  const [fetching, setFetching] = useState(1)

  useEffect(() => {
    document.title = `Astrophotography | ${REACT_APP_BASE_TITLE}`;
    animateScroll.scrollToTop()
    fetch(`${REACT_APP_SERVER}/api/astrophotographies/approved`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        SetPhotos(data);
        setCurrTag('')
        setFilteredPhotos(data);
        setNoOfPages(Math.ceil(data.length / photos_per_page))
        setFetching(0)
      });
  }, []);

  const photos_per_page = 9;

  const handleTagFilter = (tag) => {
    setCurrTag(tag.name)
    animateScroll.scrollToTop()
    setFilteredPhotos(
      photos.filter((item) => item.tags.some((itag) => itag._id === tag._id))
    );
    SetPage(1)
    setNoOfPages(Math.ceil(photos.filter((item) => item.tags.some((itag) => itag._id === tag._id)).length / photos_per_page));
  };

  return (
    <>
      <Loading time={2} fetching={fetching} />
      <div className="cont astrobg">
        <h3 className="my-3 titleBold d-flex justify-content-center topic">
          <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>
            ASTROPHOTOGRAPHY
          </p>
        </h3>
        <div
          className="miniSep"
          style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
        >
        </div>
        {
          currTag && <h2 className='text-center'><span className="badge badge-primary my-2">
            {currTag}
          </span></h2>
        }
        <div
          className="main"
          style={{ overflow: "hidden", minHeight: "31.7vh" }}
        >
          <ul className="cards">
            {filteredPhotos
              .slice((page - 1) * photos_per_page, page * photos_per_page)
              .map((photo) => (
                <li
                  className="cards_item"
                  key={photo.id}
                >
                  <div className="card hovpic astroproj">
                    {/* <p className="content_img"> */}
                    <LazyLoadImage
                      alt='astro'
                      effect="blur"
                      src={photo.pic || 'https://lh3.googleusercontent.com/KeGUSRLz1rB_jHD09u2KLp7UGC-zTcyFSSrOjv12CNx49f1Irx8OGljn9Az-tFJmaJQ6tuEPG6DCMPQVIyAVhkqGv0ogjyqXsuJQMWYghkvo1yebCArmoa7NO021e3D9LJiNx1ZATQ=w2400'}
                    />
                    <div
                      className="card_text forphone forphone3 img-text"
                      style={{ width: "100%", height: "3rem" }}
                    >
                      <Link to={`/astrophotography/${photo.id}`}><p style={{ paddingLeft: "2px" }} className="clickable">Click to Know More </p></Link>
                      {/* <a href= ></a> */}
                      {photo.tags.map((tag, i) => (
                        <h5
                          className="d-inline"
                          key={i}
                          style={{ cursor: "pointer" }}
                          onClick={(e) => handleTagFilter(tag)}
                        >
                          <span className="badge badge-primary my-1 mx-1">
                            {tag.name}
                          </span>
                        </h5>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          <div className="float-right mr-5 mb-3 mt-5">
            {page > 1 && (
              <Button
                className="mx-1"
                variant="primary"
                onClick={() => {
                  animateScroll.scrollToTop()
                  SetPage((page) => page - 1);
                }}
              >
                <i className="fa fa-angle-double-left"></i> Previous
              </Button>
            )}
            {page < no_of_pages && (
              <Button
                variant="primary"
                className="mx-1"
                onClick={() => {
                  animateScroll.scrollToTop()
                  SetPage((page) => page + 1);
                }}
              >
                Next <i className="fa fa-angle-double-right"></i>
              </Button>
            )}
          </div>
          {
            <Button className='float-left ml-3 my-3' onClick={e => {
              setFilteredPhotos(photos)
              SetPage(1)
              setNoOfPages(Math.ceil(photos.length / photos_per_page))
              animateScroll.scrollToTop()
              setCurrTag('')
            }}>All Images</Button>
          }
        </div>
      </div>
    </>
  );
}

export default AstrophotoGraphy;
