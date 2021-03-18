import React, { Fragment, useState } from "react";
import { btm, top } from "../../assets/images/index";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./DesignComponents/header.css";
import Apropos from "./DesignComponents/Apropos";
import Contact from "./DesignComponents/Contact";
import Projects from "./DesignComponents/Projects";
import ProjectsDetails from "./DesignComponents/ProjectsDetails";
// import LandingPage from "./DesignComponents/LandingPage";
// import LandingPage from './DesignComponents/LandingPage';

function IdosHome() {
  const [load, setLoad] = useState(true);

  function removeClass() {
    setLoad(false);
  }
  return (
    <Fragment>
      <div className={load ? "warpper warpperHome" : "warpper "}>
        <div className="logo top">
          <Link to="/">
            <img src={top} onClick={removeClass} />
          </Link>
        </div>
        <div className="logo bottom">
          <Link to="/">
            <img src={btm} onClick={removeClass} />
          </Link>
        </div>
        {/* End Logo */}

        <div className="menu one propos">
          <Link to="/apropos">A PROPOS</Link>
        </div>
        <div className="menu two contact">
          <Link to="contact.html">Contact Us</Link>
        </div>
        <div className="menu three projects">
          <Link to="projects.html">Projects</Link>
        </div>
        <div className="menu four opportunite">
          <Link to="oportunite.html">Opportunite</Link>
        </div>

        {/* End Desktop Menu */}
        {/* Mobile Menu */}
        <div className="mobile_menu four">
          <i className="material-icons">add</i>
        </div>
        <div className="mobile_menu_links_light" id="mobileMenuLinks">
          <div className="menu_links">
            <Link to="apropos.html" className="d-block">
              A PROPOS
            </Link>
            <Link to="contact.html" className="d-block">
              Contact Us
            </Link>
            <Link to="projects.html" className="d-block">
              Projects
            </Link>
            <Link to="oportunite.html" className="d-block">
              Opportunite
            </Link>
          </div>
          <div className="menu_address">
            <ul className="list-unstyled fz18">
              <li>IDOS architecture SA</li>
              <li>
                Route des Falaises 14
                <br /> 2000 Neuchatel <br />
                Suisse
              </li>
              <li>info@idos.ch</li>
              <li>+41 32 665 22 22</li>
            </ul>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="wrapperLine"></div>

        {/* Contant Now */}

        {/* <LandingPage /> */}
        {/* <Apropos /> */}
        {/* <Contact /> */}
        {/* <Projects /> */}
        {/* <ProjectsDetails /> */}

        {/* End Contant Now */}
      </div>
    </Fragment>
  );
}

export default IdosHome;
