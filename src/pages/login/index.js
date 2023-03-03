import React, { Component } from 'react';

// Components
import Button    from "../../components/Button";
import Input     from "../../components/Input";
import Container from "../../components/Container";

// Css
import "./css/login.css";
import "../../components/css/texts.css";

// Function

function handleLogin(params)
{
    if(true)
    {
        window.location = '/home';
    }
}

const Login = () => {

    return(
        <div className='login-page'>
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
        </div>
    )
}

export default Login;