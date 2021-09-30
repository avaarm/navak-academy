/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Translation(props) {
  return (
    <div>
      <button class="uk-button uk-button-default" type="button">
        En{" "}
      </button>
      <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
        <ul className="uk-nav uk-dropdown-nav">
          <li className="uk-active">
            <a href="#">English</a>
          </li>
          <li>
            <a href="#">Armenian</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

//export default is part of the ES6 module system
//A module is a self contained unit that can expose assets to other modules using export, and acquire assets from other modules using import.
// Default export - is the value that will be imported from the module, if you use the simple import statement import X from 'module'. X is the name that will be given locally to the variable assigned to contain the value, and it doesn't have to be named like the origin export. There can be only one default export.

export default Translation;
