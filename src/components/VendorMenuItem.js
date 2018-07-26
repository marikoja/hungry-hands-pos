import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default class VendorMenuItem extends Component {

  static propTypes = {
    itemName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    menu: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <View style={styles.nameAndQuantity}>
            <Text style={styles.name}>{this.props.itemName}</Text>
            <Text style={styles.quantity}>Availability: {this.props.quantity}</Text>
          </View>
          <TouchableOpacity style={styles.pressableImage} onPress={() => Actions.vendorViewSingleItem(this.props)}  >
            <Image style={styles.image}  key={this.props.index} source={{uri: this.props.img}}/>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    // flex: 1,
    width: 200,
    padding: 10,
    margin: 10,
  },
  nameAndQuantity: {
    // flex: 1,
    flexDirection: 'column',
    paddingVertical: 10,
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  name: {
    fontWeight: '200',
    fontSize: 20,
    textAlign: 'center',
  },
  quantity: {
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 20,
  },
  image: {
    height: 100,
    width: 200,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 2,
  },

});
