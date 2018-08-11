import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default class Tarefa extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.tarefa.texto}</Text>
      </View>
    )
  }
}
