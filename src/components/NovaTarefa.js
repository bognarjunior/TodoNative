
import React from 'react';
import { View , Text, StyleSheet, TouchableOpacity } from 'react-native';

import CampoTarefa from './CampoTarefa';

const NovaTarefa = (props) => {
  return (
    <View>
      <CampoTarefa 
        value={props.value} 
        onChangeText={props.onChangeText}
        error={!!props.error}
      />
      <TouchableOpacity onPress={props.onTarefaAdd}>
        <Text>+</Text>
      </TouchableOpacity>
      {
        !!props.error ?
        <Text style={styles.errorMessage}>{props.error}</Text> :
        null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  errorMessage: {
    color: '#ff0000'
  }
});

export default NovaTarefa;

