import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, ScrollView, View} from 'react-native';

export class AutofillForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  render() {

    return (
      <View style ={styles.container}>
        <View>
          <Text style={styles.header}> Broadway Direct Lottery </Text>
          <Text style={styles.text}> Hello {this.state.firstName} {this.state.lastName} </Text>
        </View>
        <ScrollView style={styles.formContainer}>
           <TextInput style={styles.textInput} placeholder="First Name"
            onChangeText={(text) => this.setState({firstName: text})}/>
            <TextInput style={styles.textInput} placeholder="Last Name"
            onChangeText={(text) => this.setState({lastName: text})}/>
        </ScrollView>
      </View>
      
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    paddingTop:20
  },
  
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    padding: 20,
    borderBottomWidth: 5,
    borderBottomColor: '#ccc'
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue'
  },

  formContainer: {
    width:300,
    alignSelf: 'center',
    paddingTop:20
  },

  textInput: {
    color: '#000',
    alignSelf: 'center',
    width: 250,
    height: 40,
    paddingLeft: 20,
    marginTop: 15,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1
  }

});