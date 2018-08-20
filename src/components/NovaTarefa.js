
import React from 'react';
import { View , Text, StyleSheet } from 'react-native';

import CampoTarefa from './CampoTarefa';
import ActionButton from './ActionButton';

const NovaTarefa = (props) => {
  return (
    <View>
      <CampoTarefa 
        value={props.value} 
        onChangeText={props.onChangeText}
        error={!!props.error}
      />
      <ActionButton content="+" onPress={props.onTarefaAdd}/>
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

