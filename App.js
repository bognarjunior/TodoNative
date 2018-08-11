import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './src/components/Header'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title='Tarefas'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
