import React, { Component } from 'react';
import Button from "../../constants/Button";
import Input from "../../constants/Input";
import Container from "../../constants/Container";
import "./css/login.css";

const Login = () => {
    return(
        <Container img='/assets/img/icons/login.png'>
            <Input
                placeholder="Digite seu usuário"
                icon="user"
                type="text"
            /> 
            <Input
                placeholder="Digite sua senha"
                type="password"
                icon="lock"
            /> 
            <div className='buttons'>
                <Button
                    title="Login"
                    url="/home"
                />
            </div>  
        </Container>
    )
}

export default Login;