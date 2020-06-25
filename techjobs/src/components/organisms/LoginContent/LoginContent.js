import React from 'react';
import './loginContent.css';
import MainTitle from '../../atoms/MainTitle/MainTitle';
import FormLogin from '../../molecules/FormLogin/FormLogin';

const LoginContent = ({titulo, onFinish}) => {
    return (
        <main className='loginContent--container'>
            <MainTitle texto={titulo}/>
            <FormLogin onFinish={onFinish}/>
        </main>
    )
};

export default LoginContent;