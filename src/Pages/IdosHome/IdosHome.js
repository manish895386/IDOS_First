import React, { useState } from "react";
import "./IdosHome.css";
import { Link } from "react-router-dom";
import { top, btm } from "../../assets/images/index";

function IdosHome() {
  const [load, setLoad] = useState(true);

  function removeClass() {
    setLoad(false);
  }

  return (
    <div className={load ? "warpper warpperHome" : "warpper "}>
      <div className="logo top">
        <Link to="/landingPage">
          <img src={top} onClick={removeClass} />
        </Link>
      </div>
      <div className="logo bottom">
        <Link to="/landingPage">
          <img src={btm} onClick={removeClass} />
        </Link>
      </div>
      {/* End Logo */}
      <div className="menu one propos">
        <Link to="/apropos">A PROPOS</Link>
      </div>
      <div className="menu two contact">
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="menu three projects">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="menu four opportunite">
        <Link to="/oportunite">Opportunite</Link>
      </div>
      {/* End Desktop Menu */}
      {/* Mobile Menu */}
      <div className="mobile_menu four">
        <i className="material-icons">add</i>
      </div>
      <div className="mobile_menu_links_light" id="mobileMenuLinks">
        <div className="menu_links">
          <Link to="/apropos" className="d-block">
            A PROPOS
          </Link>
          <Link to="/contact" className="d-block">
            Contact Us
          </Link>
          <Link to="/projects" className="d-block">
            Projects
          </Link>
          <Link to="/oportunite" className="d-block">
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
      <div className="wrapperLine"></div>
      {/* <LandingPage /> */}
    </div>
  );
}

export default IdosHome;
