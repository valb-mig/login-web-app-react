import React, { Component } from 'react';
import './css/home.css'

import Header       from "../../constants/Header";
import HeaderItem   from "../../constants/HeaderItem";
import Sidebar      from "../../constants/Sidebar";
import SidebarItem  from "../../constants/SidebarItem";
import Content      from "../../constants/Content";
import Greetings    from "../../constants/Greetings";

const Home = () =>{
    return(
        <div>
            <title> Home </title>

            <Header>
            </Header>

            <div className='main'>
                <Sidebar>
                    <SidebarItem
                        name="Home"
                        icon="home"
                    />
                </Sidebar>
        
                <Content>
                    <Greetings/>            
                </Content>
            </div>
        </div>

    )
}

export default Home;