import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import ListaTarefas from './src/components/ListaTarefas';

export default class App extends Component {
  render() {
    const tarefas = [
      {
        id: 'abdcs',
        texto: 'Lavar a moto'
      },
      {
        id: 'sdaef',
        texto: 'Lavar a louça'
      },
    ];
    return (
      <View style={styles.container}>
        <Header title='Tarefas'/>
        <ListaTarefas tarefas={tarefas}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
