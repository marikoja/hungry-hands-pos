import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class CustomerViewItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onBack}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>This is a POS</Text>
        <Image source={{ uri: 'https://media.giphy.com/media/c9HEjwpjrRnQA/giphy.gif' }}
          style={styles.image} />
          <View style={styles.causeAndPrice}>
            <Text style={styles.price}>$100.00</Text>
            <Text style={styles.description}>I am a sandwich, buy and eat me.</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 30,
    fontWeight: 'bold',
    width: 300,
    textAlign: 'center',
  },
  image: {
    height: 200,
  }
});
