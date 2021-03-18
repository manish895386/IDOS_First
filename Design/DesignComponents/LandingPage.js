import React from "react";
import "./LandingPage.css";
import { slide1, slide2, slide3 } from "../../../assets/images/index";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    // <div id="demo" className="carousel slide carousel-fade" dataRide="carousel">
    <div id="demo" className="carousel slide" data-ride="carousel">
      {/* Indicators  */}
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      {/* The slideshow  */}
      <div className="carousel-inner">
        <div className="carousel-item text-center active">
          <Link to="/projectsDetails">
            <div className="d-flex h-100 align-items-center justify-content-center overflow-hidden">
              <img
                src={slide1}
                alt="Los Angeles"
                className="img-fluid-custome"
              />
            </div>
          </Link>
        </div>
        <div className="carousel-item text-center">
          <Link href="/projectsDetails">
            <div className="d-flex h-100 align-items-center justify-content-center overflow-hidden">
              <img src={slide2} alt="Chicago" className="img-fluid-custome" />
            </div>
          </Link>
        </div>
        <div className="carousel-item text-center">
          <Link href="/projectsDetails">
            <div className="d-flex h-100 align-items-center justify-content-center overflow-hidden">
              <img src={slide3} alt="New York" className="img-fluid-custome" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
