import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class VendorViewSingleItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    menu_item_id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  addMenuItem = () => {

  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.item}>
          <Image style={styles.image}  key={this.props.index} source={{uri: this.props.img}}/>
          <View style={styles.itemDetails}>
            <Text style={styles.name}>{this.props.itemName}</Text>
            <Text style={styles.price}>$ {this.props.price}</Text>
            <Text style={styles.quantity}>Availability: {this.props.quantity}</Text>
            <Text style={styles.description}>{this.props.description}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => Actions.editItem(this.props)}>
          <Text style={styles.addButton}>Edit Menu Item</Text>
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
    margin: 10,
    padding: 30,
    flexDirection: 'row',
  },
  itemDetails: {
    marginLeft: 10,
  },
  image: {
    height: 200,
    width: 400,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 2,
  },
  name: {
    fontSize: 40,
    fontWeight: '200',
    textAlign: 'left',
  },
  price: {
    textAlign: 'left',
    fontWeight: '200',
    fontSize: 20,
  },
  quantity: {
    textAlign: 'left',
    fontWeight: '200',
    fontSize: 20,
  },
  description: {
    fontWeight: '200',
    fontSize: 16,
  },
  addButton: {
    marginVertical: 10,
    marginHorizontal: 30,
    fontSize: 20,
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
  }

});
