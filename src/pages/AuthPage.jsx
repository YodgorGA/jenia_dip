import React from 'react';
import Button from '../components/buttons/Button';
import TextInput from '../components/TextInput/TextInput';
import {useNavigate} from 'react-router-dom';
import store from 'store';
const AuthPage = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        if(store.get('userName').value === 'admin' && store.get('userPass').value === 'masterkey')
        {
            navigate('/');
        }
    }
    return (
        <div className='page-wrapper'>
            <div className='page-body'>
                <div className='auth-container'>
                    <div className='auth-body'>
                        <div className='auth-title'>
                            <h1>Авторизация</h1>
                        </div>
                        <div className='auth-form'>
                            <TextInput field='user' labelName='Логин' type='text' parent='auth'/>
                            <TextInput field='pass' labelName='Пароль' type='password' parent='auth'/>
                            <Button handleClick={handleClick} value='Вход' parent='auth' color='primary'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;