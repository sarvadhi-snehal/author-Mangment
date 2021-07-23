import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <section>
      <article>
        <h1 className="text-center text-danger bg-light bg-gradient mt-5 p-3 col-sm-12 col-md-6 m-auto">Welcome to Author Mangment</h1>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center" >
            <div className="col-sm-12 col-md-6 col-lg-3 m-5 border p-5  d-flex flex-column justify-content-center align-items-center">
              <p className="text-info">To add Author</p>
              <Link className="btn btn-primary " to="/addauthor">
                Add Author
              </Link>
            </div>
         

            <div className="col-sm-12 col-md-6 col-lg-3 m-5 border p-5  d-flex flex-column justify-content-center align-items-center ">
              <p className="text-info">To add Author</p>
              <Link className="btn btn-warning" to="/authorslist">
              View Datatable Authors
            </Link>
            </div>
       

           
         
        </div>
        </div>
      </article>
    </section>
  );
}

export default Home;
