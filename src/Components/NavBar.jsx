import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "../Css/NavBar.css";

const navLinkStyle = ({ isActive }) => {
  return {
    color: isActive ? "green" : "black",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none", 
    borderBottom: isActive ? "3px solid green" : "none",
  };
};

const NavBar = () => {
  const navCollapseRef = useRef(null);

  const handleNavLinkClick = () => {
    if (navCollapseRef.current && navCollapseRef.current.classList.contains("show")) {
      navCollapseRef.current.classList.remove("show");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="imageLogo">
            <img src={require('../Assests/nouman.png')} alt="Nouman" />
          </div>
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
          <div className="collapse navbar-collapse" id="navbarNav" ref={navCollapseRef}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  style={navLinkStyle}
                  className="nav-link"
                  to="/"
                  onClick={handleNavLinkClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={navLinkStyle}
                  className="nav-link"
                  to="/about"
                  onClick={handleNavLinkClick}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={navLinkStyle}
                  className="nav-link"
                  to="/projects"
                  onClick={handleNavLinkClick}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={navLinkStyle}
                  className="nav-link"
                  to="/contact"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
