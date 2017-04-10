import React, { Component } from 'react';
import { AutofillForm } from './autofill_form';
import { LotteryWebView } from './lottery_web_page';
import {StyleSheet, Text, Button, View} from 'react-native';

export class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  enterLottery() {
    const nextRoute = {
      component: LotteryWebView,
      title: 'Broadway Lottery'
    };
    this.props.navigator.push(nextRoute);
  }

  autofill(nextRoute) {
    this.props.navigator.push(nextRoute);
  }
  render() {
    const nextRoute = {
      component: AutofillForm,
      title: 'Autofill Preferences'
    };
    return (
      <View style={styles.welcomeContainer}>
        <Text style={styles.header}> Welcome! </Text>
        <View style = {styles.button}>
          <Button color='#fff' onPress={() => this.autofill(nextRoute)} title="Edit Autofill Info" accessibilityLabel="Save autofill data" />
        </View>
        <View style = {styles.button}>
          <Button color='#fff' onPress={() => this.enterLottery()} title="Enter Lottery" accessibilityLabel="Save autofill data" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#111',
    flexDirection: 'column', 
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop:40
  },
  header: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    padding: 20,
    borderBottomWidth: 5
  },
  button: {
    height: 40,
    width: 250,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#123652',
    borderWidth: 1,
    borderColor: '#123652',
    borderRadius: 5
  },
});
