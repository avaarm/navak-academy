import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import style from "./style/style.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import image1 from "./style/images/Vector-Smart-Object.png";
import image2 from "./style/images/Vector-Smart-Object-2.png"
import image3 from "./style/images/Vector-Smart-Object-3.png"
import image4 from "./style/images/Vector-Smart-Object-4.png"


function SectionThree() {
  return (
    <div class="uk-child-width@1-2 uk-text-center" data-uk-grid>
      <div id="section3-wrapper" >  
        <div className={style.section3} id="sectionThree">
            <div className="sectionFlex">
            <InfoCard
              section="Our Vision"
              title="Education and Career Guidance for Minority Women"
              description="Our main goal is provide educational resources and career guidance to as many Armenian students as possible. "
              buttonText="Learn more"
            />
            <ServiceCard
              image = {image1}
              title = "Full Stack Web Development"
              description ="A three month immersive online course in full stack web development"
              button="Learn More"
            />
            <ServiceCard
            image = {image2}
            title = "Data Science "
            description ="A three month immersive online course in full stack web development"
            button="Coming Soon"
            />
            <ServiceCard
            image = {image3}
            title = "UX/UI Design"
            description ="A three month immerive online course in UX/UI Design. "
            button="Coming Soon"/>
            <ServiceCard
            image = {image4}
            title = "Introduction to Programming"
            description ="A three week introduction to programming for those who are not yet ready to commit to three months of learning."
            button="Coming Soon"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionThree;
