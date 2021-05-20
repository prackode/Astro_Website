import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { REACT_APP_SERVER } from "../../../../grobalVars";
import { CloseRounded } from "@material-ui/icons";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import DashQuill from "../DashQuill";

export default function PhotoEdit({ photo }) {
  const [formData, setformData] = useState({});
  const [tags, setTags] = useState([]);
  const [definedTags, setDefinedTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [pic, setpic] = useState("");

  useEffect(() => {
    if (photo) {
      fetch(`${REACT_APP_SERVER}/api/tags`, { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDefinedTags(
            data.filter(
              (item) => !photo.tags.find((tag) => tag.name === item.name)
            )
          );
          setpic(photo.pic);
          setformData({
            ...photo,
            file: null,
          });
          setTags(photo.tags);
        });
    }
  }, [photo]);

  const checkMimeType = (event) => {
    //getting file object
    let files = event.target.files;
    //define message container
    let err = "";
    // list allow mime type
    const types = ["image/png", "image/jpeg", "image/gif"];
    // loop access array
    for (var x = 0; x < files.length; x++) {
      // compare file type find doesn't matach
      if (types.every((type) => files[x].type !== type)) {
        // create error message and assign to container
        err += files[x].type + " is not a supported format\n";
      }
    }

    if (err !== "") {
      // if message not same old that mean has error
      event.target.value = null; // discard selected file
      toast.error(err);
      return false;
    }
    return true;
  };
  const checkFileSize = (event) => {
    let files = event.target.files;
    let size = 1024 * 1204 * 1;
    let err = "";
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err += files[x].type + `is too large, max allowed 1 MB\n`;
      }
    }
    if (err !== "") {
      event.target.value = null;
      toast.error(err);
      return false;
    }

    return true;
  };
  const onChangeHandler = (event) => {
    const file = event.target.files[0];
    setpic(URL.createObjectURL(event.target.files[0]));
    if (checkMimeType(event) && checkFileSize(event)) {
      setformData({
        ...formData,
        file: file,
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("file", formData.file);
    data.append("title", formData.title);
    data.append("instrumentUsed", formData.instrumentUsed);
    data.append("instrumentSettings", formData.instrumentSettings);
    data.append("desc", formData.desc);
    data.append("tags", JSON.stringify(tags));
    fetch(`${REACT_APP_SERVER}/api/astrophotographies/user/${photo._id}`, {
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: data,
    })
      .then((res) => {
        res.json().then((data) => {
          data._id = data.id;
          toast.success("Photo Updated !");
          dispatch({ type: "UPDATE_PHOTO", payload: data });
          setLoading(false);
        });
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <div>
      <p className="d-flex justify-content-center">
        <button
          className="btn btn-primary px-4"
          type="button"
          data-toggle="collapse"
          data-target="#collapsephotoedit"
          aria-expanded="false"
          aria-controls="collapsephotoedit"
        >
          Edit
        </button>
      </p>
      <div className="collapse my-4" id="collapsephotoedit">
        <form className="my-5" onSubmit={submitHandler}>
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
          <div className="form-floating mb-3 ">
            <label htmlFor="title">Image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              onChange={onChangeHandler}
            />
            <img src={pic} />
          </div>
          <label htmlFor="description">Description *</label>
          <DashQuill
            text={formData.desc}
            id={v4()}
            setText={(txt) =>
              setformData((prev) => ({
                ...prev,
                desc: txt,
              }))
            }
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
            {tags.map((tag, i) => (
              <h4 className="d-inline">
                <span className="badge badge-primary my-1 mx-1">
                  {tag.name}{" "}
                  <CloseRounded
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setDefinedTags((prev) => [...prev, tag]);
                      setTags((prev) =>
                        prev.filter((item) => item._id !== tag._id)
                      );
                    }}
                  />
                </span>
              </h4>
            ))}
            <div className="dropdown">
              <button
                id="dLabel"
                className="dropdown-select"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select
                <span className="caret"></span>
              </button>

              <ul
                className="dropdown-menu"
                style={{ overflowY: "auto" }}
                aria-labelledby="dLabel"
              >
                {definedTags.map((tag, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setTags((prev) => [...prev, tag]);
                      setDefinedTags((prev) => {
                        const new_def = prev.filter(
                          (item) => item._id !== tag._id
                        );
                        return new_def;
                      });
                    }}
                  >
                    {tag.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            data-toggle="collapse"
            data-target="#collapsephotoedit"
            aria-expanded="false"
            aria-controls="collapsephotoedit"
            className="btn btn-primary my-3">
            {loading ? "loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
