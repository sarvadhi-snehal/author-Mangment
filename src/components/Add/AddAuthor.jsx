import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAuthor, updateAuthor } from "../../redux";
import { Redirect, useLocation, Link } from "react-router-dom";
function AddAuthor() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [age, setAge] = useState("");
  const [redir, setRedir] = useState(false);
  const [aId, setAId] = useState(null);
  const [avatar, setAvatar] = useState("");
  const [isUpdate, setIsUpdate] = useState(true);
  const file = useRef();
  console.log();

  useEffect(() => {
    if (location.state !== null && location.state !== undefined) {
      setIsUpdate(false);
      let author = location.state;
      setFName(author.name);
      setLName(author.surname);
      setAge(author.age);
      setAId(author.id);
      setAvatar(author.avatar);
    }
  }, [location]);

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    let author = null;
    if (!fName || !lName || !age || !file.current) {
      alert("enter valid data");
    } else {
      if (isNaN(age)) {
        alert("Please enter age in numbers");
      } else {
        if (aId === null) {
          if (file.current.files.length === 0) {
            alert("Please upload avatar");
          } else {
            const imgUrl = window.URL.createObjectURL(file.current.files[0]);
            author = {
              name: fName.trim(),
              surname: lName.trim(),
              age: parseInt(age),
              avatar: imgUrl,
            };
            setRedir(true);
            dispatch(addAuthor(author));
            formReset();
          }
        } else {
          let imgUrl = null;
          if (file.current.files[0] === undefined) {
            imgUrl = avatar;
          } else {
            imgUrl = window.URL.createObjectURL(file.current.files[0]);
          }
          author = {
            name: fName.trim(),
            surname: lName.trim(),
            age: parseInt(age),
            avatar: imgUrl,
            id: aId,
          };
          dispatch(updateAuthor(author));
          setRedir(true);
          formReset();
        }
      }
    }

    // console.log(author.avatar)
  };

  //add

  const formReset = () => {
    setAId(null);
    setAge("");
    setFName("");
    setAvatar("");
    setLName("");
    setIsUpdate(true);
  };
  const handleAdd = () => {
    formReset();
  };

  return (
    <div className="container-fluid">
      {!isUpdate && (
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-6 ">
            <Link
              to="/addauthor"
              onClick={handleAdd}
              className="text-center btn btn-info"
              forceRefresh={true}
            >
              Add Author
            </Link>
          </div>
        </div>
      )}
      <form
        className="row d-flex flex-column align-items-center justify-content-center p-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 col-sm-12 col-md-6 col-lg-6" key={aId}>
          <span className="form-label" id="basic-addon1">
            First Name
          </span>
          <input
            required={true}
            type="text"
            className="form-control"
            placeholder="First Name"
            aria-label="Name"
            name="name"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="mb-3 col-sm-12 col-md-6 col-lg-6">
          <span className="form-label" id="basic-addon1">
            Last Name
          </span>
          <input
            autoComplete="off"
            required={true}
            type="text"
            className="form-control"
            placeholder="Last Name"
            aria-label="Last Name"
            name="surname"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
        </div>

        <div className="mb-3 col-sm-12 col-md-6 col-lg-6 ">
          <span className="form-label" id="basic-addon1">
            Age
          </span>
          <input
            autoComplete="off"
            required={true}
            type="text"
            className="form-control"
            placeholder="Age"
            aria-label="Age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="mb-3 col-sm-12 col-md-6 col-lg-6">
          <span className="form-label" id="basic-addon1">
            Avatar
          </span>
          {avatar !== "" && (
            <div className="mw-25">
              <img className="img-fluid w-25" src={avatar} alt="user avatar" />
            </div>
          )}
          <input
            ref={file}
            type="file"
            className="form-control"
            aria-label="avatar"
            name="avatar"
          />
        </div>

        <div className="mb-3 col-sm-12 col-md-6 col-lg-6">
          <input
            type="submit"
            className="btn btn-primary"
            value={isUpdate ? "save" : "update"}
            aria-label="submit"
          />
        </div>
        {redir && <Redirect to="/authorslist" />}
      </form>
    </div>
  );
}

export default AddAuthor;
