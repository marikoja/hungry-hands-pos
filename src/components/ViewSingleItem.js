import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class ViewSingleItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.item}>
          <Image style={styles.image}  key={this.props.index} source={{uri: this.props.img}}/>
          <View style={styles.itemDetials}>
            <Text style={styles.name}>{this.props.itemName}</Text>
            <Text style={styles.price}>$ {this.props.price}</Text>
            <Text style={styles.description}>{this.props.description}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={this.props.onAdd}>
          <Text style={styles.addButton}>Add to Order</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  item: {
    flex: 1,
    margin: 10,
    padding: 30,
    flexDirection: 'row',
  },
  // nameAndPrice: {
  //   // flex: .5,
  //   flexDirection: 'row',
  //   paddingVertical: 10,
  //   // justifyContent: 'space-around',
  // },
  name: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
  },

  image: {
    flex: 3,
    height: 100,
    width: 200,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 2,
    // justifyContent: 'center',
  },

  addButton: {
    marginTop: 10,
    fontSize: 20,
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
  }

});
