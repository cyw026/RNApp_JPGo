
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Button, Icon } from 'react-native-elements'

import HomeTab from './home/HomePage';
import OrderPage from './order/OrderPage';
import MyProfilePage from './myProfile/ProfilePage';

import LoginScreen from './login/LoginScreen';

// import HomePage from './home/HomePage';
// import OrderPage from './order/OrderPage';
// import MyProfilePage from './home/HomePage';

const HomeScreen = TabNavigator(
  {
    HomeTab: {
      screen: HomeTab,
      path: '/home',
      navigationOptions: {
        tabBarLabel: '新订单',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },
    ListsTab: {
      screen: OrderPage,
      path: '/order',
      navigationOptions: {
        tabBarLabel: '订单管理',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="list" size={30} type="entypo" color={tintColor} />
        ),
      },
    },
    FormsTab: {
      screen: MyProfilePage,
      path: '/profile',
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="wpforms"
            size={30}
            type="font-awesome"
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'FormsTab',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#03A9F4',
    },
    navigationOptions: {
      headerStyle: {backgroundColor: '#03A9F4'},
    }
  },
);

class Profile extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    // const { navigation } = this.props
    // navigation.navigate('LoginScreen')
    return (
      <View></View>
    )
  }
}

const MyApp = StackNavigator(
{
  LoginScreen: {
    screen: LoginScreen,
    path: '/',
    navigationOptions: () => ({
      headerStyle: {backgroundColor: '#03A9F4'},
      headerTintColor: '#fff',
    }),
  },
  MainScene: {
    screen: HomeScreen,
    path: '/',
    navigationOptions: () => ({
      headerStyle: {backgroundColor: '#03A9F4'},
      headerTintColor: '#fff',
    }),
  }
},
{
  initialRouteName: 'LoginScreen',
})

export default MyApp;
