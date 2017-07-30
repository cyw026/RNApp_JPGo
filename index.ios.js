/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import I18n from './app/i18n/i18n';

import App from './app/views/App';

I18n.defaultLocale = "zh_CN";
I18n.locale = "zh_CN";

// I18n.currentLocale();

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

I18n.fallbacks = true

I18n.translations = {
  zh_CN: {
    greeting: 'local {I18n.currentLocale()}'
  },
  fr: {
    greeting: 'Bonjour!'
  }
}

// class RNApp_JPGo extends React.Component {
//   render () {
//     return (
//       <mainScene />
//     )
//   }
// }
// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
AppRegistry.registerComponent('RNApp_JPGo', () => App);
