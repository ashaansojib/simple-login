import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch( error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <Link className='p-2 text-center text-sky-600' to='/'>Home</Link>
            {
                user ?
                <>
                <span>{user.email}</span>
                <button onClick={handleLogOut} className="btn btn-xs">Sing Out</button>
                </>
                : 'User Not Available'
            }

        </div>
    );
};

export default Header;