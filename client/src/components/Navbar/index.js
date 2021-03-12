import React from "react";



function Navbar() {
return(
<nav className="uk-navbar-container uk-margin" uk-navbar>
    <div className="uk-navbar-left">

        <a className="uk-navbar-item uk-logo" href="../../../public/js/navak.ico">Logo</a>

        <ul className="uk-navbar-nav">
            <li>
                <a href="../../../public/js/navak.ico">
                    <span className="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                    Features
                </a>
            </li>
        </ul>

        <div className="uk-navbar-item">
            <div>Some <a href="#">Link</a></div>
        </div>

        <div className="uk-navbar-item">
            <form action="javascript:void(0)">
                <input className="uk-input uk-form-width-small" type="text" placeholder="Input"/>
                <button className="uk-button uk-button-default">Button</button>
            </form>
        </div>

    </div>
</nav>

)}

//export default is part of the ES6 module system
//A module is a self contained unit that can expose assets to other modules using export, and acquire assets from other modules using import.
// Default export - is the value that will be imported from the module, if you use the simple import statement import X from 'module'. X is the name that will be given locally to the variable assigned to contain the value, and it doesn't have to be named like the origin export. There can be only one default export.

export default Navbar;