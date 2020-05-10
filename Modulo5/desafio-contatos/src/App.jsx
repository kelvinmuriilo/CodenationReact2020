import React from 'react';

import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import { 
  orderByName,
  orderByPais,
  orderByEmpresa,
  orderByDepartamento,
  orderByDataAdmissao,
  filtrarPorValor
} from './utils/index';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listaContatos: [],
      listaContatosFiltrada: [],
      loading: true
    };
  }

  async componentDidMount(){
		this.fetchContatos();
  }

	fetchContatos(){
		fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
		.then((res) => res.json())
		.then((res) =>  { 
			this.setState({listaContatos: res, loading: false})
		});      
  }

  handleClick(event){
    event.preventDefault();
    let listaOrdenada;
    switch(event.target.id){
      case('name'):
      listaOrdenada = orderByName(this.state.listaContatos)
        this.setState({listaContatosFiltrada: listaOrdenada});
        break;
      case('pais'):
        listaOrdenada = orderByPais(this.state.listaContatos);
        this.setState({listaContatosFiltrada: listaOrdenada});
        break;
      case('empresa'): 
        listaOrdenada = orderByEmpresa(this.state.listaContatos);
        this.setState({listaContatosFiltrada: listaOrdenada});
        break;
      case('departamento'):
        listaOrdenada = orderByDepartamento(this.state.listaContatos);
        this.setState({listaContatosFiltrada: listaOrdenada});
        break;
      case('data'):
        listaOrdenada = orderByDataAdmissao(this.state.listaContatos);
        this.setState({listaContatosFiltrada: listaOrdenada});
        break;
        default:
         
    }
  }

  handleChangeInput(value){
    let lista = filtrarPorValor(this.state.listaContatos, value);
    this.setState({listaContatosFiltrada: lista})
  } 

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters
          handleChangeInput={event => this.handleChangeInput(event)} 
          handleClick={event => this.handleClick(event)}
        />
        <Contacts 
          contacts={this.state.listaContatos}
          contatosFiltrados={this.state.listaContatosFiltrada}
          loading={this.state.loading} 
        />
      </React.Fragment>
    );
  }
}

export default App;
