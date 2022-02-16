import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import style from "./style/style.css";
import ServiceCard from "../ServiceCard/ServiceCard";

function SectionThree(props) {
  return (
    <div>
        
      <div id="section3-wrapper">  
      <div className="uk-child-width-1-4@l uk-grid data-uk-grid" >
        <div className={style.section3} id="sectionThree">
        
            <InfoCard
              section="Our Vision"
              title="Education and Career Guidance for Minority Women"
              description="Our main goal is provide free educational resources and career guidance to as many Armenian students as possible. "
              buttonText="Learn more"
            />

          </div>
            
        </div><ServiceCard/>
      </div>
    </div>
  );
}
export default SectionThree;
