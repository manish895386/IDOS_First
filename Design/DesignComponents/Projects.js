import React from "react";
import "./Projects.css";
import { maskGroup1, maskGroup2 } from "../../../assets/images/index";
import { Link } from "react-router-dom";

function Projects() {
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
    ///////////////////
  }

  //   useEffect(() => {

  //   }, [])

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
                    <ul className="list-unstyled">
                      <li
                        className="project"
                        id="project1"
                        onMouseMove={mouseEvent =>
                          findObjectCoords(
                            mouseEvent,
                            "project1",
                            "projectImg1"
                          )
                        }
                      >
                        <Link to="/projectsDetails" className="d-block fz88">
                          1901
                        </Link>
                        <div className="projectImg" id="projectImg1">
                          <img src={maskGroup1} />
                        </div>
                      </li>
                      <li
                        className="project"
                        id="project2"
                        onMouseMove={mouseEvent =>
                          findObjectCoords(
                            mouseEvent,
                            "project2",
                            "projectImg2"
                          )
                        }
                      >
                        <Link to="/projectsDetails" className="d-block fz88">
                          1902
                        </Link>
                        <div className="projectImg" id="projectImg2">
                          <img src={maskGroup1} />
                        </div>
                      </li>

                      <li
                        className="project"
                        id="project3"
                        onMouseMove={mouseEvent =>
                          findObjectCoords(
                            mouseEvent,
                            "project3",
                            "projectImg3"
                          )
                        }
                      >
                        <a href="#" className="d-block fz88">
                          1903
                        </a>
                        <div className="projectImg" id="projectImg3">
                          <img src={maskGroup2} />
                        </div>
                      </li>
                      <li
                        className="project"
                        id="project4"
                        onMouseMove={mouseEvent =>
                          findObjectCoords(
                            mouseEvent,
                            "project4",
                            "projectImg4"
                          )
                        }
                      >
                        <a href="#" className="d-block fz88">
                          1904
                        </a>
                        <div className="projectImg" id="projectImg4">
                          <img src={maskGroup2} />
                        </div>
                      </li>
                      <li
                        className="project"
                        id="project5"
                        onMouseMove={mouseEvent =>
                          findObjectCoords(
                            mouseEvent,
                            "project5",
                            "projectImg5"
                          )
                        }
                      >
                        <a href="#" className="d-block fz88">
                          1905
                        </a>
                        <div className="projectImg" id="projectImg5">
                          <img src={maskGroup2} />
                        </div>
                      </li>
                      <li
                        className="project"
                        id="project6"
                        onMouseMove={mouseEvent =>
                          findObjectCoords(
                            mouseEvent,
                            "project6",
                            "projectImg6"
                          )
                        }
                      >
                        <a href="#" className="d-block fz88">
                          1906
                        </a>
                        <div className="projectImg" id="projectImg6">
                          <img src={maskGroup2} />
                        </div>
                      </li>
                      <li
                        className="project"
                        id="project7"
                        onMouseMove={mouseEvent =>
                          findObjectCoords(
                            mouseEvent,
                            "project7",
                            "projectImg7"
                          )
                        }
                      >
                        <a href="#" className="d-block fz88">
                          1907
                        </a>
                        <div className="projectImg" id="projectImg7">
                          <img src={maskGroup2} />
                        </div>
                      </li>
                      <li
                        className="project"
                        id="project8"
                        onMouseMove={mouseEvent =>
                          findObjectCoords(
                            mouseEvent,
                            "project8",
                            "projectImg8"
                          )
                        }
                      >
                        <a href="#" className="d-block fz88">
                          1908
                        </a>
                        <div className="projectImg" id="projectImg8">
                          <img src={maskGroup2} />
                        </div>
                      </li>
                      <li
                        className="project"
                        id="project9"
                        onMouseMove={mouseEvent =>
                          findObjectCoords(
                            mouseEvent,
                            "project4",
                            "projectImg9"
                          )
                        }
                      >
                        <a href="#" className="d-block fz88">
                          1909
                        </a>
                        <div className="projectImg" id="projectImg9">
                          <img src={maskGroup2} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-md-none">
        <div id="accordion">
          <div className="mobileProject d-flex  justify-content-between py-2">
            <a
              className="projectMobLink fz35"
              data-toggle="collapse"
              href="#collapseOne"
            >
              <span>19-01</span>
            </a>
            <div id="collapseOne" className="collapse" data-parent="#accordion">
              <div className="projectImgMob text-right">
                <img src={maskGroup2} />
              </div>
              <span className="mobName">Ouvrir</span>
            </div>
          </div>
          <div className="mobileProject d-flex  justify-content-between py-2">
            <a
              className="projectMobLink fz35"
              data-toggle="collapse"
              href="#collapseTwo"
            >
              19-02
            </a>
            <div id="collapseTwo" className="collapse" data-parent="#accordion">
              <div className="projectImgMob">
                <img src={maskGroup2} />
              </div>
              <span className="mobName">Ouvrir</span>
            </div>
          </div>
          <div className="mobileProject d-flex  justify-content-between py-2">
            <a
              className="projectMobLink fz35"
              data-toggle="collapse"
              href="#collapseThree"
            >
              19-03
            </a>
            <div
              id="collapseThree"
              className="collapse"
              data-parent="#accordion"
            >
              <div className="projectImgMob">
                <img src={maskGroup2} />
              </div>
              <span className="mobName">Ouvrir</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
