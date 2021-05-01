/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import { Link, img } from "react-router-dom";
// import AccountDropdown from "./AccountDropdown"
import navak from "./navak.png";



const style = {
  navbar: {
      backgroundColor: "transparent"
  },
};

function Navbar(props) {
  return (
    <div>
        <nav className="uk-navbar-container uk-navbar navbar" style={style.navbar}>
      <li><Link to="/" className="nav-item" style={{ color: props.color }}><img src={navak} width="100" height="100" alt=" logo"></img></Link></li>
 <div className="uk-navbar-right">
                <ul className="uk-navbar-nav uk-visible@m">
                    <li><Link to="/" className="nav-item" style={{ color: props.color }}>Home</Link></li>
                    <li><Link to="/" className="nav-item" style={{ color: props.color }}>About Us </Link></li>
                    <li><Link to="/" className="nav-item" style={{ color: props.color }}>Our Vision</Link></li>
                    <li><Link to="/" className="nav-item" style={{ color: props.color }}>Apply </Link></li>
                    <li><Link to="/" className="nav-item" style={{ color: props.color }}>Join Us</Link></li>
                    <li><Link to="/" className="nav-item" style={{ color: props.color }}>Contact</Link></li>
                </ul>
                <a className="uk-hidden@m" href="#menu-canvas" uk-toggle="target: #menu-canvas"><span className="menu-icon"
                    uk-icon="icon: menu; ratio: 1.5"></span></a>
            </div>
            {
                props.accountBtn !== "none" ? (
                    <div className="uk-navbar-right uk-visible@m">
                        <button className="uk-button uk-button-default my-account-btn nav-item" type="button" style={{ color: props.color }}>My Account<span className="user-icon" uk-icon="chevron-down"></span></button>
                        {/* <AccountDropdown /> */}
                    </div>
                ) : (
                        ""
                    )
            }
        </nav>
    </div>
)
}

//export default is part of the ES6 module system
//A module is a self contained unit that can expose assets to other modules using export, and acquire assets from other modules using import.
// Default export - is the value that will be imported from the module, if you use the simple import statement import X from 'module'. X is the name that will be given locally to the variable assigned to contain the value, and it doesn't have to be named like the origin export. There can be only one default export.

export default Navbar;
