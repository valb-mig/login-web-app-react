import React, { Component } from 'react';
import './css/input.css'

function Input(props){
    return(
        <div className='input'>
            <i className={'fa fa-'+props.icon}></i>
            <input type={props.type} placeholder={props.placeholder}></input>
        </div>
    );
}

export default Input;