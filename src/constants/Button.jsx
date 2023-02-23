import React, { Component } from 'react';
import './css/button.css'

function Button(props){
    return(
        <div className="button">
            <a href={props.url}>
                {props.title}
            </a>
        </div>
    );
}

export default Button;