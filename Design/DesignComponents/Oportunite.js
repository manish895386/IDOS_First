import React from "react";

function Oportunite() {
  return (
    <div className="content_main">
      <div className="d-none d-md-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 pr-5">
              <ul
                className="nav nav-tab list-group list-group-flush contact_list px-5"
                id="myTab"
                role="tablist"
              >
                <li className="list-group-item">
                  <a
                    className="nav-link fz18"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    ATELIER
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
                  <div className="contact_content fz35">
                    <p>
                      IDOS architecture SA
                      <br />
                      Route des Falaises 14 — 2000 Neuchâtel <a href="#">map</a>
                    </p>
                    —
                    <p>
                      <a href="mailto:info@idos.ch">info@idos.ch</a>
                    </p>
                    <p>
                      {" "}
                      <a href="tel:+41 32 665 22 22">+41 32 665 22 22</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-md-none">
        <div id="accordion">
          <div className="card border-0">
            <div className="card-header bg-transparent border-0">
              <a
                className="card-link"
                data-toggle="collapse"
                href="#collapseOne"
              >
                ATELIER
              </a>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="contact_content fz19">
                  <p>
                    IDOS architecture SA
                    <br />
                    Route des Falaises 14 — 2000 Neuchâtel <a href="#">map</a>
                  </p>
                  —
                  <p>
                    <a href="mailto:info@idos.ch">info@idos.ch</a>
                  </p>
                  <p>
                    {" "}
                    <a href="tel:+41 32 665 22 22">+41 32 665 22 22</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Oportunite;
