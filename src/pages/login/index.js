import React, { Component } from 'react';
import "./css/login.css";
import Input from "../../constants/Input"
import Container from "../../constants/Container"

const Login = () => {
    return(
        <Container title="Login">
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
        </Container>
    )
}

export default Login;