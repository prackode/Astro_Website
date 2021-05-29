import React, { useState, useEffect } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import Loading from "../../Animations/Loading";
import "react-quill/dist/quill.snow.css";
import "../../css/featured-proj.css";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"
import { animateScroll } from "react-scroll";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

function Blogs() {

  const [blogs, SetBlogs] = useState([]);
  const [fetching, setFetching] = useState(1)
  const scrollId = useSelector(state => state.scrollId)
  const page = useSelector(state => state.page)
  const dispatch = useDispatch()
  const blogs_per_page = 9;
  const no_of_pages = Math.ceil(blogs.length / blogs_per_page);
  const year = {
    1: "1st year",
    2: "2nd year",
    3: "3rd year",
    4: "Final year",
  };
  const branch = {
    '0': 'Biotechnology',
    '1': 'Civil Engg.',
    '2': 'Electrical Engg.',
    '3': 'Mechanical Engg.',
    '4': 'Computer Science Engg.',
    '5': 'Electronics and Comm. Engg.',
    '6': 'Production and Industrial Engg.',
    '8': 'Information Technology',
    '9': 'Chemical Engg.',
    'x': 'NA'
  }

  useEffect(() => {
    document.title = `Blogs | ${REACT_APP_BASE_TITLE}`;
    if (!scrollId) animateScroll.scrollToTop()
    fetch(`${REACT_APP_SERVER}/api/blogs/toUI`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        SetBlogs(data)
        setFetching(0)
      });
  }, []);


  useEffect(() => {
    if (document.getElementById(scrollId)) {
      document.getElementById(scrollId).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    }
  }, [document.getElementById(scrollId)])

  return (
    <>
      <Loading time={2} fetching={fetching} />
      <div className="cont">
        <h3 className="my-3 titleBold d-flex justify-content-center topic">
          <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>BLOGS</p>
        </h3>
        <div
          className="miniSep"
          style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
        ></div>

        <div
          className="main"
          style={{ overflow: "hidden", minHeight: "31.7vh" }}
        >
          <ul className="cards mx-auto">
            {blogs
              .slice((page - 1) * blogs_per_page, page * blogs_per_page)
              .map(blog => (
                <li className="cards_item" data-aos="fade-up" data-aos="flip-left" data-aos-easing="linear" key={blog._id}
                  data-aos-duration="1500" id={blog._id}>
                  <div className="card cardproj">
                    <div className="card_image">
                      <img className="evfeatured" src={blog.pic || 'https://lh3.googleusercontent.com/L99OiiIfJs9-r2gT3wIS_yce11s6kcHQ_gAiKkjbxnpjesu6ciqRP9ZTt5Tq8CEyxbY_PHCvSuLFx3UF-dG02PbhP3QaFAi6aL1aAGDTCNzXVGP-rysXXV5Es2xLn8AIwUHYhGx6hw=w2400'} style={{ width: '100%', minHeight: '16rem' }} />
                    </div>
                    <div className="card_content forphone forphone1" style={{ width: '100%' }}>
                      <h2 className="card_title forphone forphone2" style={{ width: '100%', minHeight: '4rem' }}>{blog.title}</h2>
                      <p className="card_text forphone" style={{ width: '100%', height: '2rem', textAlign: 'initial' }}>
                        <i className="fa fa-user mr-3 ml-1"></i> By{" "}
                        {
                          branch[blog.postedBy.registration_no[4]] === 'NA' || blog.postedBy.year === -1 || blog.postedBy.linkedin_url ===
                            "https://www.linkedin.com/in/username/" ?
                            <>
                              {blog.postedBy.name}
                            </>
                            :
                            <OverlayTrigger
                              placement="right"
                              delay={{ show: 250, hide: 400 }}
                              overlay={
                                <Tooltip id={`tooltip-${blog._id}`}>
                                  Branch - {branch[blog.postedBy.registration_no[4]]} <br />
                                  {year[blog.postedBy.year]}
                                </Tooltip>}
                            >
                              <div className='d-inline'>
                                <a href={blog.postedBy.linkedin_url} className='posted_by' target="_blank" style={{ textDecoration: 'none' }}>
                                  {blog.postedBy.name}
                                </a>
                              </div>
                            </OverlayTrigger>
                        }
                      </p>
                      <Button
                        className="btns card_btns"
                        as={Link}
                        variant="primary"
                        to={`/blogs/${blog._id}`}
                        style={{ marginTop: 10 }}
                        onClick={() => dispatch({ type: "SET_ID", payload: blog._id })}
                      >
                        Read More
                  </Button>
                    </div>
                  </div>
                </li>
              )
              )}
          </ul>
          <div className="float-right mr-5 mb-3 mt-5">
            {page > 1 && (
              <Button
                className="mx-1"
                variant="primary"
                onClick={() => {
                  animateScroll.scrollToTop()
                  dispatch({ type: "SET_PAGE", payload: page - 1 })
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
                  dispatch({ type: "SET_PAGE", payload: page + 1 })
                }}
              >
                Next <i className="fa fa-angle-double-right"></i>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
