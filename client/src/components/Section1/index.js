import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import style from "./style/style.css";
function SectionOne(props) {
  return (
    <div id="section1-wrapper">
      <div className={style.section1} id="sectionOne">
        <InfoCard
          title="Welcome to Navak Academy"
          description="A supportive space for immigrant women to learn programming skills and gain the knowledge they need in order to pursue careers in technology."
          buttonText="Learn more"
        />
      </div>
    </div>
  );
}
export default SectionOne;
