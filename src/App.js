import React, {Component} from 'react';
import { Router, Scene, StyleSheet } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

import Welcome from './components/Welcome';
import VendorMenu from './components/VendorMenu';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import ViewSingleItem from './components/ViewSingleItem';
import VendorMenuItem from './components/VendorMenuItem';
import VendorViewSingleItem from './components/VendorViewSingleItem';
import NewItemForm from './components/NewItemForm';
import EditItemForm from './components/EditItemForm';
import Cart from './components/Cart';
import OrderQueue from './components/OrderQueue';

export default class App extends Component {


  render() {
    return (
      <Router>
        <Scene key='root'
          titleStyle={{fontWeight: '100'}}
          backButtonTextStyle={{color: 'black'}}
          >

          <Scene
            key='welcome'
            component={Welcome}
            initial
          />

          <Scene
            key='customerMenu'
            component={Menu}
            title="Customer Menu"
            onBack={() => Actions.welcome()}
          />

          <Scene
            key='menuItem'
            component={MenuItem}
            title="Customer Menu Item"
          />

          <Scene
            key='vendorMenu'
            component={VendorMenu}
            title="Vendor Menu"
            onBack={() => Actions.welcome()}
          />

          <Scene
            key='viewSingleItem'
            component={ViewSingleItem}
            title="Customer Item Details"
          />

          <Scene
            key='vendorMenuItem'
            component={VendorMenuItem}
            title="Vendor Menu Item"
          />

          <Scene
            key='vendorViewSingleItem'
            component={VendorViewSingleItem}
            title="Vendor Item Details"
          />

          <Scene
            key='newItem'
            component={NewItemForm}
            title="New Item Form"
          />

          <Scene
            key='editItem'
            component={EditItemForm}
            title="Edit Item Form"
          />

          <Scene
            key='cart'
            component={Cart}
            title="Your cart"
          />

          <Scene
            key='orderQueue'
            component={OrderQueue}
            title="Order Queue"
          />

      </Scene>
      </Router>
    );
  }
}
