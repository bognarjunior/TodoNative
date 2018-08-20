import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ActionButton = (props) => {
  return (
    <TouchableOpacity 
      onPress={props.onPress}
      style={styles.touchable}
      >
      <Text>{props.content}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 4,
    width: 23,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActionButton;