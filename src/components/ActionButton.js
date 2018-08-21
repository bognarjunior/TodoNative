import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ActionButton = (props) => {
  return (
    <TouchableOpacity 
      disabled={props.loading}
      onPress={props.onPress}
      style={styles.touchable}
    >
      <Text>{props.loading ? '↻' : props.content}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 4,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActionButton;

/* Caracteres utilizados para o botão

✎ lower right pencil 023416 9998 0x270E ✎
✖ heavy multiplication x 023426 10006 0x2716 ✖
✔ heavy check mark 023424 10004 0x2714 ✔
⃠ combining enclosing circle backslash 020340 8416 0x20E0 ⃠

↻ clockwise open circle arrow (U+21BB) 
*/