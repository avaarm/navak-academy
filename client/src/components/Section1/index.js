import React from "react";
// import Background1 from "./Background1.png";
import InfoCard from "../InfoCard/InfoCard";
import "../InfoCard/style.css";
import "./style.css"
// import CommonButton from ""

function BlueBackground(props) {
    return (
      <div className="uk-container-first uk-container-xlarge container">
        <InfoCard title="Welcome to Navak Academy" description="A space for Immigrant women to learn programming skills and gain the knowledge they need in order to pursue careers in technology." buttonText="Learn more"/>
      </div>
    )}
export default BlueBackground;
