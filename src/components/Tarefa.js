import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default class Tarefa extends Component {
  render() {
    return (
      <View style={styles.containerTarefa}>
        <Text style={styles.labelTarefa}>{this.props.tarefa.texto}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerTarefa: {
    marginBottom: 6,
  },
  labelTarefa: {
    fontSize: 16,
  }
})