import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import MenuItem from './MenuItem';

export default class Menu extends Component {
  static propTypes = {
    // items: PropTypes.array.isRequired,
    // onItemPress: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      menu: [],
      orderId: null,
      numInCart: null
    };
  }

  componentDidMount = () => {
    axios.get('https://capstone-backend-java-spark.herokuapp.com/menu')
      .then( (response) => {
        this.setState({menu: response.data});
    })
      .catch( (error) => {
        console.log(error);
    });
  }

   createNewOrder = () => {
    return axios.post('https://capstone-backend-java-spark.herokuapp.com/order', {status: 'pending', customer_id: '1'})
      .then((response) => {
        console.log(response);
        this.setState({orderId:response.data[0].order_id});
    })
      .catch( (error) => {
        console.log(error);
    });
  }

  renderMenuItems = () => {
    let parent = this;
    const menuList = this.state.menu.map((item, index) => {
      return (
        <MenuItem
          key={index}
          itemName={item.name}
          description={item.description}
          menu_id={item.menu_id}
          menu_item_id={item.menu_item_id}
          price={item.price}
          img={item.img}
          quantity={item.quantity}
          menu={parent}
          add={()=>{}}
          />
      );
    });
    return menuList;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemsContainer}>
          {this.renderMenuItems()}
        </View>
        <TouchableOpacity onPress={Actions.cart}>
          <Text style={styles.button}>View Cart</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

});
