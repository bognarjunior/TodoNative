import React, { Component } from 'react';
import { View } from 'react-native';
import Tarefa from './Tarefa';

export default class ListaTarefas extends Component {
  createTodo = () => this.props.tarefas.map(t => <Tarefa key={t}  tarefa={t}/> );
  render() {
    return (
      <View>
        {this.createTodo()}
      </View>
    )
  }
}