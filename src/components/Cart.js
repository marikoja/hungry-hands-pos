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
    super();

    this.state = {
      order: [],
      orderId: props.orderId,
      numInCart: props.numInCart
    };
  }

  componentDidMount = () => {
    axios.get(`https://capstone-backend-java-spark.herokuapp.com/order/${this.state.orderId}`)
      .then( (response) => {
        let orderItems = response.data;
        for (let a = 0; a < orderItems.length; a++) {
          orderItems[a].count = 1;
          for (let b = (a+1); b < orderItems.length; b++) {
            if (orderItems[a].menu_item_id === orderItems[b].menu_item_id) {
              orderItems[a].count++;
              orderItems.splice(b,1);
            }
          }
        }
        this.setState({order: orderItems});
        console.log("made it to the cart get request");
        console.log(JSON.stringify(orderItems));
    })
      .catch( (error) => {
        console.log(error);
    });
  }

  renderOrderItems = () => {
    let parent = this;
    console.log(parent);
    const orderList = this.state.order.map((item, index) => {
      return (
        <OrderItems
          key={index}
          order_menu_id={item.order_menu_id}
          menu_item_id={item.menu_item_id}
          count={item.quantity}
          order_id={item.order_id}
          itemName={item.name}
          price={item.price}
          order={parent}
          count={item.count}
          />
      );
    });
    return orderList;
  }

  render() {

    const orderSubmit = () => {
        axios.put( `https://capstone-backend-java-spark.herokuapp.com/order/${this.state.orderId}`, {
          orderId: this.state.orderId,
          customer_id: this.state.customer_id,
          company_id: this.state.company_id,
          status: 'PAID'})
          .then((response) => {
            this.setState({order: response.data});
            console.log("made it to the cart put request");
            console.log(response.data);
        })
          .catch( (error) => {
            console.log(error);
        });

        Actions.customerMenu();
        this.setState({orderId: null});
        this.setState({numInCart: null});

      };

    return (
      <View style={styles.container}>
        <View style={styles.itemsContainer}>
          {this.renderOrderItems()}
        </View>
        <TouchableOpacity onPress={orderSubmit}>
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
    borderWidth: 2,
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
