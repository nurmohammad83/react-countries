import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Wel come to my site</h2>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/shope">Shope</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;