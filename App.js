import React, { Component } from 'react';
import Test from './Test';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);
import MainRed from './Red/MainRed';

import { createStore, combineReducers, } from 'redux';
import { Provider } from 'react-redux';

import MainStackComp from './Comp/StackComp';
import Tabbar from './Comp/StackComp';


const store = createStore(
  combineReducers({
    VNA: MainRed
  })
)

import MainComp from './Comp/MainComp';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tabbar/>
      </Provider>

    );
  }
}

