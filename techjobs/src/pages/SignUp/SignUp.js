import React, {Component} from 'react';
import './signUp.css';
import GeneralTemplate from '../../templates/GeneralTemplates/GeneralTemplate';
import SignUpContent from '../../components/organisms/SignUpContent/SignUpContent';

class SignUp extends Component {
    constructor(){
        super()
        this.state={}
    };

    onFinish=(value)=>{
        console.log ('dados cadastrados', value)
    }

    render(){
        return(
            <GeneralTemplate>
                <SignUpContent titulo='Cadastre-se' onFinish={this.onFinish}/>
            </GeneralTemplate>
        )
    };
};

export default SignUp;