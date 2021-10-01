import React from "react";
import CommonButton from "./CommonButton";
import style from "./style.css";

function InfoCard(props) {
  return (
    <div className={style.InfoCardGeneral}>
      <div className="uk-container">
        <div className="uk-text-center">
          <div id="section1-container">
            <p className="info-card-section">{props.section}</p>
            <h1>{props.title}</h1>
            <p className="description">{props.description}</p>
            <CommonButton title={props.buttonText} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
