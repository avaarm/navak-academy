import React from "react";
import "./style.css"


function Navbar() {
return(
<nav className="uk-navbar-container uk-margin uk-navbar">
    <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="../../../public/js/navak.ico">Navak Academy</a>
        <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="">Home</a></li>
            <li className="uk-parent"><a href="">About Us</a></li>
            <li className="uk-parent"><a href="">Our Vision</a></li>
            <li className="uk-parent"><a href="">Join Us</a></li>
            <li className="uk-parent"><a href="">Apply</a></li>
            <li className="uk-parent"><a href="">Contact</a></li>
            <button className="uk-button uk-button-default">Sign Up</button>
            <a className="uk-hidden@m" href="#menu-canvas" uk-toggle="target: #menu-canvas"><span className="menu-icon"
                        uk-icon="icon: menu; ratio: 1.5"></span></a>
        </ul>
    </div>
</nav>

)}

//export default is part of the ES6 module system
//A module is a self contained unit that can expose assets to other modules using export, and acquire assets from other modules using import.
// Default export - is the value that will be imported from the module, if you use the simple import statement import X from 'module'. X is the name that will be given locally to the variable assigned to contain the value, and it doesn't have to be named like the origin export. There can be only one default export.

export default Navbar;