import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet, Dimensions, Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Card, Divider, Button, Icon } from 'react-native-elements'

import { Tabs, WhiteSpace, Badge, } from 'antd-mobile'
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view'

import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const TabPane = Tabs.TabPane

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                  <ScrollView style={styles.screen}>
                    <View style={styles.hero}>
                      <Icon color="white" name="whatshot" size={62} type="material" />
                      <Text style={styles.heading}>Buttons & Icons</Text>
                    </View>
                    <Card containerStyle={styles.car}>
                      <Text style={{textAlign: 'center'}}>今日共计
                        <Text style={{color: colors.primary}}>9</Text>
                          单，金额
                        <Text style={{color: colors.primary}}>134</Text>
                          元
                      </Text>
                    </Card>
                  </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary,
  },
  titleContainer: {},
  button: {
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black,
      },
    }),
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
// const ProfilePage = StackNavigator({
//   OrderList: {
//     screen: Profile,
//     path: '/',
//     navigationOptions: () => ({
//       title: '我的',
//       headerStyle: {backgroundColor: '#03A9F4'},
//       headerTintColor: '#fff',
//     }),
//   },
//   OrderDetail: {
//     screen: Profile,
//     path: '/',
//     navigationOptions: () => ({
//       title: '日购app'
//     })
//   },
// },{
//     // headerMode: 'none',
// })

export default Profile
