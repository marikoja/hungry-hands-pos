import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import { Actions } from 'react-native-router-flux';
import VendorMenu from './VendorMenu';
import Menu from './Menu';


export default class Welcome extends Component {
  static propTypes = {
    // items: PropTypes.array.isRequired,
    // onItemPress: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View style={styles.welcomeContainer}>
        <Text style={styles.header}>Welcome</Text>

        <View style={styles.icons}>
          <Image
            source= {require('../images/hotDog.png')}
            style={styles.icon}/>

            <Image
              source= {require('../images/truck.png')}
              style={styles.icon}/>

            <Image
              source= {require('../images/people.png')}
              style={styles.icon}/>
        </View>

        <View style={styles.buttons}>
          <Text
            style={styles.button}
            onPress={() => Actions.customerMenu()}
          >
            Link to Customer Menu
          </Text>

          <Text
            style={styles.button}
            onPress={() => Actions.vendorMenu()}
          >
            Link to Vendor Menu
          </Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  welcomeContainer: {
    marginTop: 50,
    flexDirection: 'column',
  },
  header: {
    // flex: 1,
    textAlign: 'center',
    fontSize: 30,

  },
  icons: {
    // flex: 4,
    // height: 200,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    // flex: 4,
    height: 100,
    marginVertical: 50,
  },

  buttons:{
    // flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',

  },

  button: {
    borderWidth: 2,
    padding: 10,

  },

});
