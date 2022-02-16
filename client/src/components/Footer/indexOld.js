import React from "react";
import "./style/style.css";

function Footer() {
  return (
    <div class="FooterSection">
      <div uk-container-first uk-container-xlarge container>
        <footer className="uk-text-center uk-text-middle footer">
          <hr className="uk-divider-icon uk-text-center "></hr>
          <span>
            <a className="contributor" href="# " target="blank"></a>
          </span>
          <div>
            <a className="view-repo uk-text-center" href="/">
              Navak Academy
              <span
                uk-icon="icon: github"
                className="contact-icon contact-link-icon"
                target="_blank"
              >
                {" "}
              </span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;

//Notes
  // had trouble using the direct syntax from the uikit website, had to use the portfolio syntax
    // maybe a version issue 
  // Contact form 
    // https://www.freecodecamp.org/news/react-and-googlesheets/