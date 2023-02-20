import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login     from '../pages/login';
import Home      from '../pages/home';
import Register  from '../pages/register';


const Private = ({ Item }) => {
    const logged = true; //Based on login  

    return logged > 0 ? <Item /> : <Login />
}

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home"     element={<Private Item={Home} />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login"    element={<Login />} />
                </Routes>
            </Fragment>
        </BrowserRouter>    
    );
};

export default RoutesApp;