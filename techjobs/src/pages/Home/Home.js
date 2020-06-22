import React, { Component } from "react";
import GeneralTemplate from "../../templates/GeneralTemplates/GeneralTemplate";
import "./home.css";
import HomeContent from '../../components/organisms/HomeContent/HomeContent';

class Home extends Component {
  constructor() {
    super();
    this.state = {
        inputValue: ""
    };
  };

  onClick = () =>{
      console.log('onclick');
  }

  onChange = () => {
      console.log ('onchange');
  }

  render() {
    return (
      <GeneralTemplate>
       {/* aqui ele esta incluindo os filhos do general template, conteudos das paginas abaixo da nav */}
       <HomeContent 
       texto='Buscar'
       onClick={this.onClick}
       type='text'
       placeholder='O que você busca?'
       value= {this.state.value}
       onChange={this.onChange}
       />
      </GeneralTemplate>
    );
  }
}

export default Home;
