import React, { Component } from 'react';
import './css/home.css'

import Content from "../../components/Content";

const Home = () =>{
    return(
        <div className='content-home'>
            <title> Home </title>
            <div className='main'>
                <Content color="blue">
                    <h1>HomePage</h1>
                </Content>
            </div>

        </div>

    )
}

export default Home;