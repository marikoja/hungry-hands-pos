import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Welcome from './components/Welcome';
import VendorMenu from './components/VendorMenu';
import Menu from './components/Menu';

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
          key='vendorMenu'
          component={VendorMenu}
          title="Vendor Menu"
          />

      </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
