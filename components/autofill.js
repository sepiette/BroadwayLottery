import React, { Component } from 'react';
import {AsyncStorage, StyleSheet, Text, Button, TextInput, ScrollView, View} from 'react-native';

export class Autofill extends Component {
  constructor(props) {
    super(props);
    console.log('construct');
  
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      birthDay: '',
      birthMonth: '',
      birthYear: '',
      ticketNum: '1',
      country: '2',
      zipCode: ''
    };
  }

  componentDidMount(){
    console.log('did mount');
    this._loadInitialState().done();
  }

  _loadInitialState = async() => {
    let autofill_data = {};
    await AsyncStorage.getItem('autofill_data').then((data) => {
      autofill_data = JSON.parse(data);
      console.log(autofill_data);
      if(autofill_data !== null){
        this.setState({firstName: autofill_data.firstName});
        this.setState({lastName: autofill_data.lastName});
        this.setState({email: autofill_data.email});
        this.setState({birthDay: autofill_data.birthDay});
        this.setState({birthMonth: autofill_data.birthMonth});
        this.setState({birthYear: autofill_data.birthYear});
        this.setState({ticketNum: autofill_data.ticketNum});
        this.setState({zipCode: autofill_data.zipCode});
        this.setState({country: autofill_data.country});
        console.log(this.state);
      }
      else {
        console.log('failed to load');
      }
      
    });
    
  }

  _saveData = async() => {
    let data = JSON.stringify(this.state);
    console.log(data);
    AsyncStorage.setItem('autofill_data', data);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.formContainer}>
           <TextInput style={styles.textInput} placeholder="First Name" value={this.state.firstName}
           onChangeText={(text) => {
            this.setState({firstName: text});
          }}/>
           <TextInput style={styles.textInput} placeholder="Last Name" value={this.state.lastName}
            onChangeText={(text) => {
              this.setState({lastName: text});
            }}/>
           <TextInput style={styles.textInput} placeholder="Email Address" value={this.state.email}
            onChangeText={(text) => {
              this.setState({email: text});
            }}/>
          <Text style={styles.text}> Date of Birth </Text>

          <View style={styles.dateContainer}>
            <TextInput style={styles.date} placeholder="MM" maxLength={2} value={this.state.birthMonth}
            onChangeText={(month) => {
              this.setState({birthMonth: month});
            }} />

            <TextInput style={styles.date} placeholder="DD" maxLength={2} value={this.state.birthDay}
            onChangeText={(day) => {
              this.setState({birthDay: day});
            }} />

            <TextInput style={styles.date} placeholder="YYYY" maxLength={4} value={this.state.birthYear}
            onChangeText={(year) => {
              this.setState({birthYear: year});
            }} />
          </View>

          <TextInput style={styles.textInput} placeholder="Number of Tickets" value={this.state.ticketNum}
            onChangeText={(text) => {
              this.setState({ticketNum: text});
            }}/>
          <TextInput style={styles.textInput} placeholder="Zip Code"  value={this.state.zipCode}
            onChangeText={(text) => {
              this.setState({zipCode: text});
            }}/>
            <View style={styles.submitButton}>
              <Button color='#fff' onPress={this._saveData} title="Save Info" accessibilityLabel="Save autofill data" />
            </View>
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
    paddingTop:40
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
  }

});