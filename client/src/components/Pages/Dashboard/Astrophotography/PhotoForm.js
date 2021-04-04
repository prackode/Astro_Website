import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useDispatch } from "react-redux";
import { REACT_APP_SERVER } from "../../../../grobalVars";
import { CloseRounded } from '@material-ui/icons';

export default function PhotoForm() {
    const [formData, setformData] = useState({
        title: "",
        instrumentUsed: "",
        instrumentSettings: "",
        description: "",
        imageData: null,
    });

    const [tags, setTags] = useState([])

    const [definedTags, setDefinedTags] = useState(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Moon', 'Deep sky objects', 'Sun', 'Star Trails', 'Constellation', 'Nebulae', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    return (
        <form
            className='my-5'
            onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                const form = new FormData()
                form.append('image', formData.imageData)
                form.append('title', formData.title)
                form.append('instrumentSettings', formData.instrumentSettings)
                form.append('instrumentUsed', formData.instrumentUsed)
                form.append('description', formData.description)
                form.append('tags', tags)
                console.log(form)
                fetch(`${REACT_APP_SERVER}/api/astrophotographies/user`, {
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                        "Content-Type": "multipart/form-data"
                    },
                    body: form,
                })
                    .then((res) => {
                        setformData({
                            title: "",
                            overview: "",
                            description: "",
                            objective: "",
                            imageData: null,
                        });
                        setTags([])
                        res.json().then((data) => {
                            dispatch({ type: "CREATE_PHOTO", payload: data });
                            setLoading(false);
                        });
                    })
                    .catch((err) => {
                        setLoading(false);
                        setformData({
                            title: "",
                            overview: "",
                            description: "",
                            objective: "",
                            imageData: null,
                        });
                        setTags([])
                    });
            }}
        >
            <div className="form-floating mb-3 ">
                <label htmlFor="title">Title *</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={formData.title}
                    onChange={(e) => {
                        setformData((prev) => ({
                            ...prev,
                            title: e.target.value,
                        }));
                    }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="file" className="sr-only">File</label>
                <div className="input-group">
                    {
                        !formData.imageData ?
                            <div className="btn btn-primary custom-file-uploader mr-1" >
                                <input type="file" name="file"
                                    className="btn btn-primary"
                                    disabled={formData.imageData}
                                    multiple={false} accept='image/*'
                                    onChange={(e) => {
                                        setformData((prev) => ({
                                            ...prev,
                                            imageData: e.target.files[0]
                                        }));
                                    }} />Select a photo *
                    </div> :
                            <button className="btn btn-primary mr-1"
                                onClick={(e) => setformData((prev) => ({
                                    ...prev,
                                    imageData: null
                                }))}
                            >
                                Remove</button>
                    }
                    <input type="text" name="filename" className="form-control" placeholder="No file selected" readOnly value={formData.imageData ? formData.imageData.name : null} />
                    <span className="input-group-btn">
                    </span>
                </div>
            </div>
            <label htmlFor="description">Description *</label>
            <ReactQuill
                className="mb-3"
                id='description'
                modules={{
                    toolbar: [
                        ["bold", "italic", "underline", "strike"],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ size: ["small", false, "large", "huge"] }],
                        [{ font: [] }],
                        [{ color: [] }, { background: [] }],
                        [{ list: "ordered" }, { list: "bullet" }],
                        [{ script: "sub" }, { script: "super" }],
                        ["blockquote", "code-block"],
                        [{ indent: "-1" }, { indent: "+1" }],
                        [{ direction: "rtl" }],
                        [{ align: [] }],
                        ["link", "image", "video"],
                        ["clean"],
                    ],
                    imageResize: {
                        displayStyles: {
                            backgroundColor: "black",
                            border: "none",
                            color: "white",
                        },
                        modules: ["Resize", "DisplaySize", "Toolbar"],
                    },
                }}
                value={formData.description}
                onChange={(e) => {
                    setformData((prev) => ({
                        ...prev,
                        description: e,
                    }));
                }}
            />
            <div className="form-floating mb-3">
                <label htmlFor="instrumentsUsed">Instrument Used *</label>
                <input
                    type="text"
                    className="form-control"
                    id="instrumentsUsed"
                    required
                    value={formData.instrumentUsed}
                    onChange={(e) => {
                        setformData((prev) => ({
                            ...prev,
                            instrumentUsed: e.target.value,
                        }));
                    }}
                />
            </div>
            <div className="form-floating mb-3">
                <label htmlFor="instrumentSettings">Instrument Settings *</label>
                <input
                    type="text"
                    className="form-control"
                    id="instrumentSettings"
                    required
                    value={formData.instrumentSettings}
                    onChange={(e) => {
                        setformData((prev) => ({
                            ...prev,
                            instrumentSettings: e.target.value,
                        }));
                    }}
                />
            </div>
            <div className="form-floating mb-3 tags">
                <label htmlFor="embed">Tags</label> <br />
                {
                    tags.map((tag, i) => (
                        <h4 className="d-inline"><span className="badge badge-primary my-1 mx-1">{tag} <CloseRounded style={{ cursor: 'pointer' }}
                            onClick={() => {
                                setDefinedTags(prev => [...prev, tag])
                                setTags(prev => prev.filter(item => prev.indexOf(item) !== i))
                            }}
                        /></span></h4>
                    ))
                }
                <div className="dropdown">
                    <button id="dLabel" className="dropdown-select" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select
                    <span className="caret"></span>
                    </button>

                    <ul className="dropdown-menu" style={{ overflowY: 'auto', maxHeight: '120px' }} aria-labelledby="dLabel">
                        {
                            definedTags.map((tag, i) => (
                                <li
                                    key={i}
                                    onClick={() => {
                                        setTags(prev => [...prev, tag])
                                        setDefinedTags(prev => prev.filter(item => item !== tag))
                                    }}>{tag}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <button type="submit" className="btn btn-primary my-3">
                {loading ? "loading..." : "Submit"}
            </button>
        </form >
    );
}
