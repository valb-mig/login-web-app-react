import React, { Component } from 'react';
import './css/button.css'

function Button(props){
    return(
        <button className="button" type={props.type} onClick={props.onClick}>{props.title}</button>
    );
}

export default Button;