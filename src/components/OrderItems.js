import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class OrderItems extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <View style={styles.details}>
            <Text style={styles.name}>{this.props.itemName}</Text>
            <Text style={styles.quantity}>{this.props.price}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  item: {
    flex: 1,
    width: 200,
    padding: 10,
    margin: 10,
  },
  details: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 10,
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  quantity: {
    textAlign: 'center',
    fontSize: 20,
  },

  button: {
    marginTop: 10,
    fontSize: 20,
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
  }

});
