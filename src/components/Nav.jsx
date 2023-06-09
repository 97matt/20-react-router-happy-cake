import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg text-white bg-danger">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          style={{ border: "2px solid white" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon text-white"
            style={{ border: "2px solid white!important" }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/"
              >
                🏠 Home
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Link</a> */}
              <Link className="nav-link text-white" to="/contact">
                📱 Contacto
              </Link>
            </li>
          </ul>
          <ul className="mb-2 mb-lg-0">
            {/* <a className="nav-link" href="#">Link</a> */}
            <Link className="nav-link " to="/">
              Happy Cake 🎂
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
