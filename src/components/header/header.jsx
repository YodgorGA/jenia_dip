import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Userprofile from '../userProfile/UserProfile';
const Header = () => {
    const location = useLocation();
    return (
        <div className='header'>
            <div className='header-body'>
                <Link   to='/' 
                        className={`header-nav${(location.pathname === '/') ? '_active' : ''}`}>
                        Архив
                </Link>
                <Link   to='/stream' 
                        className={`header-nav${(location.pathname === '/stream') ? '_active' : ''}`}>
                        Стрим
                </Link>
            </div>
            <div className='header-userprofile'>
                <Userprofile/>
            </div>
        </div>
    );
};

export default Header;