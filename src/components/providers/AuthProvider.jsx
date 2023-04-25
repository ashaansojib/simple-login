import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import App from '../../App';

export const AuthContext = createContext(null)

const auth = getAuth(App);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    

    const AuthInfo = {
        user
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;