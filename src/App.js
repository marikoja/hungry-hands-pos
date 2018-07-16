import React, {Component} from 'react';
import { StyleSheet, } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Welcome from './components/Welcome';
import VendorMenu from './components/VendorMenu';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import ViewSingleItem from './components/ViewSingleItem'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>

          <Scene
          key='welcome'
          component={Welcome}
          initial
          />

          <Scene
          key='customerMenu'
          component={Menu}
          title="Menu"
          />

          <Scene
          key='menuItem'
          component={MenuItem}
          title="MenuItem"
          />

          <Scene
          key='vendorMenu'
          component={VendorMenu}
          title="Vendor Menu"
          />

          <Scene
          key='viewSingleItem'
          component={ViewSingleItem}
          title="Item Details"
          />

      </Scene>
      </Router>
    );
  }
}