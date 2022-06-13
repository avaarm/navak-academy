import React from "react";
import style from "./style/style.css";
import { Link } from "react-router-dom";

// import AccountDropdown from "./AccountDropdown"
function Footer(props) {
  return (
    <div id="footer-wrapper">
      <div id="sectionFooter">
        <div className="contact">
          <ul className="uk-navbar-nav uk-visible@m uk-list-primary">
            {/* <li><Link to="/" className="nav-item" style={{ color: props.color }}>Home</Link></li> */}
            <li>
              <Link
                to="/Section5"
                className="nav-item"
                style={{ color: props.color }}
              >
                Apply{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/Footer"
                className="nav-item"
                style={{ color: props.color }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <hr className="uk-divider-icon"></hr>
      </div>
      <div className="icons">
        <a href="content " className="icon uk-icon-button-colors" data-uk-icon="github"></a>
        <a href=" " className="icon uk-icon-button-colors" data-uk-icon="twitter"></a>
        <a
          href=" "
          className="icon uk-icon-button-colors"
          data-uk-icon="instagram"
        ></a>
        <a href=" " className="icon uk-icon-button-colors" uk-icon="youtube"></a>
      </div>
      <div>
        <p>
          Navak LLC operates an adult education program and a school and, in so
          doing, admits students of any race, color, national and ethnic origin,
          disability, or sexual orientation to all the rights, privileges,
          programs, and activities generally accorded or made available to
          students in the program at the school. It does not discriminate on the
          basis of race, color, national and ethnic origin or sexual orientation
          in administration of its educational policies, admissions policies,
          internship placement policies and programs, or and loan programs. ©
          Navak LLC 2021. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
export default Footer;
