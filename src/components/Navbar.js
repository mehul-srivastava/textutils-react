import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  const toggleDarkMode = () => {
    props.toggleAlert("success", "Theme mode has been changed!");
    props.toggleMode();
  };

  const toggleBackgroundTheme = (color) => {
    props.toggleMode(color);
  };

  const themeBtnStyle = {
    fontSize: "16px",
    borderRadius: "50%",
    padding: "10px",
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg sticky-top navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <b>{props.title}.com</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            {props.mode === "dark" ? (
              <div className="me-4 mb-1 align-middle">
                <button
                  className="btn btn-danger mx-2"
                  style={themeBtnStyle}
                  onClick={() => toggleBackgroundTheme("red")}
                >
                  {" "}
                </button>
                <button
                  className="btn btn-purple mx-2"
                  style={themeBtnStyle}
                  onClick={() => toggleBackgroundTheme("purple")}
                >
                  {" "}
                </button>
                <button
                  className="btn btn-primary mx-2"
                  style={themeBtnStyle}
                  onClick={() => toggleBackgroundTheme("blue")}
                >
                  {" "}
                </button>
                <button
                  className="btn btn-success mx-2"
                  style={themeBtnStyle}
                  onClick={() => toggleBackgroundTheme("green")}
                >
                  {" "}
                </button>
              </div>
            ) : null}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={toggleDarkMode}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {props.mode === "dark" ? "Light" : "Dark"} Mode
              </label>
            </div>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "TextUtils.com",
  aboutText: "About Us",
};

export default Navbar;
