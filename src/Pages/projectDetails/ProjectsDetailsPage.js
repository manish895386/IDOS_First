import React, { useState, Fragment, useEffect } from "react";
import "./ProjectsDetailsPage.css";
import { useLocation, Link } from "react-router-dom";
import AppVisibilityToggle from "../../Components/Shared/AppVisibilityToggle";
import { useHistory } from "react-router";

function ProjectsDetailsPage() {
  const location = useLocation();
  const history = useHistory();
  let data = (location.state || { data: [] }).data;
  console.log("data", data);

  const [activeMenu, setActiveMenu] = useState(data[0] || { id: 0, title: "" });
  const setActive = item => {
    setActiveMenu(item);
  };

  useEffect(() => {
    if (data.length === 0) {
      history.push("/");
    }
  }, []);
  function renderItems(item) {
    return <Fragment>
      <AppVisibilityToggle visible={item.title}>
        <div className="border border-left-0 border-right-0 border-dark p-2 mb-4  projectSticky">
          <div className="row align-items-center">
            <div className="col-9"> <h3 className="mb-0 fz26">{(item || {}).title}</h3></div>
            <div className="col-3">
              <Link to="/projets">
                <p
                  className="mb-0 text-right fz18"
                  style={{ color: "black", marginTop: 14 }}
                >
                  FERMER
                  </p>
              </Link>
            </div>
          </div>
        </div>
      </AppVisibilityToggle>
      <div className="row">
        <div className="col-12">
          <div className="project_mob_details fz19">
            <p
              dangerouslySetInnerHTML={{
                __html: (item || {}).content
              }}
              className="pr5 font-weight-bold"
            ></p>

          </div>
        </div>
      </div>


    </Fragment>
  }
  return (
    <div className="content_main">
      <div className="d-none d-md-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 pr-5">
              <ul
                className="nav nav-tab list-group list-group-flush project_detials px-5"
                id="myTab"
                role="tablist"
              >
                {(data || []).map((item, Index) => {
                  return (
                    <Fragment key={Index}>
                      <AppVisibilityToggle visible={item.title != ""}>
                        <li className="list-group-item">
                          <a
                            className={
                              activeMenu.id === item.id
                                ? "nav-link active fz18"
                                : "nav-link fz18"
                            }
                            id={Index}
                            data-toggle="tab"
                            href={"#" + Index}
                            role="tab"
                            aria-selected="true"
                            onClick={() => setActive(item)}
                          >
                            {item.title}
                          </a>
                        </li>
                      </AppVisibilityToggle>
                    </Fragment>
                  );
                })}
              </ul>
            </div>
            <div className="col-sm-8">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id={activeMenu.id}
                  role="tabpanel"
                >
                  <div className="project_details_content fz35">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: activeMenu.content
                      }}
                      className="pr5"
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="d-md-none ">
        <div className="project_details_mobile">
          {data.map((item) => renderItems(item))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsDetailsPage;

