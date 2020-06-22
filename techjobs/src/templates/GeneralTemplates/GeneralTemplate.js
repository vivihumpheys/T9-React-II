import React from "react";
import "./generalTemplate.css";
import { ReactComponent as Logo } from "../../images/logo.svg";

//ao usar o nome dentro do parametro da função, voce dispensa a necessidade de usar props.nome
//uda children que será a modificação do conteudo que vem após a nav, passando cada pagina
const GeneralTemplate = ({children}) => {
  return (
    <div className="generalTemplate--container">
      <nav>
        <div>
          <a href="/">
            <Logo />
          </a>
          <ul>
            <a href='/'>
              <li>Home</li>
            </a>

            <a href='/login'>
              <li>Entrar</li>
            </a>

            <a href='/cadastro'>
              <li>Cadastro</li>
            </a>
          </ul>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default GeneralTemplate;
