import React from "react";
import style from "./style/style.css";
import { Link } from "react-router-dom";
import Forms from "../Form "

// import AccountDropdown from "./AccountDropdown"
function Footer(props) {
  return (
    <div id="footer-wrapper">
      <div className={style.footer} id="sectionFooter">
        <Forms />

        <div className="contact">
          <ul className="uk-navbar-nav uk-visible@m uk-list-primary">
            {/* <li><Link to="/" className="nav-item" style={{ color: props.color }}>Home</Link></li> */}
            <li>
              <Link to="/Section5" className="nav-item" style={{ color: props.color }}>
                Apply{" "}
              </Link>
            </li>
            <li>
              <Link to="/Footer" className="nav-item" style={{ color: props.color }}>
                Contact
              </Link>
            </li>

          </ul>
        </div>

        <hr className="uk-divider-icon"></hr>
      </div>
      <div className="icons">
        <a href="" className="icon uk-icon-button-colors" uk-icon="github" ></a>
        <a href="" className="icon uk-icon-button-colors" uk-icon="twitter" ></a>
        <a href="" className="icon uk-icon-button-colors" uk-icon="instagram" ></a>
        <a href="" className="icon uk-icon-button-colors" uk-icon="youtube" ></a>
      </div>
    </div>
  );
}
export default Footer;


