import React, { Component } from "react";
import "./login.css";
import GeneralTemplate from "../../templates/GeneralTemplates/GeneralTemplate";
import LoginContent from "../../components/organisms/LoginContent/LoginContent";

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onFinish = (value) => {
    console.log("dados enviados", value);
    this.props.history.push('/');
  };

  render() {
    const {login, loggedUser} = this.props;

    return (
      <GeneralTemplate loggedUser={loggedUser}>
        <LoginContent titulo="Acesse sua conta" onFinish={this.onFinish} login ={login}/>
      </GeneralTemplate>
    );
  }
}

export default Login;
