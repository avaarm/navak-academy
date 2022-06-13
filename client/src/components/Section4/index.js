import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import style from "./style/style.css";
function SectionFour(props) {
  return (
    <div id="section4-wrapper">
      <div className={style.section4} id="sectionFour">
        <InfoCard
          section="Join Us"
          title="Join The Team"
          buttonText="Learn More"
        />
      </div>
    </div>
  );
}
export default SectionFour;
