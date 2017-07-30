import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet, Dimensions, Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Card, Divider, Button, Icon } from 'react-native-elements'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { Tabs, WhiteSpace, Badge, } from 'antd-mobile'
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view'

import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const TabPane = Tabs.TabPane

class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      const { navigation } = this.props;
        return (
                  <View style={styles.screen}>
                    <View style={styles.hero}>
                      <Icon color="white" name="whatshot" size={62} type="material" />
                      <Text style={styles.heading}>Buttons&Icons</Text>
                    </View>
                  <FormLabel />
                  <FormLabel>手机号码</FormLabel>
                  <FormInput />
                  <FormValidationMessage></FormValidationMessage>
                  
                  <FormLabel>登录密码</FormLabel>
                  <FormInput />
                  <FormValidationMessage></FormValidationMessage>
                  <Button
                    buttonStyle={styles.button}
                    backgroundColor={colors.primary}
                    icon={{ name: 'account', type: 'material-community' }}
                    onPress={() =>
                      navigation.navigate('MainScene')}
                    title="登录"
                  />
                  </View>
        );
    }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    height: SCREEN_HEIGHT
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  button: {
    marginTop: 15,
    borderRadius: 5,
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary,
  },
  titleContainer: {},
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

export default LoginScreen
