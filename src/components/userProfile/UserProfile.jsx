import React from 'react';
import store from 'store';
import Button from '../buttons/Button';
import {useNavigate} from 'react-router-dom';
const Userprofile = () => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        store.remove('userName');
        store.remove('userPass');
        navigate('/auth');
    }
    return (
        <div className='header-userprofile_container'>
            <div className='header-userprofile_body userprofile-body'>
                <div className='userprofile-body_username'>
                    {store.get('userName').value === 'admin'? 'Евгений':''}
                </div>
                <div className='userprofile-body_buttons'><Button handleClick={handleClick} value='Выход' parent='header' color='danger'/></div>
            </div>
        </div>
    );
};

export default Userprofile;