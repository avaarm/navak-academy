import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import style from "./style/section2.css"

function BlueBackground2(props) {
  return (
  
    <div class="content">
      <div class={style.section2}>
        <div id="section2-wrapper">
        <InfoCard 
          title="Navak Academy"
          description="“Navak” means “little boat” in Armenian. It signifies hope, a journey, and growth. Navak Academy aims to provide opportunites to populations who would otherwise not be able to obtain them. We hope to inspire the next generation of smart women to become involved in computers science and the tech industry."
          buttonText="Learn more"
        />
        </div>
    </div>
    </div>
  );
}

export default BlueBackground2;
