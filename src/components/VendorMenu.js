import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Actions } from 'react-native-router-flux';


export default class VendorMenu extends Component {
  static propTypes = {
    // items: PropTypes.array.isRequired,
    // onItemPress: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={() => Actions.vendorMenu()}
        >
          Vendor Menu!
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
