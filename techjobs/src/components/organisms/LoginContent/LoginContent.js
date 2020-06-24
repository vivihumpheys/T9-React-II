import React from 'react';
import './loginContent.css';
import MainTitle from '../../atoms/MainTitle/MainTitle';

const LoginContent = ({titulo}) => {
    return (
        <main className='loginContent--container'>
            <MainTitle texto={titulo}/>
        </main>
    )
};

export default LoginContent;