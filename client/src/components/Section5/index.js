import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import style from "./style/style.css";
function SectionFive(props) {
  return (
    <div id="section5-wrapper">
      <div className={style.section5} id="sectionFive">
        <InfoCard
          title="Navak"
          description="“Navak” means “little boat” in Armenian. It signifies hope, a journey, and growth. Navak Academy aims to provide opportunites to populations who would otherwise not be able to obtain them. We hope to inspire the next generation of smart women to become involved in computers science and the tech industry."

        />
      </div>
    </div>
  );
}
export default SectionFive;
