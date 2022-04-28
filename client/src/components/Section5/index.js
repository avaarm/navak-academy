import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import style from "./style/style.css";
import Forms from "../Forms/index"
function SectionFive(props) {
  return (
    <div id="section5-wrapper">
          <Forms/>
      <div className={style.section5} id="sectionFive">
        <InfoCard
          section="Apply"
          title="Applications Open For Summer 2022"
          link="https://docs.google.com/forms/d/e/1FAIpQLSdbLI68AnrlOqYVPys03Jsd7Uo3osS3YShlaNAcZ6nSpwzPaA/viewform?usp=sf_link"
          buttonText="Submit" 
        />
      </div>
    </div>
  );
}
export default SectionFive;
