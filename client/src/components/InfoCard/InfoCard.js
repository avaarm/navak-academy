import React from 'react'
import CommonButton from './CommonButton';
import "./style.css";

function InfoCard(props) {
    return (
      <div className="info-card uk-card uk-card-default uk-card-body uk-width-1-6@m">
        <p className='info-card-section'>{props.section}</p>
        <h1>{props.title}</h1>
        <p className="description">{props.description}</p>
        <CommonButton title={props.buttonText}/>
      </div>
    );
  }

export default InfoCard;