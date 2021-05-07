import React from "react";
import "./style.css";
import BackgroundFooter from "./BackgroundFooter.png";

function Footer() {
    return (
        <div className="uk-container uk-container-xlarge" style={{ backgroundImage: `url(${BackgroundFooter})`,   
        backgroundRepeat: 'no-repeat',
        backgroundSize:'contain',
        paddingBottom: '0%'
      
         }}>
        <footer className="uk-text-center uk-text-middle footer">
            <hr className="uk-divider-icon uk-text-center "></hr>
        <span>
        
            <a className="contributor" href="# " target="blank"></a>
            
        </span>
        <div>
            <a className="view-repo uk-text-center" href="/">
                Navak Academy
             
                <span uk-icon="icon: github" className="contact-icon contact-link-icon" target="_blank"> </span>
            </a>
        </div>
    </footer>
    </div>
    );
}

export default Footer;
