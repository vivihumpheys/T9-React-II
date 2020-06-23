import React, { Component } from "react";
import GeneralTemplate from "../../templates/GeneralTemplates/GeneralTemplate";
import "./home.css";
import HomeContent from "../../components/organisms/HomeContent/HomeContent";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      data: [],
    };
  }

  //colocamos o async para função assíncrona, ela nao vai rodar na ordem direta de leitura, irá esperar o await completar a sua chamada, pra nao correr o risco do data.jason nao estar disponivel quando o componente estiver montado
  componentDidMount = async () => {
    console.log("o componente foi montado");
    //await para aguardar essa props do data.json ser carregada para substituir o estado inicial da classe
    const getData = await this.props.data;
    this.setState({ data: getData });
    console.log(this.state.data);
  };

  // componentDidUpdate = () => {
  //   if (this.state.inputValue === "") {
  //     this.setState({ inputValue: "oi" });
  //     console.log("o componente foi atualizado");
  //   }
  // };

  onClick = async () => {
    console.log("onclick");
    const { inputValue, data } = this.state;

    if (inputValue && data.length) {
      const result = await data.filter((item) =>
        item.position.toLowerCase().includes(inputValue.toLowerCase())
      );
      this.setState({ inputValue: "" });
      console.log({ result });
    } else {
      console.log("sem input ou sem dados");
    }
  };

  onChange = (e) => {
    console.log("onchange");
    const value = e.target.value;
    this.setState({ inputValue: value });
  };

  render() {
    console.log("o render foi chamado");
    //está referenciando que o data e o inputValue sao propriedades que pertencem ao state do Home, pra facilitar a sintaxe no return abaixo, quando chamar essas props
    const {inputValue, data} = this.state;
    return (
      <GeneralTemplate>
        {/* aqui ele esta incluindo os filhos do general template, conteudos das paginas abaixo da nav */}
        <HomeContent
          texto="Buscar"
          onClick={this.onClick}
          type="text"
          placeholder="O que você busca?"
          value={inputValue}
          data={data}
          onChange={this.onChange}
        />
      </GeneralTemplate>
    );
  }
}

export default Home;
