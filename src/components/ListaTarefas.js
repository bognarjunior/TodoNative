import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
  },
})