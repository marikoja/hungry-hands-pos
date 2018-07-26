import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class OrderItems extends Component {

  static propTypes = {

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
        <Text style={styles.text}>{this.props.count} x   {this.props.itemName} $ {parseFloat(itemTotal).toFixed(2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%',
    padding: 10,
    margin: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: '200',
    textAlign: 'center',
    height: 40,
    flexWrap: 'wrap',
  },


});
