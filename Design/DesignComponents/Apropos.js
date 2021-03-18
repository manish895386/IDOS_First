import React from 'react'
import './Apropos.css';


function Apropos() {


    return (
      
        <div className="content_main ">
            <div className="d-none d-md-block animated fadeInUp delay-42s">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4 pr-5">
                            <ul className="nav nav-tab list-group list-group-flush about_list px-5" id="myTab"
                                role="tablist">
                                <li className="list-group-item">
                                    <a className="nav-link active fz18" id="home-tab" data-toggle="tab" href="#home"
                                        role="tab" aria-controls="home" aria-selected="true">INTRODUCTION</a>
                                </li>
                                <li className="list-group-item">
                                    <a className="nav-link fz18" id="profile-tab" data-toggle="tab" href="#profile"
                                        role="tab" aria-controls="profile" aria-selected="false">SABRINA</a>
                                </li>
                                <li className="list-group-item">
                                    <a className="nav-link fz18" id="contact-tab" data-toggle="tab" href="#contact"
                                        role="tab" aria-controls="contact" aria-selected="false">MICHAEL</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-8">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel"
                                    aria-labelledby="home-tab">
                                    <div className="about_content fz35">
                                        <p>Après 10 ans de collaboration dans un bureau neuchâtelois, nous avons décidé
                                            de nous
                                            lancer et d’ouvrir notre propre structure. Nous cherchons à proposer une
                                            architecture contemporaine de qualité. Pour chaque nouveau mandat, nous
                                            repartons de
                                            zéro, sans aprioris ou préjugés.
                                            Tout projet est unique, il doit être à l’écoute du client et prendre en
                                            considération ce qui l’entoure afin de mettre en valeur l’unicité du site.
                                        </p>

                                    </div>
                                </div>
                                <div className="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="about_content fz35">
                                        <p>Après 10 ans de collaboration dans un bureau neuchâtelois, nous avons décidé
                                            de nous
                                            lancer et d’ouvrir notre propre structure. Nous cherchons à proposer une
                                            architecture contemporaine de qualité. Pour chaque nouveau mandat, nous
                                            repartons de
                                            zéro, sans aprioris ou préjugés.</p>
                                        <p>Après 10 ans de collaboration dans un bureau neuchâtelois, nous avons décidé
                                            de nous
                                            lancer et d’ouvrir notre propre structure. Nous cherchons à proposer une
                                            architecture contemporaine de qualité. Pour chaque nouveau mandat, nous
                                            repartons de
                                            zéro, sans aprioris ou préjugés.</p>
                                        <p>Après 10 ans de collaboration dans un bureau neuchâtelois, nous avons décidé
                                            de nous
                                            lancer et d’ouvrir notre propre structure. Nous cherchons à proposer une
                                            architecture contemporaine de qualité. Pour chaque nouveau mandat, nous
                                            repartons de
                                            zéro, sans aprioris ou préjugés.</p>
                                        <p>Tout projet est unique, il doit être à l’écoute du client et prendre en
                                            considération
                                            ce qui l’entoure afin de mettre en valeur l’unicité du site.</p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div className="about_content fz35">
                                        <h3 className="border-bottom">MICHAEL DESAULES</h3>
                                        <ul className="list-unstyled fz18 ul_history">
                                            <li><span className="mr-4 fz35">2019</span>Création du bureau IDOS architecture, Neuchâtel</li>
                                            
                                            <li><span className="mr-4 fz35">2019</span>Brevet fédéral de spécialiste en protection incendie AEAI</li>
                                            
                                            <li><span className="mr-4 fz35">2013</span>Membre du REG A</li>
                                            
                                            <li><span className="mr-4 fz35">2013</span>Membre de la SIA</li>
                                            <li><span className="mr-4 fz35">2009—19</span>Collaborateur chez IPAS architectes, Neuchâtel</li>
                                            
                                            <li><span className="mr-4 fz35">2009</span>Master en architecte de EPFL</li>
                                            
                                            <li><span className="mr-4 fz35">2006—09</span>Stagiaire chez IPAS architectes, Neuchâtel</li>
                                            
                                            <li><span className="mr-4 fz35">2004</span>Stagiaire chez Pierre Studer, Neuchâtel</li>
                                            <li><span className="mr-4 fz35">1983</span>Né à Montezillon, Suisse</li>

                                            
                                   



                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-md-none animated fadeInUp delay-42s">
                <div id="accordion">
                    <div className="card border-0">
                        <div className="card-header bg-transparent border-0">
                            <a className="card-link" data-toggle="collapse" href="#collapseOne">
                                INTRODUCTION
                            </a>
                        </div>
                        <div id="collapseOne" className="collapse show" data-parent="#accordion">
                            <div className="card-body">
                                    <div className="about_content fz19">
                                            <p>Après 10 ans de collaboration dans un bureau neuchâtelois, nous avons décidé
                                                de nous
                                                lancer et d’ouvrir notre propre structure. Nous cherchons à proposer une
                                                architecture contemporaine de qualité. Pour chaque nouveau mandat, nous
                                                repartons de
                                                zéro, sans aprioris ou préjugés.
                                                Tout projet est unique, il doit être à l’écoute du client et prendre en
                                                considération ce qui l’entoure afin de mettre en valeur l’unicité du site.
                                            </p>
    
                                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="card-header bg-transparent border-0">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                    SABRINA
                            </a>
                        </div>
                        <div id="collapseTwo" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                    <div className="about_content fz19">
                                            <p>Après 10 ans de collaboration dans un bureau neuchâtelois, nous avons décidé
                                                de nous
                                                lancer et d’ouvrir notre propre structure. Nous cherchons à proposer une
                                                architecture contemporaine de qualité. Pour chaque nouveau mandat, nous
                                                repartons de
                                                zéro, sans aprioris ou préjugés.</p>
                                            <p>Après 10 ans de collaboration dans un bureau neuchâtelois, nous avons décidé
                                                de nous
                                                lancer et d’ouvrir notre propre structure. Nous cherchons à proposer une
                                                architecture contemporaine de qualité. Pour chaque nouveau mandat, nous
                                                repartons de
                                                zéro, sans aprioris ou préjugés.</p>
                                            <p>Après 10 ans de collaboration dans un bureau neuchâtelois, nous avons décidé
                                                de nous
                                                lancer et d’ouvrir notre propre structure. Nous cherchons à proposer une
                                                architecture contemporaine de qualité. Pour chaque nouveau mandat, nous
                                                repartons de
                                                zéro, sans aprioris ou préjugés.</p>
                                            <p>Tout projet est unique, il doit être à l’écoute du client et prendre en
                                                considération
                                                ce qui l’entoure afin de mettre en valeur l’unicité du site.</p>
                                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="card-header bg-transparent border-0">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                            MICHAEL
                            </a>
                        </div>
                        <div id="collapseThree" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                    <div className="about_content fz19">
                                            <h3 className="border-bottom">MICHAEL DESAULES</h3>
                                            <ul className="list-unstyled fz18 ul_history">
                                                <li><span className="mr-4 fz35">2019</span>Création du bureau IDOS architecture, Neuchâtel</li>
                                                
                                                <li><span className="mr-4 fz35">2019</span>Brevet fédéral de spécialiste en protection incendie AEAI</li>
                                                
                                                <li><span className="mr-4 fz35">2013</span>Membre du REG A</li>
                                                
                                                <li><span className="mr-4 fz35">2013</span>Membre de la SIA</li>
                                                <li><span className="mr-4 fz35">2009—19</span>Collaborateur chez IPAS architectes, Neuchâtel</li>
                                                
                                                <li><span className="mr-4 fz35">2009</span>Master en architecte de EPFL</li>
                                                
                                                <li><span className="mr-4 fz35">2006—09</span>Stagiaire chez IPAS architectes, Neuchâtel</li>
                                                
                                                <li><span className="mr-4 fz35">2004</span>Stagiaire chez Pierre Studer, Neuchâtel</li>
                                                <li><span className="mr-4 fz35">1983</span>Né à Montezillon, Suisse</li>
    
                                            </ul>
    
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
            
    )
}

export default Apropos