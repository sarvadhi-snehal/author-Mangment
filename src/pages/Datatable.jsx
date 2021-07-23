import React from "react";
// import "antd/dist/antd.css";
// import { Avatar, Table } from 'antd';
import { deleteAuthor } from "../redux/index";
import { useHistory, Link } from "react-router-dom";
import  '../customScss/custom.scss'
import { useSelector, useDispatch } from "react-redux";

function Datatable() {
  const authors = useSelector((state) => state.authors);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleUpdate = (author) => {
    history.push({
      pathname :'/addauthor',
      state : {...author}
    })
  };

  const handleDelete = (id) => {
    dispatch(deleteAuthor(id));
  };
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="d-flex justify-content-center align-items-center flex-column ">
 
          <div className="col-sm-12 col-md-12 col-lg-12 w-75 mb-3 ">
            <Link
              to="/addauthor"
             
              className="text-center btn btn-info"
              forceRefresh={true}
            >
              Add Author
            </Link>
          </div>
     
         { authors.length === 0? 
       <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center flex-column align-items-center  p-5">
       <h1 className=" bg-Secondary p-3 text-dark"> No Authors </h1>
     <p className="text-primary"> To add Author click below:</p>
 
     <div className=" d-flex align-items-center justify-content-center">
  <Link to="/addauthor" 
          className="text-info"
        forceRefresh={true}>
          Add Author
        </Link>
        </div>
   
       </div>
         
         :<table class="table table-light table-hover w-75">
            <thead>
              <tr>
                <th className="w-auto" scope="col">No</th>
                <th className="w-25" scope="col">Profile Picture</th>
                <th className="w-25" scope="col">Name</th>
                <th className="w-25" scope="col">Age</th>
                <th className="w-25" scope="col">Action</th>
              </tr>
            </thead>
            {authors.map((author,i) => (
              <tbody className="table-striped">
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>
            
                    <img src={author.avatar} className="img-fluid w-50" alt="author avatar" />
                 
                      </td>
                  <td className="fs-5 text" >{author.fullName}</td>
                  <td>{author.age}</td>
                  <td > <div className="btn">
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => handleDelete(author.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-info m-2"
                    onClick={() => handleUpdate(author)}
                  >
                    Update
                  </button>
                 
                </div></td>
                </tr>
              </tbody>
            ))}
          </table>}
        </div>
      </div>
    </div>
  );
}

export default Datatable;
