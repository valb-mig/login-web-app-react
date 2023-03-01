import React, { Component } from 'react';

// Components
import Button    from "../../constants/Button";
import Input     from "../../constants/Input";
import Container from "../../constants/Container";

// Css
import "./css/login.css";
import "../../constants/css/texts.css";

// Function

function handleLogin(params)
{
    return alert('a');
}

const Login = () => {

    return(
        <Container img='/assets/img/icons/login.png'>

            <Input
                placeholder="Usuário"
                id="user"
                icon="user"
                type="text"
            /> 

            <Input
                placeholder="Senha"
                id="password"
                type="password"
                icon="lock"
            /> 

            <div className='redirect-text'>
                Ainda não possui uma conta? <a href='/register'><b>Registre-se</b></a>
            </div>

            <div className='buttons'>
                <Button
                    title="Login"
                    onclick={handleLogin}
                />
            </div>  
        </Container>
    )
}

export default Login;