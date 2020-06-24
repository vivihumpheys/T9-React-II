import React, { Component } from "react";
import "./login.css";
import GeneralTemplate from "../../templates/GeneralTemplates/GeneralTemplate";
import LoginContent from "../../components/organisms/LoginContent/LoginContent";

class Login extends Component {
  render() {
    return(
    <GeneralTemplate>
        <LoginContent 
        titulo='Acesse sua conta'/>
    </GeneralTemplate>
    )
  }
}

export default Login;
