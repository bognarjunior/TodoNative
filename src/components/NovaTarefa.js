
import React from 'react';
import { View , Text, StyleSheet } from 'react-native';

import CampoTarefa from './CampoTarefa';
import ActionButton from './ActionButton';

const NovaTarefa = (props) => {
  return (
    <View>
      <View style={styles.row}>
        <View style={{ flex: 7}}>
          <CampoTarefa 
            value={props.value} 
            onChangeText={props.onChangeText}
            error={!!props.error}
          />
        </View>
        <View style={styles.button}>
          <ActionButton content="+" onPress={props.onTarefaAdd}/>
        </View>
      </View>
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
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default NovaTarefa;

