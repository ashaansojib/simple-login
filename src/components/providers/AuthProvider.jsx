import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
            setUser(currentUser)
        });
        return()=>{
            unsubscribe();
        }
    }, [])
    // singOut here
    const logOut = () =>{
        return signOut(auth)
    }
    // function shared!!
    const AuthInfo = {
        user,
        createUser,
        userLogin,
        logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;