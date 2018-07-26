import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export default class MyComponent extends Component {

  constructor(props){
      super(props)
      this.state = {
        itemName: props.itemName,
        price: props.price.toString(),
        description: props.description,
        quantity: props.quantity.toString(),
        img: props.img,
        menu_id: props.menu_id,
      }
  }

  editMenuItem = () => {
    Actions.pop();
    const url = `https://capstone-backend-java-spark.herokuapp.com/menu/${this.props.menu_id}/menu_item/${this.props.menu_item_id}`

    const body = {
      itemName: this.state.itemName,
      price: this.state.price,
      description: this.state.description,
      quantity: this.state.quantity,
      img: this.state.img,
      menu_id: this.state.menu_id,
      menu_item_id: this.state.menu_item_id}

    // console.log( body );
    // console.log( url );

    axios.put( url, body).then((response) => {
        console.log("GOOD edit Menu Item request");
        // console.log(response);
        Actions.vendorMenu();
      })
      .catch((error) => {
        console.log("ERROR edit Menu Item request");
        // console.log(error);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>

          <TextInput
             onChangeText={ (text)=> this.setState({itemName: text}) }
             style={styles.input}
             placeholder="Menu Item Name"
             defaultValue={this.state.itemName}
          />

         <TextInput
           onChangeText={ (text)=> this.setState({price: text}) }
           style={styles.input}
           placeholder="Price in Dollars: "
           defaultValue={`${this.state.price}`}
           keyboardType='numeric'>
         </TextInput>

         <TextInput
            onChangeText={ (text)=> this.setState({description: text}) }
            style={styles.input}
            placeholder="Menu Item Description"
            defaultValue={this.state.description}
          />

         <TextInput
           onChangeText={ (text)=> this.setState({quantity: text}) }
           style={styles.input}
           placeholder="Quantity Available"
           defaultValue={this.state.quantity}
           keyboardType='numeric'>
         </TextInput>

         <TextInput
            onChangeText={ (text)=> this.setState({img: text}) }
            style={styles.input}
            placeholder="Image url"
            defaultValue={this.state.img}
          />

        <TouchableOpacity onPress={this.editMenuItem}>
           <Text style={styles.button}>Edit Menu Item </Text>
         </TouchableOpacity>
       </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 100,
  },
  input: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '200',
    justifyContent: 'center'
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 30,
    fontSize: 20,
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
    fontWeight: '200',
    textAlign: 'center',
  }
});
