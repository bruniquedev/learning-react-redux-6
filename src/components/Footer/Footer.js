import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        
            <div>
                <h3>Brunique developers footer auto generated @ {(new Date()).getFullYear()} HOC Example</h3>
                <Link to="/"> Home </Link> |
                <Link to="/about"> About</Link> |
                <Link to="/profile">Profile</Link> |
            </div>
        
    );
};

export default Footer;