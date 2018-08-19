import React from 'react';
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const CampoTarefa = (props) => {
  return (
    <View>
      <TextInput 
        style={styles.textInput}
        value={props.value}
        onChangeText={props.onChangeText}
      />
      <TouchableOpacity onPress={props.onTarefaAdd}>
      <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 4,
    padding: 6,
  },
});

export default CampoTarefa;