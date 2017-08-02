/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import App from './app/App';

import {
  AppRegistry
} from 'react-native';

export default class RNApp_JPGo extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('RNApp_JPGo', () => RNApp_JPGo);
