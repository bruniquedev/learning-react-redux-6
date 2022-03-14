import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div>
                <h3>Brunique developers Header logo banner HOC Example</h3>
                <Link to="/"> Home </Link> |
                <Link to="/about"> About</Link> |
                <Link to="/profile">Profile</Link> |
            </div>
        </header>
    );
};

export default Header;