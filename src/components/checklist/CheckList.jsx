import React from 'react';
import { Link } from 'react-router-dom';

const CheckList = () => {
    return (
        <div className='container'>
            <h2>this is privet route</h2>
            <Link to="/">Home</Link>
        </div>
    );
};

export default CheckList;