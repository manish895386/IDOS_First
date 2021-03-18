import React, { useState, useEffect, useContext } from "react";
import { HashRouter as Router, Switch, Prompt } from "react-router-dom";
import Route from "react-router-dom/Route";
import AproposPage from "../Pages/apropos/AproposPage";
import ContactPage from "../Pages/contact/ContactPage";
import ProjectsPage from "../Pages/projects/ProjectsPage";
import OportunitePage from "../Pages/opportunite/OportunitePage";
import ProjectsDetailsPage from "../Pages/projectDetails/ProjectsDetailsPage";
import LandingPage from "../Pages/landing/LandingPage";
import { Navbar } from "../Components";

function AppRouter() {
  const [load] = useState(window.location.hash === "#/" ? true : false);
  const [propos, setPropos] = useState(false);
  const [contact, setContact] = useState(false);
  const [projects, setProjects] = useState(false);
  const [opportunite, setOpportunite] = useState(false);
  const [hide, showHide] = useState(true);



  const removeClass = () => {
    setPropos(false);
    setContact(false);
    setOpportunite(false);
    setProjects(false);
  };
  return (
    <Router>
      <div className={load ? "warpper warpperHome" : "warpper "}>
        <Navbar
          removeClass={removeClass}
          propos={propos}
          setPropos={setPropos}
          contact={contact}
          setContact={setContact}
          projects={projects}
          setProjects={setProjects}
          opportunite={opportunite}
          setOpportunite={setOpportunite}
          showHide={showHide}
          hide={hide}
        />
        <Route path="/" exact strict render={() => <LandingPage />}></Route>

        <Route
          path="/apropos"
          exact
          strict
          render={() => <AproposPage />}
        ></Route>
        <Route
          path="/contact"
          exact
          strict
          render={() => <ContactPage />}
        ></Route>
        <Route
          path="/projets"
          exact
          strict
          render={() => <ProjectsPage />}
        ></Route>
        <Route
          path="/oportunite"
          exact
          strict
          render={() => <OportunitePage />}
        ></Route>
        <Route
          path="/projectsDetails"
          exact
          render={() => <ProjectsDetailsPage />}
        ></Route>
      </div>
    </Router>
  );
}
export default AppRouter;
