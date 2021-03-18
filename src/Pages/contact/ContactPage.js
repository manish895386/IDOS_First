import React, { Fragment } from "react";
import "./ContactPage.css";
import useContactPage from "../../Hooks/custom/useContactPage";

function ContactPage() {
  const { contactPageData } = useContactPage();

  const renderContactItem = item => {
    return (
      <Fragment>
        <div className="col-sm-4 pr-5">
          <ul
            className="nav nav-tab list-group list-group-flush contact_list px-5"
            id={item.id}
            role="tablist"
          >
            <li className="list-group-item text-uppercase">
              <a
                className="nav-link fz18"
                id={item.id}
                data-toggle="tab"
                href={"#" + item.id}
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                {item.title.rendered}
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
              aria-labelledby={item.id}
            >
              <div className="contact_content fz35">
                <p
                  dangerouslySetInnerHTML={{ __html: item.contact_content }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  const renderMobileContactData = item => {
    return (
      <div className="card border-0">
        <div
          className="card-header bg-transparent border-0 text-uppercase"
          style={{ fontWeight: "bold" }}
        >
          <a className="card-link" data-toggle="collapse" href="#collapseOne">
            {item.title.rendered}
          </a>
        </div>
        <div
          id="collapseOne"
          className="collapse show"
          data-parent="#accordion"
        >
          <div className="card-body">
            <div className="contact_content fz22">
              <p dangerouslySetInnerHTML={{ __html: item.contact_content }}></p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="content_main">
      <div className="d-none d-md-block">
        <div className="container-fluid">
          <div className="row">{contactPageData.map(renderContactItem)}</div>
        </div>
      </div>
      <div className="d-md-none">
        <div id="accordion">{contactPageData.map(renderMobileContactData)}</div>
      </div>
    </div>
  );
}

export default ContactPage;
