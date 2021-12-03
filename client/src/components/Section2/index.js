import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import style from "./style/style.css";
function SectionTwo(props) {
  return (
    <div id="section2-wrapper">
      <div className={style.section2} id="sectionTwo">
        <InfoCard
          section="About Us"
          title="Navak"
          description="“Navak” means “little boat” in Armenian. It signifies hope, a journey, and growth. Navak Academy aims to provide opportunites to populations who would otherwise not be able to obtain them. We hope to inspire the next generation of smart women to become involved in computer science and the tech industry."
         
        />
      </div>
    </div>
  );
}
export default SectionTwo;
