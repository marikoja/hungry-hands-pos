import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class MenuItem extends Component {
  static propTypes = {
    itemName: PropTypes.string.isRequired,
    menu: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nameAndPrice}>
          <Text style={styles.text}>{this.props.itemName}</Text>
          <Text style={styles.text}>${this.props.price}</Text>
        </View>
        <TouchableOpacity style={styles.pressableImage} onPress={() => Actions.viewSingleItem(this.props)}  >
          <Image style={styles.image}  key={this.props.index} source={{uri: this.props.img}}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    padding: 10,
    margin: 10,
  },
  nameAndPrice: {
    flexDirection: 'column',
    paddingVertical: 10,
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '200',
    textAlign: 'center',
  },
  image: {
    height: 150,
    width: 200,
    borderRadius: 25,
    marginBottom: 10,
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
