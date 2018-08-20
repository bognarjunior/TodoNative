import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

import CampoTarefa from './CampoTarefa';
import ActionButton from './ActionButton';

export default class Tarefa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editando: false,
      tarefaEditada: this.props.tarefa.texto,
      tarefaErro: null
    }
  }
  
  onEditPress = () => this.setState({ 
    tarefaEditada: this.props.tarefa.texto,
    tarefaErro: null,
    editando: true
   });

  onCancelPress = () => this.setState({ editando: false });

  onTarefaChange = (texto) => this.setState({ tarefaEditada: texto });

  onUpdatePress = (texto) => {
    if (this.state.tarefaEditada > 0) {
      this.setState({
        tarefaErro: null
      }, () => {
        this.props.onTarefaUpdate({
          id: this.props.tarefa.id,
          texto: this.state.tarefaEditada
        })
        .then( tarefa =>
          this.setState({
            editando: false
          })
        )
        .catch(error => this.setState({
          tarefaNovaErro: `Fala ao atualizar a tarefa: ${error.message}`
        }));
      });
    } else {
      this.setState({
        tarefaErro: 'A tarefa não pode ser vazia'
      })
    }
    
  };

  render() {
    if (this.state.editando) {
      return (
        <View style={styles.containerTarefa}>
        <View style={{ flex: 3}}>
          <CampoTarefa 
            value={this.state.tarefaEditada} 
            onChangeText={this.onTarefaChange}
            error={!!this.state.tarefaErro}
          />
          </View>
          <View style={styles.buttons}>
            <ActionButton content="✔" onPress={this.onUpdatePress}/>
            <ActionButton content="⃠" onPress={this.onCancelPress}/>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.containerTarefa}>
        <View style={{ flex: 3}}>
          <Text style={styles.labelTarefa}>{this.props.tarefa.texto}</Text>
        </View>
        <View style={styles.buttons}>
          <ActionButton content="✎" onPress={this.onEditPress }/>
          <ActionButton content="✖" onPress={() => null }/>
        </View>
        {
          this.state.tarefaErro ? 
          <View>
            <Text style={{ color: '#ff0000' }}>{this.state.tarefaErro}</Text>
          </View> : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerTarefa: {
    marginBottom: 6,
    flexDirection: 'row',
  },
  labelTarefa: {
    fontSize: 16,
  },
  buttons: { flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})