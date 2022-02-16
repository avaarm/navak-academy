/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
// import AccountDropdown from "./AccountDropdown"
import navak from "./navak.png";
import Translation from "../TranslationButton";

// need to use react scroll to scroll down to a particular component 
// fill out an interest google form 
// 


const style = {
  navbar: {
    backgroundColor: "transparent",
  },
};

function Navbar(props) {
  return (
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <nav
        className="uk-navbar-container uk-navbar navbar"
        style={style.navbar}
      >
       
        <Link to='/' className="nav-item logo" style={{ color: props.color }}>
          <img src={navak} width="100" height="100" alt=" logo"></img>
        </Link>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav uk-visible@m uk-list-primary">
            {/* <li><Link to="/" className="nav-item" style={{ color: props.color }}>Home</Link></li> */}
            <li>
              <Link to='/Section1' className="nav-item" style={{ color: props.color }}>
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to="/Section2" className="nav-item" style={{ color: props.color }}>
                About{" "}
              </Link>
            </li>
            <li>
              <Link to="/Section3" className="nav-item" style={{ color: props.color }}>
                Vision
              </Link>
            </li>
            <li>
              <Link to="/Section5" className="nav-item" style={{ color: props.color }}>
                Apply{" "}
              </Link>
            </li>
            <li>
              <Link to="/Section4" className="nav-item" style={{ color: props.color }}>
                Join
              </Link>
            </li>
            <li>
              <Link to="/Footer" className="nav-item" style={{ color: props.color }}>
                Contact
              </Link>
            </li> 

            <li>
            <Link to="/" className="nav-item" style={{ color: props.color }}>
         <Translation/>
              </Link>
               
            </li>
          </ul>
          <a
            className="uk-hidden@m"
            href="#menu-canvas"
            uk-toggle="target: #menu-canvas"
          >
            <span className="menu-icon" uk-icon="icon: menu; ratio: 1.5"></span>
          </a>
         
        </div>
        {
          // props.accountBtn !== "none" ? (
          //     <div className="uk-navbar-right uk-visible@m">
          //         <button className="uk-button uk-button-default my-account-btn nav-item" type="button" style={{ color: props.color }}>My Account<span className="user-icon" uk-icon="chevron-down"></span></button>
          //         {/* <AccountDropdown /> */}
          //     </div>
          // ) : (
          //         ""
          //     )
        }
      </nav>
    </div>
  );
}

//export default is part of the ES6 module system
//A module is a self contained unit that can expose assets to other modules using export, and acquire assets from other modules using import.
// Default export - is the value that will be imported from the module, if you use the simple import statement import X from 'module'. X is the name that will be given locally to the variable assigned to contain the value, and it doesn't have to be named like the origin export. There can be only one default export.

export default Navbar;
