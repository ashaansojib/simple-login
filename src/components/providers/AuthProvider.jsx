import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.confiq';

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    // user state manage here
    const [user, setUser] = useState(null);
    
    // for create account
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // for login or singin
    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // user auth state change
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged( auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
        });
        return()=>{
            unsubscribe();
        }
    }, [])
    // function shared!!
    const AuthInfo = {
        user,
        createUser,
        userLogin
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;