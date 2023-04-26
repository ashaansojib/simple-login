import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <Link className='p-2 text-center text-sky-600' to='/'>Home</Link>
            {
                user ?
                <span>{user.email}</span>
                : 'User Not Available'
            }

        </div>
    );
};

export default Header;