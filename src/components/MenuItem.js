import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ViewSingleItem from './ViewSingleItem'

export default class MenuItem extends Component {
  static propTypes = {
    itemName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <View style={styles.nameAndPrice}>
            <Text style={styles.name}>{this.props.itemName}</Text>
            <Text style={styles.price}>${this.props.price}</Text>
          </View>
          <TouchableOpacity style={styles.pressableImage} onPress={() => Actions.viewSingleItem(this.props)}  >
            <Image style={styles.image}  key={this.props.index} source={{uri: this.props.img}}/>
          </TouchableOpacity>
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
  nameAndPrice: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
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
    height: 100,
    width: 200,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 2,
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
