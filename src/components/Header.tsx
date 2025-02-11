import React from 'react';
import logo from '../assets/logo.png'
import '../styles/Header.css'

const Header: React.FC = () => {
    return (
        <div className="header-container">
            <img
                src={logo}
                width={300}
                height={400}
                alt="Logo"
                className="header-logo"
            />
        </div>
    );
}

export default Header;