import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class CustomerViewItem extends Component {
  render() {
    return (
      //TODO pull data from database/api for product descriptions
      <View style={styles.container}>
        <Text style={styles.title}>This is a POS</Text>
        <TouchableOpacity onPress={this.props.onBack}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.name}>This is a sandwich</Text>
        <View style={styles.details}>
          <Image source={{ uri: 'https://media.giphy.com/media/c9HEjwpjrRnQA/giphy.gif' }}
          style={styles.image} />
          <View style={styles.detailNav}>
            <Text style={styles.price}>$10.00</Text>
            <TouchableOpacity onPress={this.props.onAdd}>
              <Text style={styles.addButton}>Add to Order</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.description}>I am a sandwich, buy and eat me.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    margin: 10,
    padding: 30,
  },
  // navBar: {
  //   flexDirection: 'row',
  //   // justifyContent: 'space-between',
  //   marginTop: 30,
  //   marginBottom: 10,
  //   fontWeight: 'bold',
  //   // width: 100,
  //   // borderWidth: 2,
  //   // textAlign: 'left',
  // },
  backButton: {
    // flex: 1,
  //   justifyContent: 'flex-start',
  //   marginTop: 30,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  name: {
    marginTop: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    width: 300,
    textAlign: 'left',
  },
  image: {
    height: 200,
    width: 400,
    borderRadius: 15,
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
  },
  detailNav: {
    marginLeft: 25,
  },
  price: {
    fontSize: 20,
  },
  addButton: {
    marginTop: 10,
    fontSize: 20,
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
  }

});
