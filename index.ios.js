
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { AutofillForm } from './components/autofill_form';

export default class BroadwayLottery extends Component {
  render() {
    return (
      <AutofillForm />
    );
  }
}

AppRegistry.registerComponent('BroadwayLottery', () => BroadwayLottery);
