import React from "react";
import Style from "./style.css";


function ServiceCard(props) {

  return (

    // <div className="uk-flex uk-flex-center@m uk-flex-right@l"></div>
    // <div className="uk-card uk-card-default uk-card-body">Item 1</div>
    // <div className="uk-card uk-card-default uk-card-body uk-margin-left">Item 2</div>
    // <div className="uk-card uk-card-default uk-card-body uk-margin-left">Item 3</div>

<div className="uk-flex uk-flex-right@l uk-flex-right@l" data-uk-grid>
    <div>
        <div className="uk-card uk-card-default uk-card-body ">
            <h3 className="uk-card-title">Hover</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div className="uk-card uk-card-default uk-card-body ">
            <h3 className="uk-card-title">Hover</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div className="uk-card uk-card-default uk-card-body ">
            <h3 className="uk-card-title">Hover</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div className="uk-card uk-card-default uk-card-body ">
            <h3 className="uk-card-title">Hover</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
  );
}

export default ServiceCard;