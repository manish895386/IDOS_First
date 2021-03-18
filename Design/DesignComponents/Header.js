import React from 'react'
import './header.css';
import { btm,top } from '../../assets/images/index';
function Header() {
    return (
        <div>
            {/* Logo */}
        <div className="logo top"><a href="landing-page.html"><img src={top} /></a></div>
        <div className="logo bottom"><a href="landing-page.html"><img src={btm} /></a></div>
        {/* End Logo */}
        
        <div className="menu one propos"><a href="apropos.html">A PROPOS</a></div>
        <div className="menu two contact"><a href="contact.html">Contact Us</a></div>
        <div className="menu three projects"><a href="projects.html">Projects</a></div>
        <div className="menu four opportunite"><a href="oportunite.html">Opportunite</a></div>

        {/* End Desktop Menu */}
        {/* Mobile Menu */}
        <div className="mobile_menu four">
          <i className="material-icons">add</i></div>
        <div className="mobile_menu_links_light"  id="mobileMenuLinks">
          <div className="menu_links">
            <a href="apropos.html" className="d-block">A PROPOS</a>
            <a href="contact.html" className="d-block">Contact Us</a>
            <a href="projects.html" className="d-block">Projects</a>
            <a href="oportunite.html" className="d-block">Opportunite</a>
          </div>
          <div className="menu_address">
            <ul className="list-unstyled fz18">
              <li>IDOS architecture SA</li>
              <li>Route des Falaises 14<br/> 2000 Neuchatel <br/>Suisse</li>
              <li>info@idos.ch</li>
              <li>+41 32 665 22 22</li>
            </ul>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="wrapperLine"></div>
        </div>
   )
}

export default Header
