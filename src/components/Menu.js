import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import axios from 'axios';

import PropTypes from 'prop-types';

import { CustomerViewItem } from './CustomerViewItem'

export default class Menu extends Component {
  static propTypes = {
    // items: PropTypes.array.isRequired,
    // onItemPress: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
  console.log('Component did mount was called');

  axios.get('http://localhost:4567/menu/1')
    .then( (response) => {
      console.log(response);
  })
    .catch( (error) => {
      console.log(error);
  });
}

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
        >
        Customer Menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    width: '100%',
    paddingHorizontal: 10,
  },
});
