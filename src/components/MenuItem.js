import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ViewSingleItem from './ViewSingleItem'

export default class MenuItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
  }

  renderSingleItem = (itemData) => {
    return (
      <ViewSingleItem
        name={itemData.name}
        description={itemData.description}
        menu_item_id={itemData.menu_item_id}
        price={itemData.price}
        img={itemData.img}
        add={()=>{}}
        />
      );
  }


  render() {
    return (

      <View style={styles.container}>
        <View style={styles.item}>
          <View style={styles.nameAndPrice}>
            <Text style={styles.name}>{this.props.name}</Text>
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
  testing: {
    borderColor: '#C492B1',
    borderWidth: 2,
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    margin: 10,
    padding: 30,
  },
  item: {
    flex: 1,
    borderWidth: 2,
  },
  nameAndPrice: {
    flex: .5,
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  name: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 300,
  },
  price: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
  },
  pressableImage: {
    height: 150,
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
