import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, RefreshControl, FlatList, Dimensions } from 'react-native'
import { Card, Divider, Button, List, ListItem, Icon } from 'react-native-elements'
import Collapse from '../../components/collapsable-panel'

import colors from 'HSColors'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isRefreshing: false
    }
  }

  getRestaurants () {
    return require('../../service/data/restaurants.json')
  }

  _onRefresh () {
    this.setState({
      isRefreshing: true
    })
    setTimeout(() => {
      this.setState({
        isRefreshing: false
      })
    }, 1000)
  }

  onCollapseToggle () {
    
  }

  renderRow (restaurant) {
    return (
      <Card containerStyle={styles.car}
      imageStyle={{backgroundColor: '#ff3'}}
      >
        <View style={ styles.titleContainer }>
          <View>
            <Text style={{ color: '#fff', fontSize: 15, fontWeight: '700'}}>
                            预计取货时间
            </Text>
          </View>
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: '700'}}>
                        周五 9:00~11:00
          </Text>
        </View>
        <Divider />
          <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 10 }} >
          <Icon
            onPress={() => console.log('hello')}
            color={colors.primary}
            name="account-circle"
          />
          <Text style={{ flex: 2, color: colors.grey1 , paddingLeft: 8 }}>
            cyw026*****
          </Text>
          <Button
            containerViewStyle={{marginRight: 0}}
            buttonStyle={{padding: 0}}
            backgroundColor='transparent'
            color={colors.primary}
            iconRight
            icon={{ name: 'place', color: colors.primary }}
            title="1.1km"
            fontSize={Number(14)}
            onPress={this.toggle}
          />
        </View> 
        <Divider style={{ height: 4 }}/>
        <View style={{paddingLeft: 10, paddingRight: 10}}>
          <Collapse onToggle = {() =>
            this.onCollapseToggle()
          }
          expanded={true}
          title='商品'
          >
          <List containerStyle={styles.listContainer}>
              {
                restaurant.goods.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    titleStyle={styles.listItemTitle}
                    leftIcon={{name: item.icon, color: item.color}}
                    hideChevron={true}
                    containerStyle={{marginBottom: 0, marginTop: 0, borderTopWidth: 0, borderBottomWidth: 0, marginLeft: 0}}
                  />
                ))
              }
            </List>

          </Collapse>
          <Divider />
          <List containerStyle={styles.listContainer}>
            <ListItem
              title="支付方式"
              leftIcon={{}}
              rightTitle="现金支付"
              rightIcon={{}}
              hideChevron={true}
              containerStyle={styles.ListItemContainer}
            />
            <Divider />
            <ListItem
              title="下单时间"
              leftIcon={{}}
              rightTitle="08-08 11:00"
              rightIcon={{}}
              hideChevron={true}
              containerStyle={styles.ListItemContainer}
            />
            <Divider />
            <ListItem
              leftIcon={{}}
              subtitle="订单号码: 83988728376878762"
              rightIcon={{}}
              hideChevron={true}
              containerStyle={styles.ListItemContainer}
            />
          </List>
        </View>
        {/* <Divider /> */}
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Button
            backgroundColor='#EDEEEF'
            color='#000000'
            containerViewStyle={{ flex: 1, borderRadius: 5 }}
            buttonStyle={{ borderRadius: 5 }}
            title='取消订单' />
          <Button
            backgroundColor='#03A9F4'
            containerViewStyle={{ flex: 1, borderRadius: 5 }}
            buttonStyle={{ borderRadius: 5 }}
            title='接单' />
        </View>
      </Card>
    )
  }
  render () {
    return (
      <ScrollView style={styles.screen}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={ () => this._onRefresh()}
            tintColor="#ddd" />}
      >
        <FlatList
          data={this.getRestaurants()}
          keyExtractor={(item, index) => item.name}
          renderItem={({ item }) => this.renderRow(item)}
        />
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  screen: {
    backgroundColor: '#EFF0F1'
  },
  car: {
    borderRadius: 10,
    borderWidth: 0,
    borderTopWidth: 0,
    borderTopColor: '#03A9F4',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    overflow: 'hidden'
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    padding: 15,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 0
  },
  listContainer: {
    marginBottom: 0,
    marginTop: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  ListItemContainer: {
    marginBottom: 0,
    marginTop: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginLeft: 0
  },
  listItemTitle: {
    color: colors.grey3,
    fontSize: 14
  },
  pick_up: {
    color: '#FA8C98',
    borderRadius: 10,
    borderColor: '#FA8C98',
    borderWidth: 1,
    textAlign: 'center',
    padding: 1,
    marginTop: 8
  }
})

export default HomePage
