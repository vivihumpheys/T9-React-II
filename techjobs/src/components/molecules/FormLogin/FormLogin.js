import React from "react";
import "./formLogin.css";
import 'antd/dist/antd.css';
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';



const FormLogin = ({onFinish, login}) => {
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Campo obrigatório. Por favor, insira seu nome de usuário!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Usuário"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Campo obrigatório. Por favor, insira sua senha!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Senha"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={login}>
          Entrar
        </Button>
        Ou <Link to= '/signup'>Cadastre-se</Link>
        
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
