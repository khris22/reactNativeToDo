import React, { Component } from 'react';
import Note from './Note';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    };
  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });

    return (
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.hText}> ~~ TO DO APP ~~</Text>
        </View>

        {/* BODY WEHRE YOUR LIST IS */}
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>

        {/* FOOTER */}
        {/* <KeyboardAvoidingView style={styles.footer}> */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder='ADD TASK HERE'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'></TextInput>
        </KeyboardAvoidingView>

        {/* Add Button */}
        <TouchableOpacity
          onPress={this.addNote.bind(this)}
          style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
  addNote() {
    // alert('test');
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        note: this.state.noteText,
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: '' });
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#a8e6cf',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: '#dcedc1',
    alignItems: 'center',
    // justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ffd3b6',
  },
  hText: {
    color: 'gray',
    fontSize: 20,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    flex: 1,
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
    color: '#fff',
    fontSize: 24,
  },
});

export default Main;
