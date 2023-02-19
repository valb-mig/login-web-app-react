import React, { Component } from 'react';

// Css
import "./css/register.css";

// Components
import Input from "../../constants/Input"
import Container from "../../constants/Container"

const Register = () => {
    return(
        <Container title="Register">
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

export default Register;