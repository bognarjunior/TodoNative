import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import ListaTarefas from './src/components/ListaTarefas';
import { fetchTodos } from './src/api';

export default class App extends Component {
  state = {
    tarefas: null,
    isFetching: false,
  }

  componentDidMount() {
    this.setState({
      isFetching: true
    }, () => {
      fetchTodos()
      .then( tarefas => {
        this.setState({
          tarefas,
          isFetching: false
        });
      }).catch((err) => {
        console.log('erro', err);
      });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title='Tarefas'/>
        <View style={styles.main}>
          <ListaTarefas tarefas={this.state.tarefas}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  main: {
    flex: 1,
    padding: 10,
  }
});
