import React from "react";
import Background1 from "./Background1.png";
import InfoCard from "../InfoCard/InfoCard";
import "../InfoCard/style.css";
// import CommonButton from ""

function BlueBackground(props) {
    return (
        <div className="uk-container uk-container-xlarge" style={{ backgroundImage: `url(${Background1})`,   
        backgroundRepeat: 'no-repeat',
        backgroundSize:'contain',
        paddingBottom: '100%'}}>
        
        <InfoCard title="Welcome to Navak Academy" description="A space for Armenian women to learn programming skills and gain the knowledge they need in order to pursue careers in technology. " buttonText="Learn more"/>

      </div>
    )

}

export default BlueBackground;
