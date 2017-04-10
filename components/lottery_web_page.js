import React, { Component } from 'react';
import { WebView } from 'react-native';

export class LotteryWebView extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://lottery.broadwaydirect.com/'}}
        style={{marginTop: 40}}
      />
    );
  }
}
