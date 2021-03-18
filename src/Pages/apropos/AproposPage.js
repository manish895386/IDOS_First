import React from "react";
import "./AproposPage.css";
import useAproposPage from "../../Hooks/custom/useAproposePage";
import AppVisibilityToggle from "../../Components/Shared/AppVisibilityToggle";

function AproposPage() {
  const { activeMenu, setActiveMenu, aboutPageData } = useAproposPage();

  function renderData(item, index) {
    const { title, id, name } = item;

    const setActive = () => {
      setActiveMenu(item);
    };

    return (
      <li className="list-group-item text-uppercase">
        <a
          key={index}
          className={
            activeMenu.id == id ? "nav-link active fz18" : "nav-link fz18"
          }
          onClick={setActive}
          id={activeMenu.id}
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          {item.title.rendered}
        </a>
      </li>
    );
  }
  const setActive = item => {
    setActiveMenu(item);
  };
  function renderMobileData(item, index) {
    const { title, id, name } = item;

    return (
      <div className="card border-0 custom_card_new" key={index}>
        <div className="card-header bg-transparent border-0" id={activeMenu.id}>
          <a
            className={
              activeMenu.id == id
                ? "card-link text-uppercase font-weight-bold"
                : "card-link text-uppercase font-weight-bold collapsed"
            }
            // className="card-link text-uppercase"
            data-toggle="collapse"
            onClick={() => setActive(item)}
            href={"#collapse" + activeMenu.id}
          >
            {item.title.rendered}
          </a>
        </div>
        <AppVisibilityToggle visible={activeMenu.id === id}>
          <div
            id={"collapse" + activeMenu.id}
            className="collapse show"
            data-parent="#accordion"
          >
            <div className="card-body about-mob-body font-weight-bold pl-0">
              <div className="about_content fz19 ">
                <p
                  dangerouslySetInnerHTML={{ __html: activeMenu.about_content }}
                ></p>
              </div>
            </div>
          </div>
        </AppVisibilityToggle>
      </div>
    );
  }

  return (
    <div className="content_main ">
      <div className="d-none d-md-block animated fadeInUp delay-42s">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 pr-5">
              <ul
                className="nav nav-tab list-group list-group-flush about_list px-0 px-lg-5"
                id="myTab"
                role="tablist"
              >
                {aboutPageData.map(renderData)}
              </ul>
            </div>
            <div className="col-sm-8">
              <div className="tab-content" id={activeMenu.id}>
                <div
                  className="tab-pane fade show active"
                  id={activeMenu.id}
                  role="tabpanel"
                  aria-labelledby={activeMenu.id}
                >
                  <div className="about_content fz35">
                    <AppVisibilityToggle visible={activeMenu.about_name}>
                      <h3 className="fz18 about_heading font-weight-bold">
                        {activeMenu.about_name}
                      </h3>
                    </AppVisibilityToggle>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: activeMenu.about_content
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-md-none animated fadeInUp delay-42s">
        <div id="accordion" className="about-mob-accordion">
          {aboutPageData.map(renderMobileData)}
        </div>
      </div>
    </div>
  );
}

export default AproposPage;
