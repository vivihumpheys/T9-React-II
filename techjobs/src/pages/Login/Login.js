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
  };

  render() {
    return (
      <GeneralTemplate>
        <LoginContent titulo="Acesse sua conta" onFinish={this.onFinish} />
      </GeneralTemplate>
    );
  }
}

export default Login;
