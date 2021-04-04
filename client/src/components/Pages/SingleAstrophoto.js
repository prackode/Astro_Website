import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../../css/SingleProject.css";
import Loading from "../../Animations/Loading";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars";

function SingleAstrophoto() {
    const { photoId } = useParams();
    const [photo, setPhoto] = useState(undefined);
    const history = useHistory();

    useEffect(() => {
        document.title = `Project-${photoId} | ${REACT_APP_BASE_TITLE}`;
        fetch(`${REACT_APP_SERVER}/api//astrophotographies/${photoId}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) history.push("/404");
                console.log(data)
                setPhoto(data);
            });
    }, []);

    return (
        <>
            <Loading time={2} />
            <div className="my-5">
                <div className="mb-4">
                    <h4 className='my-3' style={{ marginBottom: "0px", textAlign: "center" }}>{photo?.title}</h4>
                    <div
                        className="miniSep"
                        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                    ></div>
                </div>
                <div className="container">
                    <hr />
                    <div className="image mx-auto" style={{ maxWidth: '30rem' }}>
                        <img src={photo?.picURL} alt="img" style={{ width: '100%', height: '100%' }} className='my-3' />
                    </div>
                    <hr />
                    <div>
                        <h3 className='my-3 subheaders'>Instrument Used</h3>
                        <p className="px-5">{photo?.instrumentUsed}</p>
                    </div>
                    <div>
                        <h3 className='my-3 subheaders'>Instrument Settings</h3>
                        <p className="px-5">{photo?.instrumentSettings}</p>
                    </div>
                    <div>
                        <h3 className='my-3 subheaders'>tags</h3>
                        <div className="d-flex px-5 flex-wrap">
                            {photo?.tags?.map((tag, i) => (
                                <h5 className="d-inline" key={i} style={{ cursor: 'pointer' }}><span className="badge badge-primary my-1 mx-1">{tag}</span></h5>
                            ))}
                        </div>
                    </div>
                    <div className='my-5'>
                        <h3 className='mb-4 subheaders'>Overview</h3>
                        <p
                            className="px-5"
                            dangerouslySetInnerHTML={{ __html: photo?.overview }}
                        ></p>
                    </div>
                    <div>
                        <div>
                            <h3 className='my-3 subheaders'>photo By: </h3>
                            <ul className="px-5">
                                {photo?.members?.map((member) =>
                                    member.accepted ? (
                                        <li>
                                            {member.user.linkedin_url ? (
                                                <a href={member.user.linkedin_url}>{member.user.name}</a>
                                            ) : (
                                                <span>{member.user.name}</span>
                                            )}
                                        </li>
                                    ) : (
                                        <></>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="collapse collapsews" id="collapse11">
                            <div >
                                <h3 className='my-3 subheaders'>Description</h3>
                                <p
                                    className="px-3"
                                    dangerouslySetInnerHTML={{ __html: photo?.description }}
                                ></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleAstrophoto;
