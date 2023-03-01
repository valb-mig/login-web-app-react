import React, { Component } from 'react';
import './css/input.css'

function Input(props){
    return(
        <div id={props.id} className='input'>
            <i className={'fa fa-'+props.icon}></i>
            <input id={props.id} type={props.type} onChange={props.onchange} placeholder={props.placeholder}></input>
        </div>
    );
}

export default Input;