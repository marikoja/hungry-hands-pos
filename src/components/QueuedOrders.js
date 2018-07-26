import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export default class QueueItems extends Component {

  static propTypes = {
    order: PropTypes.array.isRequired
  }

  static propTypes = {
    order_id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,

  };

  constructor(props) {
    super(props);

    let orderItems = props.order;
    for (let a = 0; a < orderItems.length; a++) {
      orderItems[a].count = 1;
      for (let b = (a+1); b < orderItems.length; b++) {
        if (orderItems[a].menu_item_id === orderItems[b].menu_item_id) {
          orderItems[a].count++;
          orderItems.splice(b,1);
        }
      }
    }

    this.state = {
      order_id: props.order_id,
      status: props.status,
      order: orderItems,
    };
  }

  completeOrder = () => {
    Actions.refresh({key: Math.random()})

    axios.put( `https://capstone-backend-java-spark.herokuapp.com/order/${this.props.order_id}`, {
      status: 'COMPLETE'})
      .then((response) => {
        console.log("ORDER COMPLETED");
        console.log(response.data);
    })
      .catch( (error) => {
        console.log(`order_id: ${this.props.order_id}`);

        console.log(error);

    });

    };

  render() {
    console.log(this.state.order);
    const menuItems = this.state.order.map((item, index) => {
      return (
        <Text key={index} style={styles.text}>{item.count} x {item.name}</Text>
      )
    })

    return (
      <View style={styles.container}>
        <View style={styles.order}>
          <Text style={styles.id}>{this.state.order_id}</Text>
          <Text style={styles.status}>{this.state.status}</Text>
          <View style={styles.items}>
            { menuItems }
          </View>
          <TouchableOpacity onPress={this.completeOrder}>
            <Text style={styles.button}>COMPLETE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  order: {
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 15,

  },
  orderDetails: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    paddingVertical: 40,
  },
  id: {
    fontSize: 20,
    fontWeight: '200',
  },
  status: {
    fontSize: 20,
  },
  text: {
    fontSize: 20,
  },
  button: {
    marginTop: 5,
    fontSize: 20,
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
  }
});
