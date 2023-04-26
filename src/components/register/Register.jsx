import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Header from '../header/Header';

const Register = () => {

    const {createUser} = useContext(AuthContext)
    // register function
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then( result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch( error =>{
            console.log(error)
        })
    }
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto">
            {
                <Header></Header>
            }
            <form onSubmit={handleRegister} className="card-body">
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
                </div>
                <label className="label">
                    <span className="label-text">Already have an account? <Link to="/">SingIn</Link></span>
                </label>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;