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
            {/* <span
                className="info-button"
                style={{ userSelect: 'none' }}
                onClick={}
            >
                <sup>&#9432;</sup>
           </span>
            
                    <div className="font-bold mb-1">
                        Important Notes:
                    </div>
                    <ul className="list-disc pl-4">
                        <li>
                            Building/room access may be restricted to
                            specific colleges or departments
                        </li>
                        <li>
                            Displayed availability only reflects
                            official class schedules
                        </li>
                        <li>
                            Rooms may be occupied by unofficial meetings
                            or study groups
                        </li>
                        <li>
                            Click on indicators to view room schedules
                            for that building
                        </li>
                    </ul> */}
        </div>
    );
}

export default Header;