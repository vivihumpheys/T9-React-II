import React, { Component } from "react";
import GeneralTemplate from "../../templates/GeneralTemplates/GeneralTemplate";
import "./home.css";
import HomeContent from "../../components/organisms/HomeContent/HomeContent";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      //input vazio como estado inicial
      inputValue: "",
      //esse data é mutável
      data: [],
      //esses filtros já iniciam o estado assim, vai alterar é o array de dados quando clicamos neles
      filters: ['Todos', 'Front', 'Back', 'Design', 'Junior', 'Pleno', 'Senior'],
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

   onClick = async () => {
    console.log("onclick");
    const {inputValue} = this.state;
    const {data} = this.props //imutável, tem que puxar esse da props, e nao o data do estado, que é mutável e iria pesquisar a partir do filter;

    if (inputValue && data.length) {
      const result = await data.filter((item) =>
        item.position.toLowerCase().includes(inputValue.toLowerCase())
      );
      this.setState({ inputValue: "" });
      console.log({ result });
      this.setState({inputValue: '', data: result})
    } else {
      console.log("sem input ou sem dados");
    }
  };

  onChange = (e) => {
    console.log("onchange");
    const value = e.target.value;
    this.setState({ inputValue: value });
  };

  handleFilters = (e)=>{
    const {data} = this.props;
    const value = e.target.id.toLowerCase();
    const result = data.filter(item=>{
      switch(value) {
        case "todos":
          return item;
        default:
          return item.position.toLowerCase().includes(value);
      }
    });
    this.setState({data: result});
    console.log (value);
  };

  render() {
    console.log("o render foi chamado");
    //está referenciando que o data e o inputValue sao propriedades que pertencem ao state do Home, pra facilitar a sintaxe no return abaixo, quando chamar essas props
    const {inputValue, data, filters} = this.state;
    return (
      <GeneralTemplate>
        {/* aqui ele esta incluindo os filhos do general template, conteudos das paginas abaixo da nav */}
        <HomeContent
          titulo='TechJobs'
          texto="Buscar"
          onClick={this.onClick}
          type="text"
          placeholder="O que você busca?"
          value={inputValue}
          data={data}
          onChange={this.onChange}
          filters={filters}
          handleFilters={this.handleFilters}
        />
      </GeneralTemplate>
    );
  }
}

export default Home;
