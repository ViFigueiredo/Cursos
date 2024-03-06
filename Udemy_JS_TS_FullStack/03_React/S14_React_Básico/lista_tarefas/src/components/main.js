/* Componente com estado */

import React, { Component } from 'react';
import Form from './Form';
import Tarefas from './Tarefas';
import './Main.css';

export default class Main extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     novaTarefa: '',
  //   }

  //   this.handleChange = this.handleChange.bind(this);
  // }

  /* class fields */
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  // handleChange(e) {
  //   this.setState({
  //     novaTarefa: e.target.value,
  //   });
  // }

  // renderiza um componente após alguma alteração o DOM
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (!tarefas) return;
    this.setState({ tarefas });
  }

  // Use isto para alterar o DOM quando o componente for atualizado
  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state.novaTarefa);

    // captura e loga o estado anterior do componente
    // console.log(prevState.novaTarefa);

    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;
    // console.log('As tarefas mudaram.', tarefas);

    // salva a atualização do componente no localstorage
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    // cria tarefa
    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else { // edita tarefa
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],

    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">

        <h1> Lista de Tarefas </h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tarefas={tarefas}
        />

      </div>
    );
  }
}
