import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import OrderItems from './OrderItems'

export default class Cart extends Component {
  static propTypes = {
    // items: PropTypes.array.isRequired,
    // onItemPress: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      menu: [],
    };
  }

  componentDidMount = () => {
    axios.get('https://capstone-backend-java-spark.herokuapp.com/order')
      .then( (response) => {
        this.setState({menu: response.data});
    })
      .catch( (error) => {
        console.log(error);
    });
  }

  renderOrderItems = () => {
    let parent = this;
    const menuList = this.state.menu.map((item, index) => {
      return (
        <OrderItem
          key={index}
          itemName={item.name}
          menu_id={item.menu_id}
          menu_item_id={item.menu_item_id}
          price={item.price}
          quantity={item.quantity}
          menu={parent}
          />
      );
    });
    return menuList;
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.itemsContainer}>
          {this.renderOrdertems()}
        </View>
        <TouchableOpacity onPress={() => Actions.customerMenu()}>
          <Text style={styles.button}>Complete Order</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    margin: 10,
    padding: 30,
  },
    itemsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 30,
    fontSize: 20,
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
  }
});
