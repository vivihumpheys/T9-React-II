import React from 'react';
import './signUpContent.css';
import FormSignUp from '../../molecules/FormSignUp/FormSignUp';
import MainTitle from '../../atoms/MainTitle/MainTitle';

const SignUpContent = ({texto, onFinish, login}) => {
    return (
        <main className='signUpContent--container'>
            <MainTitle texto={texto} className='title' />
            <FormSignUp onFinish={onFinish} login={login}/>
        </main>
    );
};

export default SignUpContent;