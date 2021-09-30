import React from "react";
// import Background1 from "./Background1.png";
import InfoCard from "../InfoCard/InfoCard";
// import "../InfoCard/style.css";
import "./style/style.css";
// import eng from "./style/eng2.png"
// import CommonButton from ""

function BlueBackground(props) {
    return (
      <div className="uk-container-first uk-container-xlarge container">
        <InfoCard title="Welcome to Navak Academy" description="A supportive space for immigrant women to learn programming skills and gain the knowledge they need in order to pursue careers in technology." buttonText="Learn more"/>
        {/* <img class="section1" src={eng} alt="female engineer"/> */}
      </div>
    )}
export default BlueBackground;
