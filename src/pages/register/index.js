import React, { Component } from 'react';
import Input from "../../constants/Input";
import Button from "../../constants/Button";
import Container from "../../constants/Container";
import "./css/register.css";

function saveInput() {
    localStorage.setItem("username", JSON.stringify());
}

const Register = () => {
    return(
        <Container title="Register">
            <Input
                id="username"
                placeholder="Digite seu usuário"
                icon="user"
                type="text"
            /> 
            <Input
                id="email"
                placeholder="Digite seu email"
                type="email"
                icon="at"
            /> 
            <Input
                id="password"
                placeholder="Digite sua senha"
                type="password"
                icon="lock"
            />
            <Button
                title="Registrar"
                type="submit"
                onClick={saveInput()}
            />  
        </Container>
    )
}

export default Register;