import React from "react";
import { urlApi } from "../constants/urls";
import { Redirect } from "react-router-dom";

export const Navbar = ({ token }) => {
  const handleClick = () => {
    localStorage.clear();
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {token && (
            <a className="navbar-brand" href="/">
              Home
            </a>
          )}
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
            {token && (
              <div className="navbar-nav">
                <a className="nav-link" href="/operations">
                  Operations
                </a>
              </div>
            )}
            {/* <div className="navbar-nav">
              <a className="nav-link" href="/category">
                Categories
              </a>
            </div> */}
            { !token &&

            <div className="navbar-nav">
              <a className="nav-link" href="/login">
                login
              </a>
            </div>
}  {" "}
            {token && (
              <div className="navbar-nav">
                <a className="nav-link" onClick={handleClick} href="/login">
                  logout
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
