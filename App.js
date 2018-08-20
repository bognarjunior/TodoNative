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
    tarefaNovaErro: null
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
    if (this.state.tarefaNova.length > 0) {
      this.setState({
        tarefaNovaErro: null
      }, () => {
        this.props.createTarefa({
          texto: this.state.tarefaNova
        })
        .then(
          tarefa => this.setState({
            tarefas: this.state.tarefas.concat(tarefa),
            tarefaNova: ''
          })
        )
        .catch(error => this.setState({
          tarefaNovaErro: `Fala ao criar uma nova tarefa: ${error.message}`
        }));
      })
    } else {
      this.setState({
        tarefaNovaErro: 'Digite ao menos um caractere para inserir uma nova tarefa'
      })
    }
    
  }

  rederListaTarefas() {
    if(this.state.tarefasErro) {
      return (
        <View>
          <Text style={styles.errorMessage}>{this.state.tarefasErro}</Text>
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
              error={!!this.state.tarefaNovaErro}
            />
            {
              this.state.tarefaNovaErro ?
              <Text style={styles.errorMessage}>{this.state.tarefaNovaErro}</Text> :
              null
            }
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
  },
  errorMessage: {
    color: '#ff0000'
  }
});

export default  (props) => 
  <App 
    {...props} 
    fetchTodos={fetchTodos} 
    createTarefa={createTarefa}
  />;