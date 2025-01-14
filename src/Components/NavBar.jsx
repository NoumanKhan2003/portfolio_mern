import React, { useRef, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import NavBarCss from "../Css/NavBar.module.css";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { Box, Typography } from "@mui/material";
import { ModeContext } from "./ModeContext";
const navLinkStyle = ({ isActive }, mode) => ({
  color: isActive
    ? mode === "light"
      ? "rgb(0, 72, 0)"
      : "#0e9b0d"
    : mode === "light"
    ? "black"
    : "#f9ffba ",
  fontWeight: isActive ? "700" : "normal",
  textDecoration: "none",
  borderBottom: isActive ? "4px solid green" : "none",
  transform: isActive ? "scale(1.1)" : "scale(1)",
});

const NavBar = () => {
  const navCollapseRef = useRef(null);
  const navBarRef = useRef(null);

  const handleNavLinkClick = () => {
    if (
      navCollapseRef.current &&
      navCollapseRef.current.classList.contains("show")
    ) {
      navCollapseRef.current.classList.remove("show");
    }
  };

  const handleClickOutside = (event) => {
    if (navBarRef.current && !navBarRef.current.contains(event.target)) {
      if (
        navCollapseRef.current &&
        navCollapseRef.current.classList.contains("show")
      ) {
        navCollapseRef.current.classList.remove("show");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const { mode, changeMode } = useContext(ModeContext);

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      transition: "transform 0.3s ease",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#aab4be",
          ...theme.applyStyles("dark", {
            backgroundColor: "#8796A5",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles("dark", {
        backgroundColor: "#003892",
      }),
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#aab4be",
      borderRadius: 20 / 2,
      ...theme.applyStyles("dark", {
        backgroundColor: "#8796A5",
      }),
    },
  }));

  return (
    <div ref={navBarRef}>
      <nav
        className={`${NavBarCss.navbar} navbar navbar-expand-lg`}
        data-theme={mode}
      >
        <div className={`container-fluid ${NavBarCss["container-fluid"]}`}>
          <div className={NavBarCss.imageLogo}>
            <img
              src={require("../Assets/logoNouman.png")}
              alt="Nouman"
              className={NavBarCss.img}
            />
          </div>
          <button
            data-theme="dark"
            className="navbar-toggler"
            id={NavBarCss.navTogglerIcon}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            ref={navCollapseRef}
          >
            <ul className={`navbar-nav ${NavBarCss["navbar-nav"]}`}>
              <li className={`nav-item ${NavBarCss["nav-item"]}`}>
                <NavLink
                  style={(props) => navLinkStyle(props, mode)}
                  className="nav-link"
                  to="/"
                  onClick={handleNavLinkClick}
                >
                  Home
                </NavLink>
              </li>
              <li className={`nav-item ${NavBarCss["nav-item"]}`}>
                <NavLink
                  style={(props) => navLinkStyle(props, mode)}
                  className="nav-link"
                  to="/about"
                  onClick={handleNavLinkClick}
                >
                  About
                </NavLink>
              </li>
              <li className={`nav-item ${NavBarCss["nav-item"]}`}>
                <NavLink
                  style={(props) => navLinkStyle(props, mode)}
                  className="nav-link"
                  to="/projects"
                  onClick={handleNavLinkClick}
                >
                  Projects
                </NavLink>
              </li>
              <li className={`nav-item ${NavBarCss["nav-item"]}`}>
                <NavLink
                  style={(props) => navLinkStyle(props, mode)}
                  className="nav-link"
                  to="/contact"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <Box className={NavBarCss.modeBtn} data-theme={mode}>
              <MaterialUISwitch
                checked={mode === "dark"}
                onChange={changeMode}
              />
              <Typography
                className={NavBarCss.modeName}
                variant="button"
                fontWeight={"bold"}
                data-theme={mode}
              >
                {mode === "dark" ? "Pro" : "Pre"}
              </Typography>
            </Box>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
