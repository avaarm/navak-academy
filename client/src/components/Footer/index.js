import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="uk-text-center uk-text-middle footer">
        <span>
            ©
            <a className="contributor" href="" target="_blank"></a>
            <a className="contributor" href="" target="_blank"></a>
            <a className="contributor" href="" target="_blank"></a>
            <a className="contributor" href="" target="_blank"></a>
        </span>
        <div>
            <a className="view-repo" href="">
                View project repository
                <span uk-icon="icon: github" className="contact-icon contact-link-icon" target="_blank"></span>
            </a>
        </div>
    </footer>
    );
}

export default Footer;
