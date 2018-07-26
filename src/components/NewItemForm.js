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
        itemName: '',
        price: '10.50',
        description: '',
        quantity: '50',
        img: 'https://i.imgur.com/eTuCPxM.jpg',
        menu_id: 1,
      };
  }

  addNewMenuItem = () => {
    console.log({ itemName: this.state.itemName ,
      price: this.state.price,
      description: this.state.description,
      quantity: this.state.quantity,
      img: this.state.img,
    });
    axios.post(`https://capstone-backend-java-spark.herokuapp.com/menu/${this.state.menu_id}/menu_item`,
      { itemName: this.state.itemName ,
        price: this.state.price,
        description: this.state.description,
        quantity: parseInt(this.state.quantity),
        img: this.state.img,
      }).then((response) => {
        console.log("GOOD add Menu Item to Menu request");
        console.log(response);
        Actions.vendorMenu()
      })
      .catch((error) => {
        console.log("ERROR add Menu Item to Menu request");
        console.log(error);
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
          />

         <TextInput
           onChangeText={ (text)=> this.setState({price: text.toString()}) }
           style={styles.input}
           placeholder="Price: $"
           defaultValue={'10'}
           keyboardType='numeric'>
         </TextInput>

         <TextInput
            onChangeText={ (text)=> this.setState({description: text}) }
            style={styles.input}
            placeholder="Menu Item Description"
          />

         <TextInput
           onChangeText={ (text)=> this.setState({quantity: text}) }
           style={styles.input}
           placeholder="Quantity Available"
           defaultValue={'50'}
           keyboardType='numeric'>
         </TextInput>

         <TextInput
            onChangeText={ (text)=> this.setState({img: text}) }
            style={styles.input}
            placeholder="Image url"
            defaultValue="https://i.imgur.com/BVtN2Ws.jpg"
          />

         <TouchableOpacity onPress={this.addNewMenuItem}>
           <Text style={styles.button}>Add Item to Menu</Text>
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
    justifyContent: 'center'
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 30,
    fontSize: 20,
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
  }
});
