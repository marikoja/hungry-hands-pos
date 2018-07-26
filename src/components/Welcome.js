import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Welcome extends Component {

  render() {
    return (
      <View style={styles.welcomeContainer}>
        <Text style={styles.header}>Hungry Hands</Text>
        <Text style={styles.subHeader}>An Interactive POS for Food Trucks</Text>

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
            Customer Menu
          </Text>

          <Text
            style={styles.button}
            onPress={() => Actions.vendorMenu()}
          >
          Vendor Menu
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
    justifyContent: 'space-between',
  },
  header: {
    textAlign: 'center',
    fontSize: 80,
    fontWeight: '200',
  },
  subHeader: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '200',
    marginTop: 30,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    height: 100,
    marginVertical: 100,
  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    fontWeight: '200',
    fontSize: 30.
  },
});
