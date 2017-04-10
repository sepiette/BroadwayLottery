import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS, StyleSheet } from 'react-native';
import { WelcomeScreen } from './components/welcome_screen';

export default class BroadwayLottery extends Component {
  render() {
    return (
      <NavigatorIOS 
      style = {styles.container}
      initialRoute = {{
          component: WelcomeScreen,
          title: 'Broadway Direct Lottery'}} />
    );
  }
}

AppRegistry.registerComponent('BroadwayLottery', () => BroadwayLottery);

const styles = StyleSheet.create ({
   container: {
    flex: 1, 
    backgroundColor: '#111111'
  }
});