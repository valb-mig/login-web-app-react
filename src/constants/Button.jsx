import React, { Component } from 'react';
import './css/button.css'

function Button(props){
    return(
        <div className="button" onClick={props.onclick}>
            <div>
                {props.title}
            </div>
        </div>
    );
}

export default Button;