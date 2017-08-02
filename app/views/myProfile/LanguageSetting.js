import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet, Dimensions, Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Card, Divider, Button, Icon, List, ListItem, Avatar } from 'react-native-elements'

import { Tabs, WhiteSpace, Badge } from 'antd-mobile'
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view'

import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'


import I18n from '../../i18n/i18n';
import { getLanguages } from 'react-native-i18n'


// I18n.defaultLocale = "zh_CN";
// I18n.locale = "zh_CN";


const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const TabPane = Tabs.TabPane

const languages = [
  {
    value: 'zh_CN',
    label: '简体中文',
  },
  {
    value: 'zh-Hans',
    label: '繁体中文',
  },
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'zh_JP',
    label: 'にほんご',
  }
]

import { Radio } from 'antd-mobile';

const RadioItem = Radio.RadioItem;


class Profile extends Component {
  constructor(props) {
      super(props)
      this.state = { value: 'en' }
      // console.log('currentLocale:' + I18n.currentLocale())
  }


  onChange = (value) => {
      console.log('onChange:' + value);
      // I18n.defaultLocale = value;
      // I18n.locale = value;
      // I18n.currentLocale();

      this.setState(() =>{
          return {value: value}
      });
  };

  render () {
    const { navigation } = this.props
    const { value } = this.state;

    return (
      <View style={{height: SCREEN_HEIGHT}}>
        <ScrollView style={styles.scrollView}>

          <List containerStyle={{marginTop: 0}}>
            {
              languages.map((i) => (
                <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                  {i.label}
                 </RadioItem>
              ))
            }
          </List>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})


export default Profile
