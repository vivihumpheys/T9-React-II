import React from "react";
import "./generalTemplate.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { Link } from "react-router-dom";

//ao usar o nome dentro do parametro da função, voce dispensa a necessidade de usar props.nome
//uda children que será a modificação do conteudo que vem após a nav, passando cada pagina
const GeneralTemplate = ({ children, loggedUser, logout }) => {
  return (
    <div className="generalTemplate--container">
      <nav>
        <div>
          <Link to="/">
            <Logo />
          </Link>
          <ul>
            {loggedUser ? (
              <React.Fragment>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/" onClick={logout}>
                  <li>Sair</li>
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="/">
                  <li>Home</li>
                </Link>

                <Link to="/login">
                  <li>Entrar</li>
                </Link>

                <Link to="/signup">
                  <li>Cadastro</li>
                </Link>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default GeneralTemplate;
