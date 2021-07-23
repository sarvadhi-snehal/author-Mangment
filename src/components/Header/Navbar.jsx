import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  const navLogo =
    "https://upload.wikimedia.org/wikipedia/commons/6/6f/Portrait_de_Dante.jpg";
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          <img className="logo" src={navLogo} alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              activeClassName="active"
              className="nav-link"
              aria-current="page"
              to="/home"
            >
              Home
            </NavLink>

            <NavLink activeClassName="active" className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/authors"
            >
              Authors
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link "
              to="/addauthor"
            >
              Add Author
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/authorslist"
            >
              View Datatable Authors
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
