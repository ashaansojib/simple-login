import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const { user, createUser } = useContext(AuthContext);

    const [error, setError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;

        createUser(email, password)
        .then( result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch( error =>{
            if(error){
                setError('Already registered!')
            }
        })
    }
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto">
            <form onSubmit={handleSubmit} className="card-body">
                <label className="label">
                    <span className="label-text">{user ? user.displayName : 'user not available'}</span>
                </label>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <span>{error}</span>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;