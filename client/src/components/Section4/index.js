import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import style from "./style/style.css";
function SectionFour(props) {
  return (
    <div id="section4-wrapper">
      <div className={style.section4} id="sectionFour">
        <InfoCard
          title="Navak"
          description="“Navak” means “little boat” in Armenian. It signifies hope, a journey, and growth. Navak Academy aims to provide opportunites to populations who would otherwise not be able to obtain them. We hope to inspire the next generation of smart women to become involved in computers science and the tech industry."

        />
      </div>
    </div>
  );
}
export default SectionFour;
