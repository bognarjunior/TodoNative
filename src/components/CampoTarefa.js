import React from 'react';
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const CampoTarefa = (props) => {
  let textInputStyle = [styles.textInput];

  if (props.error) {
    textInputStyle.push(styles.error);
  }

  return (
    <View>
      <TextInput 
        style={textInputStyle}
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
  error: {
    borderColor: '#ff9999',
  }
});

export default CampoTarefa;