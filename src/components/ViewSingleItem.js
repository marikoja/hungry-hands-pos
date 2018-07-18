import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class ViewSingleItem extends Component {
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
    orders: [],
  };
}

  onAdd = () => {
    if (this.props.menu.state.order_id == null) {
      console.log("CREATE NEW ORDER")
      this.props.menu.createNewOrder().then(() => {
      });
    } else {
      console.log("ADDING ITEM ORDER")
      console.log(this.props.menu.state.order_id);
      this.addItemToOrder()
    }
  }
  
  addItemToOrder = () => {
    let newCartCount = this.props.menu.state.numInCart + 1;
    this.props.menu.setState({numInCart: newCartCount});
    console.log(this.props.menu.state.numInCart);

    axios.post(`https://capstone-backend-java-spark.herokuapp.com/order/${this.props.menu.state.order_id}`,
      { menu_item_id: this.props.index ,
        quantity: 1,
      }).then((response) => {
        console.log("GOOD addItemToOrder request");
        console.log(response);
      })
      .catch((error) => {
        console.log("ERROR addItemToOrder request");
        console.log(error);
      }
    );
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.item}>
          <Image style={styles.image}  key={this.props.index} source={{uri: this.props.img}}/>
          <View style={styles.itemDetails}>
            <Text style={styles.name}>{this.props.itemName}</Text>
            <Text style={styles.price}>$ {this.props.price}</Text>
            <Text style={styles.description}>{this.props.description}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={this.onAdd}>
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
    // flex: 1,
    margin: 10,
    padding: 30,
    // flexDirection: 'row',
  },
  // nameAndPrice: {
  //   // flex: .5,
  //   flexDirection: 'row',
  //   paddingVertical: 10,
  //   // justifyContent: 'space-around',
  // },
  image: {
    height: 200,
    width: 400,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  price: {
    textAlign: 'left',
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
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
