import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Buttons from './landingPage';
import OrderList from './orderList';
import LoginScreen from '../login/LoginScreen';

import colors from 'HSColors'

// const HomePage = StackNavigator({
//   Main: {
//     screen: Buttons,
//     path: '/',
//     navigationOptions: () => ({
//       title: '新订单',
//       headerStyle: {backgroundColor: colors.primary},
//       headerTintColor: '#fff',
//     }),
//   },
//   OrderList: {
//     screen: OrderList,
//     path: '/',
//     navigationOptions: () => ({
//       title: 'New Order',
//     }),
//   },
//   LoginScreen: {
//     screen: LoginScreen,
//     path: '/',
//     navigationOptions: () => ({
//       title: 'New Order',
//     }),
//   },
// });

export default Buttons;
