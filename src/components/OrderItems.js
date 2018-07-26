import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

export default class OrderItems extends Component {

  static propTypes = {
    count: PropTypes.number,
    price: PropTypes.number
  };

  constructor(props) {
    super(props);

    this.state = {
      count: props.count,
      price: props.price,
      itemTotal: this.itemTotal
    };
  }

  render() {
    let itemTotal = this.state.count * this.state.price
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.count} x   {this.props.itemName} $ {parseFloat(itemTotal).toFixed(2)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: '200',
    textAlign: 'center',
    height: 40,
  },
});
