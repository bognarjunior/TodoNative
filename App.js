import React, {Component} from 'react';
import { StyleSheet, View, Text, Button, ScrollView} from 'react-native';
import Header from './src/components/Header';
import ListaTarefas from './src/components/ListaTarefas';
import { fetchTodos, createTarefa } from './src/api';
import CampoTarefa from './src/components/CampoTarefa';

class App extends Component {
  state = {
    tarefas: null,
    isFetching: false,
    tarefasErro: null,
    tarefaNova: '',
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ 
      isFetching: true, 
      tarefasErro: null }, 
      () => {
        this.props.fetchTodos()
          .then(tarefas => {
            this.setState({
              tarefas,
              isFetching: false
            });
          })
          .catch(error => {
            this.setState({
              tarefasErro: `Houve um erro ao consultar as tarefas: ${error.message}`
            });
          });
      }
    );
  }

  onReloadPress = () => {
    this.fetchData();
  }

  onTarefaChange = (text) => {
    this.setState({
      tarefaNova: text
    });
  }

  onTarefaAdd = () => {
    this.props.createTarefa({
      texto: this.state.tarefaNova
    })
    .then(
      tarefa => this.setState({
        tarefas: this.state.tarefas.concat(tarefa),
        tarefaNova: ''
      })
    );
  }

  rederListaTarefas() {
    if(this.state.tarefasErro) {
      return (
        <View>
          <Text style={{ color: '#ff0000' }}>{this.state.tarefasErro}</Text>
          <Button
            onPress={this.onReloadPress}
            title="Tentar Novamente"
          />
        </View>
      );
    }
    if(this.state.tarefas) {
      return <ListaTarefas tarefas={this.state.tarefas}/>
    }
    return <Text>Carregando tarefas...</Text>
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title='Tarefas'/>
        <ScrollView>
          <View style={styles.main}>
            <CampoTarefa 
              value={this.state.tarefaNova} 
              onChangeText={this.onTarefaChange} 
              onTarefaAdd={this.onTarefaAdd}
            />
            {this.rederListaTarefas()}
          </View>
        </ScrollView>
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

export default  (props) => 
  <App 
    {...props} 
    fetchTodos={fetchTodos} 
    createTarefa={createTarefa}
  />;