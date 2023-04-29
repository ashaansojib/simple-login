import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
    // user email verification
    const emailVerification = () =>{
        return sendEmailVerification(auth.currentUser)
    }
    // password forgetting
    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }
    // function shared!!
    const AuthInfo = {
        user,
        createUser,
        userLogin,
        logOut,
        emailVerification,
        resetPassword
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;