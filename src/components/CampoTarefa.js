import React from 'react';
import { 
  View,
  TextInput,
  StyleSheet
} from 'react-native';

const CampoTarefa = (props) => {
  let textInputStyle = [styles.textInput];

  if (props.error) {
    textInputStyle.push(styles.error);
  }

  return (
    <View>
      <TextInput 
        maxLength={64}
        style={textInputStyle}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 4,
    padding: 6,
    borderColor: '#000000',
  },
  error: {
    borderColor: '#ff9999',
  }
});

export default CampoTarefa;