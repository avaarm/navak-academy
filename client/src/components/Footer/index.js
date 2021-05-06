import React from "react";
import "./style.css";

function Footer() {
    return (
        <div className="uk-sticky">
        <footer className="uk-text-center uk-text-middle footer">
            <hr className="uk-divider-icon uk-text-center " ></hr>
        <span>
        
            <a className="contributor" href="# " target="blank"></a>
            
        </span>
        <div>
            <a className="view-repo" href=" ">
              Navak Academy
                <span uk-icon="icon: github" className="contact-icon contact-link-icon" target="_blank"></span>
            </a>
        </div>
    </footer>
    </div>
    );
}

export default Footer;
