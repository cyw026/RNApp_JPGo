
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Button, Icon } from 'react-native-elements'
import I18n from './i18n/i18n';

import HomeTab from './views/home/HomePage';
import OrderPage from './views/order/OrderPage';

import MyProfilePage from './views/myProfile/ProfilePage';
import LanguageSetting from './views/myProfile/LanguageSetting';
import LoginScreen from './views/login/LoginScreen';

import { useStrict } from 'mobx';
import { Provider, observer } from 'mobx-react/native';
useStrict(true);
import Store from './Store';


I18n.defaultLocale = 'zh-Hans';
I18n.locale = 'zh-Hans';
I18n.currentLocale();

const HomeScreen = TabNavigator(
  {
    HomeTab: {
      screen: HomeTab,
      path: '/home',
      navigationOptions: {
        title: '新订单',
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
        title: '订单管理',
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
            name="person"
            size={30}
            // type="font-awesome"
            color={tintColor}
          />
        ),
        header:null,
      },
    },
  },
  {
    initialRouteName: 'HomeTab',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#03A9F4',
    },
    navigationOptions: {
      headerStyle: {backgroundColor: '#03A9F4'},
      headerLeft:null
    }
  },
);

const MyApp = StackNavigator(
{
  LoginScreen: {
    screen: LoginScreen,
    path: '/login',
    navigationOptions: () => ({
      headerStyle: {backgroundColor: '#03A9F4'},
      headerTintColor: '#fff',
      headerLeft:null,
      header:null,
    }),
  },
  MainScene: {
    screen: HomeScreen,
    path: '/home',
    navigationOptions: () => ({
      headerStyle: {backgroundColor: '#03A9F4'},
      headerTintColor: '#fff',
    }),
  },
  LanguageSetting: {
    screen: LanguageSetting,
    path: '/profile/lang',
    navigationOptions: () => ({
      title: I18n.t('title_langSetting'),
      headerStyle: {backgroundColor: '#03A9F4'},
      headerTintColor: '#fff',
    }),
  },
},
{
  initialRouteName: 'MainScene',
})

@observer
class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <MyApp />
            </Provider>
        )
    }
}
export default App;
