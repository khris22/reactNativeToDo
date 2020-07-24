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
            style={styles.textInput}
            placeholder='ADD TASK HERE'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'></TextInput>
        </View>

        {/* Add Button */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8e6cf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#dcedc1',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ffd3b6',
  },
  hText: {
    color: 'white',
    fontSize: 20,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#ff8b94',
    borderTopWidth: 2,
    borderTopColor: '#ffaaa5',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#29a8ab',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#5e5656',
    fontSize: 24,
  },
});

export default Main;
