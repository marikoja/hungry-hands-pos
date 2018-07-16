import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

export default class Menu extends Component {
  constructor(props) {
  super(props);

  this.state = {
    menu: [],
  };
}

  componentDidMount = () => {
    console.log('Component did mount was called');

    axios.get('https://capstone-backend-java-spark.herokuapp.com/menu/1')
      .then( (response) => {
        console.log(response);
        this.setState({menu: response.data});
    })
      .catch( (error) => {
        console.log(error);
    });
  }

  renderMenuItems = () => {
    const menuList = this.state.menu.map((item, index) => {
      return (
        <MenuItem
          key={index}
          itemName={item.name}
          description={item.description}
          menu_item_id={item.menu_item_id}
          price={item.price}
          img={item.img}
          add={()=>{}}
          />
      );
    });
    return menuList;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemsContainer}>
          {this.renderMenuItems()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    margin: 10,
    padding: 30,
  },
  itemsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

});
