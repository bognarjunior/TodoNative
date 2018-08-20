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
  
  onEditPress = () => this.setState({ editando: true });

  onTarefaChange = (texto) => this.setState({ tarefaEditada: texto });

  render() {
    if (this.state.editando) {
      return (
        <View style={styles.containerTarefa}>
          <CampoTarefa 
            value={this.state.tarefaEditada} 
            onChangeText={this.onTarefaChange}
            error={!!this.state.tarefaErro}
          />
          <ActionButton content="✎" onPress={this.onEditPress}/>
          <ActionButton content="✖" onPress={() => null }/>
        </View>
      );
    }
    return (
      <View style={styles.containerTarefa}>
        <Text style={styles.labelTarefa}>{this.props.tarefa.texto}</Text>
        <ActionButton content="✎" onPress={() => null }/>
        <ActionButton content="✖" onPress={() => null }/>
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
  }
})