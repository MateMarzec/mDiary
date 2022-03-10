import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

 const Logo = () => (
    <div className="logo">
        <Link to="/">
            <img className="logo__image" src={logo} alt='Logo'/>
        </Link>
    </div>
);

export default Logo;