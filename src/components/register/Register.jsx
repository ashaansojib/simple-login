import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Header from '../header/Header';

const Register = () => {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const { createUser, emailVerification } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    // register function
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 8) {
            setError("password length must 8 charecter!");
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setError("")
                setSuccess("Successfully user created!!");
                emailVerification();
            })
            .then(result => {
                console.log(result)
                alert("you got a verified mail")
            })
            .catch(error => {
                setSuccess("")
                setError(error.message)
                console.log(error.message)
            });
        form.reset();
    }
    const handleAccepted = (event) =>{
        setAccepted(event.target.checked)
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
                    <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name='name' required placeholder="Your name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                </div>
                <label className="label">
                    <span onClick={handleAccepted}><input type="checkbox" name='checkbox' /> Please read <Link to="/" className='underline'>terms!</Link></span>
                </label>
                <label className="label">
                    {
                        error ? <span className="label-text text-red-600">{error}</span> :
                            <span className="label-text text-green-600">{success}</span>
                    }
                </label>
                <label className="label">
                    <span className="label-text">Already have an account? <Link to="/">SingIn</Link></span>
                </label>
                <div className="form-control mt-6">
                    <button disabled={!accepted} className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;