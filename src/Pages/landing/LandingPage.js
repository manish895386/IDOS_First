import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import useLandingPage from "../../Hooks/custom/useLandingPage";
import projectArrayCretorweb from "../../Utilities/projectArrayCreatorWeb";
import { flatten } from "../../Utilities/Flatten";
import { Loader } from "../../assets/images";

function LandingPage() {
  const { imageData } = useLandingPage();
  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      {/* Indicators  */}
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
        <li data-target="#demo" data-slide-to="3"></li>
        <li data-target="#demo" data-slide-to="4"></li>
      </ul>

      {/* The slideshow  */}
      <div className="carousel-inner" style={{ height: "100%" }}>
        {imageData.slice(0, 5).map((item, index) => {
          return (
            <div
              key={index}
              className={
                index === 0
                  ? "carousel-item text-center active"
                  : "carousel-item text-center"
              }
              style={{ height: "100%" }}
            >
              <Link
                to={{
                  pathname: "/projectsDetails",
                  state: {
                    data: flatten(projectArrayCretorweb(imageData, index)),
                    index: index
                  }
                }}
              >
                <div>
                  {(item.webImage || item.mobileImage) ? (
                    <div>
                      <img
                        src={item.mobileImage}
                        alt="mobile"
                        className="img-fluid-custome d-block d-lg-none mobile"
                        style={{ width: "100%" }}
                      />
                      <img
                        src={item.webImage}
                        alt="desktop"
                        className="img-fluid-custome img-fluid d-none d-lg-block desktop"
                      />
                    </div>
                  ) : (
                      <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <img
                          src={Loader}
                          style={{
                            height: "50px",
                            width: "50px",
                            resize: "block"
                          }}
                        />
                      </div>
                    )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* <a
        class="carousel-control-prev"
        href="#demo"
        role="button"
        data-slide="prev"
      >
        <span
          className="carousel-control-prev-icon iconSize"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#demo"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a> */}
    </div>
  );
}

export default LandingPage;
