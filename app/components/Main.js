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
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.hText}> ~~ TO DO APP ~~</Text>
        </View>

        {/* BODY WEHRE YOUR LIST IS */}
        <ScrollView style={styles.scrollContainer}></ScrollView>

        {/* FOOTER */}
        <View style={styles.footer}>
          <TextInput
            style={style.textInput}
            placeholder='ADD TASK HERE'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'></TextInput>
        </View>
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
