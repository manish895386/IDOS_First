import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  IDOS_bottom_black,
  IDOS_top_black,
  IDOS_bottom_white,
  IDOS_top_white
} from "../../assets/images/index";
import "./Navbar.css";
import { ChangeColorContext } from "../../App";

function Navbar({
  removeClass,
  propos,
  setPropos,
  contact,
  setContact,
  opportunite,
  setOpportunite,
  projects,
  setProjects
}) {
  const changeColor = useContext(ChangeColorContext);
  const [changeIcon, setChangeIcon] = useState(false);
  const handleChange = () => {
    setPropos(true);
    setContact(false);
    setOpportunite(false);
    setProjects(false);
  };

  const changeContact = () => {
    setPropos(false);
    setContact(true);
    setOpportunite(false);
    setProjects(false);
  };

  const changeProjects = () => {
    setPropos(false);
    setContact(false);
    setOpportunite(false);
    setProjects(true);
  };

  const changeOportunite = () => {
    setPropos(false);
    setContact(false);
    setOpportunite(true);
    setProjects(false);
  };

  const goToPage = () => {
    var srcElement = document.getElementById("mobileMenuLinks");

    srcElement.style.right = "-100%";
    setChangeIcon(false);
    changeColor(!changeIcon);
  };

  function showHideDiv(ele) {
    setChangeIcon(!changeIcon);

    changeColor(!changeIcon);

    var srcElement = document.getElementById("mobileMenuLinks");

    if (srcElement != null) {
      if (srcElement.style.right != 0) {
        srcElement.style.right = "-100%";
      } else {
        srcElement.style.right = 0;
      }
      return console.log("return");
    }
  }

  return (
    <Fragment>
      <div>
        {changeIcon ? (
          <div className={!changeIcon}>
            <div className="logo top">
              <Link to="/">
                <img src={IDOS_top_white} onClick={removeClass} width="100" />
              </Link>
            </div>
            <div className="logo bottom">
              <Link to="/">
                <img
                  src={IDOS_bottom_white}
                  onClick={removeClass}
                  width="100"
                />
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="logo top">
              <Link to="/">
                <img src={IDOS_top_black} onClick={removeClass} width="100" />
              </Link>
            </div>
            <div className="logo bottom">
              <Link to="/">
                <img
                  src={IDOS_bottom_black}
                  onClick={removeClass}
                  width="100"
                />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* /// */}

      {/* End Logo */}

      <div
        className=""
        className={
          propos || (!propos && !contact && !projects && !opportunite)
            ? "menu one propos"
            : "menu one propos setPropos"
        }
      >
        <Link to="/apropos" onClick={handleChange}>
          À PROPOS
        </Link>
      </div>

      <div
        className={
          contact || (!contact && !propos && !projects && !opportunite)
            ? "menu two contact"
            : "menu two contact setContact"
        }
      >
        <Link to="/contact" onClick={changeContact}>
          Contact
        </Link>
      </div>
      <div
        className={
          projects || (!propos && !contact && !projects && !opportunite)
            ? "menu four projects"
            : "menu four projects setProjects"
        }
      >
        <Link to="/projets" onClick={changeProjects}>
          Projets
        </Link>
      </div>
      <div
        className={
          opportunite || (!propos && !contact && !projects && !opportunite)
            ? "menu four opportunite"
            : "menu four opportunite setOportunite"
        }
      >
        <Link to="/oportunite" onClick={changeOportunite}>
          Opportunité
        </Link>
      </div>

      {/* End Desktop Menu */}
      {/* Mobile Menu */}
      <div
        className={
          changeIcon ? "mobile_menu four mobile_Icon" : "mobile_menu four"
        }
      >
        <i className="material-icons" onClick={ele => showHideDiv(ele)}>
          add
        </i>
      </div>
      <div
        className={
          changeIcon
            ? "mobile_menu_links_light active_menu"
            : "mobile_menu_links_light"
        }
        id="mobileMenuLinks"
      >
        <div className="menu_links">
          <Link
            to="/apropos"
            className="d-block"
            onClick={goToPage}
            style={{ color: "black", textDecoration: "none" }}
          >
            À PROPOS
          </Link>
          <Link
            to="/contact"
            className="d-block"
            onClick={goToPage}
            style={{ color: "black", textDecoration: "none" }}
          >
            Contact
          </Link>
          <Link
            to="/projets"
            className="d-block"
            onClick={goToPage}
            style={{ color: "black", textDecoration: "none" }}
          >
            Projets
          </Link>
          <Link
            to="/oportunite"
            className="d-block"
            onClick={goToPage}
            style={{ color: "black", textDecoration: "none" }}
          >
            Opportunité
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
      {/* <div className="wrapperLine"></div> */}
    </Fragment>
  );
}

export default Navbar;
