import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import "../../../../css/CreateBlog.css";
import "../../../../css/SingleBlog.css";
import { REACT_APP_SERVER } from "../../../../grobalVars"
import { Button, Container, Jumbotron, OverlayTrigger, Tab, Tabs, Tooltip } from "react-bootstrap";
import DashQuill from "../DashQuill";
import { v4 } from 'uuid'
import { useSelector, useDispatch } from "react-redux";

export default function EditBlog({ blog, setActive }) {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [title, setTitle] = useState("");
    const [pic, setPic] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (blog) {
            setTitle(blog.title)
            setPic(blog.pic)
            setBody(blog.body)
        }
    }, [blog])

    const year = {
        1: "1st year",
        2: "2nd year",
        3: "3rd year",
        4: "final year",
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

    const handleEditBlog = () => {
        setLoading(true);
        if (!title || !body) {
            toast.warn("Please specify all the details before submitting !");
            setLoading(false);
            return;
        }
        if (title === blog?.title && body === blog?.body && pic === blog?.pic) {
            toast.warn("You have to change something before submitting !");
            setLoading(false);
            return;
        }

        fetch(`${REACT_APP_SERVER}/api/blogs/dashboard/${blog._id}`, {
            method: "put",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                body,
                pic,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                document.getElementById(`${blog._id}`).click()
                setActive('view')
                dispatch({ type: "UPDATE_BLOG", payload: data });
                toast.success(
                    "Blog has been sent again for confirmation...Till then stay tuned !"
                );
            });
    }

    return (
        <>
            <div className="my-3">
                <Tabs defaultActiveKey="edit" id="uncontrolled-tab">
                    <Tab eventKey="edit" title="Layout">
                        <div className="container-fluid bg-light p-4 rounded my-5 mx-auto">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Title"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="basic-url"
                                    aria-describedby="basic-addon3"
                                    placeholder="image link ( optional )"
                                    value={pic}
                                    onChange={(e) => setPic(e.target.value)}
                                />
                            </div>
                            <DashQuill text={body} setText={setBody} id={v4()} />
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <Button
                                size='lg'
                                variant="primary"
                                onClick={handleEditBlog}
                            >
                                {loading ? "Loading ..." : "Edit"}
                            </Button>
                        </div>
                    </Tab>
                    <Tab eventKey="preview" title="Preview">
                        <div className='mt-3'>
                            <div
                                className="pagesp singleblog-pagesp"
                                style={{
                                    background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,.4))`,
                                }}
                            >
                                <div className="overlayp starbg">
                                    <div className="pageTitlep titleBoldp container col-11 pl-0">
                                        <div className='blog-title'>
                                            {title}
                                        </div>
                                        <p className="meta">
                                            <div className='mt-5 postedBy-info'>
                                                <i className="fa fa-user mr-3 ml-1"></i> by{" "}
                                                {
                                                    branch[user?.registration_no[4]] === 'NA' || user?.year === -1 || user?.linkedin_url ===
                                                        "https://www.linkedin.com/in/username/" ?
                                                        <>
                                                            {user?.name}
                                                        </>
                                                        :
                                                        <OverlayTrigger
                                                            placement="right"
                                                            delay={{ show: 250, hide: 400 }}
                                                            overlay={
                                                                <Tooltip>
                                                                    Branch - {branch[user?.registration_no[4]]} <br />
                                                                    {year[user?.year]}
                                                                </Tooltip>}
                                                        >
                                                            <div className='d-inline'>
                                                                <a href={user?.linkedin_url} target="_blank" style={{ textDecoration: 'none' }}>
                                                                    {user?.name}
                                                                </a>
                                                            </div>
                                                        </OverlayTrigger>
                                                }
                                                <br />
                                                <i className="fa fa-calendar mr-3 ml-1"></i>
                                                {new Date(Date.now()).toLocaleDateString()}
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Jumbotron
                                fluid
                                style={{
                                    background: "white",
                                    width: "100%",
                                }}
                                className="my-4"
                            >
                                <Container className="col-10 col-md-10 col-lg-11 singleblog-contents">
                                    {
                                        pic &&
                                        <>
                                            <hr />
                                            <div className="image mx-auto" style={{ maxWidth: '30rem' }}>
                                                <img src={pic} alt="img" style={{ width: '100%', height: '100%' }} className='my-3' />
                                            </div>
                                            <hr />
                                        </>
                                    }
                                    <div dangerouslySetInnerHTML={{ __html: body }} className='my-5 ql-editor'></div>
                                    <hr />
                                </Container>
                            </Jumbotron>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}
