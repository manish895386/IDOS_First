import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./ProjectsPage.css";

import { Link } from "react-router-dom";
import useLandingPage from "../../Hooks/custom/useLandingPage";
import useHTTP from "../../Hooks/Shared/useHTTP";
import HttpClient from "../../Utilities/HttpClient";
import projectArrayCretorweb from "../../Utilities/projectArrayCreatorWeb";
import { flatten } from "../../Utilities/Flatten";

export const ChangeItem = React.createContext();

function Projects() {
  const [image, setimage] = useState("");
  const { landingPageData, navigateTo, imageData } = useLandingPage();
  const ABOUT_DOCS_API = useHTTP(HttpClient.ABOUT_DOCS_API);

  // const projectList
  function findObjectCoords(mouseEvent, id, imageId) {
    var obj = document.getElementById(id);
    var obj_left = 0;
    var obj_top = 0;
    var xpos;
    var ypos;

    while (obj.offsetParent) {
      obj_left += obj.offsetLeft;
      obj_top += obj.offsetTop;
      obj = obj.offsetParent;
    }
    if (mouseEvent) {
      //FireFox
      xpos = mouseEvent.pageX;
      ypos = mouseEvent.pageY;
    } else {
      //IE
      xpos = window.event.x + document.body.scrollLeft - 10;
      ypos = window.event.y + document.body.scrollTop - 10;
    }
    xpos -= obj_left - 10;
    ypos -= obj_top - 10;

    document.getElementById(imageId).style.transform =
      "translate(" + xpos + "px, " + ypos + "px)";
  }

  ////////////////////////////
  const trans4 = (x, y) => `translate3d(${x + 190}px,${y + 190}px,0)`;

  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2
  ];

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 1, tension: 4000, friction: 40 }
  }));

  const mobileProject = (item, index) => {
    return (
      <div className="mobileProject py-2" key={index}>
        <a
          style={{ color: "black", textDecoration: "none" }}
          className="projectMobLink fz35"
          data-toggle="collapse"
          href={"#collapseOne" + item.item.id}
          onClick={() => setimage(item.guid.rendered)}
        >
          <span>{item.item.title.rendered}</span>
        </a>
        <div
          id={"collapseOne" + item.item.id}
          className="collapse"
          data-parent="#accordion"
        >
          <div className="projectImgMob text-right">
            <img src={item.thumbnailImage} width="200" />
          </div>
          <div className="d-block mobName mob_detail_link text-left">
            <Link
              to={{
                pathname: "/projectsDetails",
                state: {
                  // data: projectData,
                  data: flatten(projectArrayCretorweb(imageData, index)),
                  index: index
                }
              }}
              className="card-link text-uppercase font-weight-bold"
              style={{ color: "black" }}
            >
              Ouvrir
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const renderProject = (item, index) => {
    return (
      <li
        key={index}
        className="project"
        id={item.item.id}
        onMouseMove={mouseEvent =>
          findObjectCoords(mouseEvent, item.item.id, item.item.id + "a")
        }
      >
        <Link
          to={{
            pathname: "/projectsDetails",
            state: {
              // data: projectData,
              data: flatten(projectArrayCretorweb(imageData, index)),
              index: index
            }
          }}
          className="d-block fz88"
        >
          {item.item.title.rendered}
        </Link>

        <div className="projectImg" id={item.item.id + "a"}>
          <img src={item.thumbnailImage} width="200" />
        </div>
      </li>
    );
  };

  return (
    <div className="content_main">
      <div className="d-none d-md-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 pr-5">
              <ul
                className="nav nav-tab list-group list-group-flush project_list px-5"
                id="myTab"
                role="tablist"
              >
                <li className="list-group-item">
                  <a
                    className="nav-link active fz18"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    style={{ padding: "0px" }}
                  >
                    SURVOLEZ LES PROJETS
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-8">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="project_content fz35">
                    <ul className="list-unstyled fade-out-siblings">
                      {imageData.map(renderProject)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-md-none">
        <div id="accordion" className="mobileScroll">
          {imageData.map(mobileProject)}
        </div>
      </div>
    </div>
  );
}
export default Projects;
