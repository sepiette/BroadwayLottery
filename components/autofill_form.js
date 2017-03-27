import React, { Component } from 'react';
import {AsyncStorage, StyleSheet, Text, Button, TextInput, ScrollView, View} from 'react-native';

export class AutofillForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      ticketNum: '1',
      zipCode: ''
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
          <TextInput style={styles.textInput} placeholder="Email Address"
            onChangeText={(text) => this.setState({email: text})}/>
          <Text style={styles.text}> Date of Birth </Text>
          <View style={styles.dateContainer}>
            <TextInput style={styles.date} placeholder="DD"
            onChangeText={(text) => this.setState({dob: text})}/>
            <TextInput style={styles.date} placeholder="MM"
            onChangeText={(text) => this.setState({dob: text})}/>
            <TextInput style={styles.date} placeholder="YYYY"
            onChangeText={(text) => this.setState({dob: text})}/>
          </View>

          <TextInput style={styles.textInput} placeholder="Number of Tickets"
            onChangeText={(text) => this.setState({ticketNum: text})}/>
          <TextInput style={styles.textInput} placeholder="Zip Code"
            onChangeText={(text) => this.setState({zipCode: text})}/>

            <View style={styles.submitButton}>
              <Button color='#fff' onPress={this._saveAutofillData} title="Save Info" accessibilityLabel="Save autofill data" />
            </View>
        </ScrollView>
      </View>
    );

    _saveAutofillData = async (values) => {

    }
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
    marginTop: 10,
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
  },
  dateContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  date: {
    width: 75,
    height: 40,
    backgroundColor: '#fff',
    marginRight: 10,
    marginTop: 10, 
    textAlign: 'center',
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1
  },

  submitButton: {
    height: 40,
    width: 250,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#123652',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },

});