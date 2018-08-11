import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default (props) => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textHeader}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 40
  },
  textHeader: {
    fontWeight: 'bold', 
    fontSize: 16
  }
})