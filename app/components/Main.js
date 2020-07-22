import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TO DO APP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
  },
});

export default Main;
