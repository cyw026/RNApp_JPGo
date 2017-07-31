
import React, { Component } from 'react';
import { View, Text, Image, FlatList, ScrollView, StyleSheet } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';


class orderList extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  getRestaurants() {
    return require('../../service/data/restaurants.json');
  }

  renderRow(restaurant) {
    return (
      <Card
        containerStyle={styles.car}
        title="HELLO WORLD Test"
      >
        <Image
          style={styles.icon}
          resizeMode={Image.resizeMode.cover}
          source={require('../../assets/avatar.jpg')}
        />
        <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          title="VIEW NOW"
        />
      </Card>
    );
  }

  render() {
    return (
      <ScrollView>
        <FlatList
          data={this.getRestaurants()}
          keyExtractor={(item, index) => item.name}
          renderItem={({ item }) => this.renderRow(item)}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 300,
    height: 150,
    resizeMode: 'cover',
  },
  car: {
    borderRadius: 10,
    borderWidth: 0,
    borderColor: '#fff',
  },
});
export default orderList;
