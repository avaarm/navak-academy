import React from 'react';
import "./style.css";


function CommonButton(props) {
    return  <button class="common-button uk-button uk-button-primary"> {props.title} </button>
  }

export default CommonButton;
