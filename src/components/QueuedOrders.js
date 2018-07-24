import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

export default class QueueItems extends Component {

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

  render() {
    console.log(this.state.order);
    const menuItems = this.state.order.map((item, index) => {
      return (
        <Text>{item.count} x {item.name}</Text>
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

  },
  orderDetails: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    paddingVertical: 40,
  },
  id: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 20,
  },
  items: {

  }
});
