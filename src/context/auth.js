import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user,setUser] = useState();  
    
    useEffect(() => {

        const userToken    = localStorage.getItem('user_token');
        const usersStorage = localStorage.getItem('users_db');

        if(userToken && usersStorage){
            
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.username === JSON.parse(userToken).username 
            );

            if(hasUser) setUser(hasUser[0]);
        }
    },[]);
    
    return <AuthContext.Provider>{children}</AuthContext.Provider>;
};