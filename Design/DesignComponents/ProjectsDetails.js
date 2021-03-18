import React from "react";
import "./ProjectsDetails.css";
import { sample1, sample2, sample3 } from "../../../assets/images/index";

function ProjectsDetails() {
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
                <li className="list-group-item">
                  <a
                    className="nav-link active fz18"
                    id="project1901-tab"
                    data-toggle="tab"
                    href="#project1901"
                    role="tab"
                    aria-controls="project1901"
                    aria-selected="true"
                  >
                    1901
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    className="nav-link fz18"
                    id="project1904-tab"
                    data-toggle="tab"
                    href="#project1904"
                    role="tab"
                    aria-controls="project1904"
                    aria-selected="false"
                  >
                    1904
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    className="nav-link fz18"
                    id="project1905-tab"
                    data-toggle="tab"
                    href="#project1905"
                    role="tab"
                    aria-controls="project1905"
                    aria-selected="false"
                  >
                    1905
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-8">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="project1901"
                  role="tabpanel"
                  aria-labelledby="project1901-tab"
                >
                  <div className="about_content fz35">
                    <h3 className="fz35">1901</h3>
                    <p>
                      Situé à La Chaux-de-Fond au cœur du patrimoine de
                      l’Unesco, devant le parc de l’ouest. L’apport d’IDOS sur
                      ce projet est vraiment très intéressant, le nouvel espace
                      intègre une salle de pole dance sur mesure
                    </p>
                    <div className="text-center">
                      <h3 className="text-left">Avant:</h3>
                      <img src={sample1} className="img-fluid mb-4 mx-auto" />
                      <h3 className="text-left">Coupe:</h3>
                      <img src={sample2} className="img-fluid mb-4  mx-auto" />
                      <h3 className="text-left">Après:</h3>
                      <img src={sample3} className="img-fluid mb-4  mx-auto" />
                    </div>
                    <table className="table fz18">
                      <tbody>
                        <tr>
                          <td scope="row">Année:</td>
                          <td> 2019</td>
                        </tr>
                        <tr>
                          <td scope="row">Statut:</td>
                          <td>En cours</td>
                        </tr>
                        <tr>
                          <td scope="row">Lieu:</td>
                          <td>La Chaux-de-Fonds</td>
                        </tr>
                        <tr>
                          <td scope="row">Programme:</td>
                          <td>Habitation</td>
                        </tr>
                        <tr>
                          <td scope="row">Mandat:</td>
                          <td>Direct</td>
                        </tr>
                        <tr>
                          <td scope="row">Maître de l’ouvrage:</td>
                          <td>Mauro Montemagno</td>
                        </tr>
                        <tr>
                          <td scope="row">Collaboration:</td>
                          <td>Opus Planification Sàrl</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id="project1904"
                  role="tabpanel"
                  aria-labelledby="project1904-tab"
                >
                  <div className="about_content fz35">
                    <p>
                      Après 10 ans de collaboration dans un bureau neuchâtelois,
                      nous avons décidé de nous lancer et d’ouvrir notre propre
                      structure. Nous cherchons à proposer une architecture
                      contemporaine de qualité. Pour chaque nouveau mandat, nous
                      repartons de zéro, sans aprioris ou préjugés.
                    </p>
                    <p>
                      Après 10 ans de collaboration dans un bureau neuchâtelois,
                      nous avons décidé de nous lancer et d’ouvrir notre propre
                      structure. Nous cherchons à proposer une architecture
                      contemporaine de qualité. Pour chaque nouveau mandat, nous
                      repartons de zéro, sans aprioris ou préjugés.
                    </p>
                    <p>
                      Après 10 ans de collaboration dans un bureau neuchâtelois,
                      nous avons décidé de nous lancer et d’ouvrir notre propre
                      structure. Nous cherchons à proposer une architecture
                      contemporaine de qualité. Pour chaque nouveau mandat, nous
                      repartons de zéro, sans aprioris ou préjugés.
                    </p>
                    <p>
                      Tout projet est unique, il doit être à l’écoute du client
                      et prendre en considération ce qui l’entoure afin de
                      mettre en valeur l’unicité du site.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="project1905"
                  role="tabpanel"
                  aria-labelledby="project1905-tab"
                >
                  <div className="about_content fz35">
                    <h3 className="border-bottom">MICHAEL DESAULES</h3>
                    <ul className="list-unstyled fz18 ul_history">
                      <li>
                        <span className="mr-4 fz35">2019</span>Création du
                        bureau IDOS architecture, Neuchâtel
                      </li>

                      <li>
                        <span className="mr-4 fz35">2019</span>Brevet fédéral de
                        spécialiste en protection incendie AEAI
                      </li>

                      <li>
                        <span className="mr-4 fz35">2013</span>Membre du REG A
                      </li>

                      <li>
                        <span className="mr-4 fz35">2013</span>Membre de la SIA
                      </li>
                      <li>
                        <span className="mr-4 fz35">2009—19</span>Collaborateur
                        chez IPAS architectes, Neuchâtel
                      </li>

                      <li>
                        <span className="mr-4 fz35">2009</span>Master en
                        architecte de EPFL
                      </li>

                      <li>
                        <span className="mr-4 fz35">2006—09</span>Stagiaire chez
                        IPAS architectes, Neuchâtel
                      </li>

                      <li>
                        <span className="mr-4 fz35">2004</span>Stagiaire chez
                        Pierre Studer, Neuchâtel
                      </li>
                      <li>
                        <span className="mr-4 fz35">1983</span>Né à Montezillon,
                        Suisse
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
        <div className="project_details_mobile">
          <div className="border border-left-0 border-right-0 border-dark p-2 mb-3">
            <div className="row">
              <div className="col">
                <h3 className="mb-0">19-01</h3>
              </div>
              <div className="col">
                <h3 className="mb-0 text-right">FERMER</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="project_mob_details fz19">
                <p>
                  Situé à La Chaux-de-Fond au cœur du patrimoine de l’Unesco,
                  devant le parc de l’ouest.
                </p>

                <p>
                  L’apport d’IDOS sur ce projet est vraiment très intéressant,
                  le nouvel espace intègre une salle de pole dance sur mesure{" "}
                </p>
                <div className="text-center">
                  <h3 className="text-left">Avant:</h3>
                  <img src={sample1} className="img-fluid mb-4 mx-auto" />
                  <h3 className="text-left">Coupe:</h3>
                  <img src={sample2} className="img-fluid mb-4  mx-auto" />
                  <h3 className="text-left">Après:</h3>
                  <img src={sample3} className="img-fluid mb-4  mx-auto" />
                </div>
                <table className="table fz18 project_mob_table">
                  <tbody>
                    <tr>
                      <td scope="row">Année:</td>
                      <td> 2019</td>
                    </tr>
                    <tr>
                      <td scope="row">Statut:</td>
                      <td>En cours</td>
                    </tr>
                    <tr>
                      <td scope="row">Lieu:</td>
                      <td>La Chaux-de-Fonds</td>
                    </tr>
                    <tr>
                      <td scope="row">Programme:</td>
                      <td>Habitation</td>
                    </tr>
                    <tr>
                      <td scope="row">Mandat:</td>
                      <td>Direct</td>
                    </tr>
                    <tr>
                      <td scope="row">Maître de l’ouvrage:</td>
                      <td>Mauro Montemagno</td>
                    </tr>
                    <tr>
                      <td scope="row">Collaboration:</td>
                      <td>Opus Planification Sàrl</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsDetails;
