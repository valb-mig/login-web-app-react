import React, { Component } from 'react';
import './css/container.css'

function Container(props){
    return(
        <div className='content'>
            <div className='box'>
                <div className='title'>{props.title}</div>
                
                <div className='container'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Container;