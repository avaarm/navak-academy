import React from "react";
import "./mobilestyle.css";
import Translation from "../TranslationButton"

function MobileNavbar() {
  return (
    <div id="menu-canvas" uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar">
        <button
          className="uk-offcanvas-close"
          type="button"
          uk-close="true"
        ></button>
        <a
          className="uk-navbar-item uk-logo"
          href="../../../public/js/navak.ico"
        >
          Navak Academy
        </a>
        <ul className="uk-list">
          {/* <li className="nav-item mobile-nav-item">
            <a href=" ">Home</a>
          </li> */}
          <li className="nav-item mobile-nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item mobile-nav-item">
            <a href="/Section3">Vision</a>
          </li>
          <li className="nav-item mobile-nav-item">
            <a href=" ">Join</a>
          </li>
          <li className="nav-item mobile-nav-item">
            <a href=" ">Apply</a>
          </li>
          <li className="nav-item mobile-nav-item">
            <a href=" ">Contact</a>
          </li>
          <Translation/>

        </ul>
      </div>
    </div>
  );
}

//export default is part of the ES6 module system
//A module is a self contained unit that can expose assets to other modules using export, and acquire assets from other modules using import.
// Default export - is the value that will be imported from the module, if you use the simple import statement import X from 'module'. X is the name that will be given locally to the variable assigned to contain the value, and it doesn't have to be named like the origin export. There can be only one default export.

export default MobileNavbar;
