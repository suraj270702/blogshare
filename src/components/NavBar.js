import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase-configuration";
import { signOut } from "firebase/auth";
const NavBar = ({ login, setLogin }) => {
  console.log(login + "navbar");
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setLogin(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Blog Share
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              {!login && (
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              )}
              {login && (
                <li className="nav-item">
                  <Link to="/createpost" className="nav-link">
                    Create Your Post
                  </Link>
                </li>
              )}
              {login && (
                <li className="nav-item">
                  <button className="btn btn-outline-danger" onClick={logout}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
