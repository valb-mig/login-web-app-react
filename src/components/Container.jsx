import React, { Component } from 'react';
import './css/container.css'

function Container(props){
    return(
        <div className='content-box'>
            <div className='box'>
                <div className='title'>{props.title}
                    <img src={props.img}></img>
                </div>
                <div className='container'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Container;