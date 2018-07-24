import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import QueuedOrders from './QueuedOrders'

export default class Cart extends Component {
  static propTypes = {
    // items: PropTypes.array.isRequired,
    // onItemPress: PropTypes.func.isRequired,
  }

  constructor(props) {
    super();

    this.state = {
      order: [],
    };
  }

  componentDidMount = () => {

    axios.get(`https://capstone-backend-java-spark.herokuapp.com/queue/PAID`)
      .then( (response) => {

        let orderHash = {};
        let itemList = response.data;
        for (let i = 0; i < itemList.length; i++) {
          if (typeof orderHash[itemList[i].order_id] === "undefined") {
            orderHash[itemList[i].order_id] = [];
          }
          orderHash[itemList[i].order_id].push(itemList[i]);
        }

        console.log(JSON.stringify(orderHash));

        this.setState({order: orderHash});
    })
      .catch( (error) => {
        console.log(error);
    });
  }

  renderOrderItems = () => {
    let parent = this;
    let orderList = [];
    Object.keys(this.state.order).forEach((order_id) => {
      let item = this.state.order[order_id];
      orderList.push(
        <QueuedOrders
          key={order_id}
          status={item[0].status}
          order_id={parseInt(order_id)}
          order={this.state.order[order_id]}
          />
      );
    });
    console.log(orderList);
    return orderList;
  }

  render() {

    const takeOrder = () => {
        axios.put( `https://capstone-backend-java-spark.herokuapp.com/order/${this.state.orderId}`, {
          orderId: this.state.orderId,
          customer_id: this.state.customer_id,
          company_id: this.state.company_id,
          status: 'PREP'})
          .then((response) => {
            this.setState({order: response.data});
            console.log("ORDER BEING PREPARED");
            console.log(response.data);
        })
          .catch( (error) => {
            console.log(error);
        });

      };

    return (
      <View style={styles.container}>
        <View style={styles.itemsContainer}>
          {this.renderOrderItems()}
        </View>
        <TouchableOpacity onPress={takeOrder}>
          <Text style={styles.button}>Prepare Order</Text>
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