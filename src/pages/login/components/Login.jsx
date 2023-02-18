import React, { Component } from 'react';

// Css
import "../css/login.css";

// Components
import Input from "../../../constants/Input"
import Container from "../../../constants/Container"

class Login extends Component {
    render(){
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
        );
    }
}

export default Login;