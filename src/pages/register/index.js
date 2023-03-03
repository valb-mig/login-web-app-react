import React, { Component } from 'react';

// Components
import Button    from "../../components/Button";
import Input     from "../../components/Input";
import Container from "../../components/Container";

// Css
import "./css/register.css";
import "../../components/css/texts.css";

// Function

function handleRegister(params)
{
    if(true)
    {
        window.location = '/home';
    }
}

const Register = () => {

    return(
        <div className='register-page'>
            <Container img='/assets/img/icons/login.png'>

                <Input
                    placeholder="Usuário"
                    id="user"
                    icon="user"
                    type="text"
                /> 

                <Input
                    placeholder="E-mail"
                    id="email"
                    icon="envelope"
                    type="email"
                /> 

                <Input
                    placeholder="Senha"
                    id="password"
                    type="password"
                    icon="lock"
                /> 

                <Input
                    placeholder="Confirmar senha"
                    id="password"
                    type="password"
                    icon="lock"
                /> 

                <div className='redirect-text'>
                    Já não possui uma conta? <a href='/login'><b>Login</b></a>
                </div>

                <div className='buttons'>
                    <Button
                        title="Registrar"
                        onclick={handleRegister}
                    />
                </div>  
            </Container>
        </div>
    )
}

export default Register;