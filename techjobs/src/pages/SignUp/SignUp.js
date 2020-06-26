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
        console.log ('dados cadastrados', value);
        this.props.history.push('/');
    };

    render(){
        const {login, loggedUser} = this.props;
        return(
            <GeneralTemplate loggedUser={loggedUser}>
                <SignUpContent texto='Crie uma conta' onFinish={this.onFinish} login={login}/>
            </GeneralTemplate>
        )
    };
};

export default SignUp;