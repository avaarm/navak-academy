import React from "react";
// import Style from "./style.css";



function ServiceCard(props) {

  return (
        
    <div className="uk-card uk-card-default uk-width-1-4@m">
    <div className="uk-card">
        <div className="uk-grid-small" data-uk-grid>
            <div className="uk-width-auto uk-card-media-top">
                <img width="80" height="80" src={props.image}/>
            </div>
            <div className="uk-width-expand">
  <h3 className="uk-card-title uk-margin-remove-bottom">{props.title}</h3>
            </div>
        </div>
    </div>
    <div className="uk-card-body">
  <p>{props.description}</p>
    </div>
    <div className="uk-card">
  <a href={props.link} className="uk-button uk-button-text">{props.button}</a>
    </div>
</div>     
  )
}

export default ServiceCard;