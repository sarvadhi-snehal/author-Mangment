import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAuthor } from "../../redux/index";
import { useHistory, Link } from "react-router-dom";

function AuthorList() {
  const authors = useSelector((state) => state.authors);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleUpdate = (author) => {
    history.push({
      pathname: "/addauthor",
      state: { ...author },
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteAuthor(id));
  };

  return authors.length === 0 ? (
    <div className="row text-center d-flex justify-content-center  mt-5 ">
      <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center flex-column align-items-center  p-5">
        <h1 className=" bg-Secondary p-3 text-dark"> No Authors </h1>
        <p className="text-primary"> To add Author click below:</p>

        <Link to="/addauthor" className="btn btn-info">
          Add Author
        </Link>
      </div>
    </div>
  ) : (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        {authors.map((author, i) => {
          const { id, name, age, surname, avatar } = author;

          return (
            <div
              key={id}
              className="d-flex align-items-center justify-content-center bg-light m-2 p-3 col-sm-12 col-md-10 col-lg-8"
            >
              <p>{i + 1}</p>
              <div className="info d-flex align-items-center justify-content-evenly">
                <div className="w-25 ps-2 align-items-center d-flex justify-content-center ">
                  <img src={avatar} className="img-fluid" alt="author avatar" />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column p-3">
                  <p className="text-primary ">
                    Name: {name} {surname}
                  </p>
                  <p className="text-primary">Age: {age}</p>
                </div>
              </div>

              <div className="btn">
                <button
                  className="btn btn-danger m-2"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-info m-2"
                  onClick={() => handleUpdate(author)}
                >
                  Update
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  // : <h1>Data recived</h1>
}

export default AuthorList;
