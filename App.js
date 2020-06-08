/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  StyleSheet,
  YellowBox
} from 'react-native';
import configureStore from './src/store/configureStore'
import { Provider } from 'react-redux'
import NavigationContainer from './src/navigation/index'

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])
const store = configureStore();
class App extends Component {
  render(){
    return(
      <Provider store={store}>
      <NavigationContainer/>
      </Provider>
    )
  }
};

const styles = StyleSheet.create({
 
});

export default App;
