import React from 'react';
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user,setUser] = useState();  
    
    useEffect(() => {

        const userToken   = localStorage.getItem('user_token');
        const userStorage = localStorage.getItem('users_db');

        if(userToken && userStorage){
            
            const hashUser = JSON.parse(userStorage)?.filter{
                (user) => user.usuario === JSON.parse(userToken).usuario
            };
        }

    })
    
    return <AuthContext.Provider>{children}</AuthContext.Provider>;
};