import React from 'react';
import './signUpContent.css';
import FormSignUp from '../../molecules/FormSignUp/FormSignUp';
import MainTitle from '../../atoms/MainTitle/MainTitle';

const SignUpContent = ({titulo, onFinish}) => {
    return (
        <main className='signUpContent--container'>
            <MainTitle titulo={titulo} />
            <FormSignUp onFinish={onFinish}/>
        </main>
    );
};

export default SignUpContent;