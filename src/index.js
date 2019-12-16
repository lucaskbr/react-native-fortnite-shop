/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';
import store from './store';

console.disableYellowBox = true;

function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#541BBD" barStyle="" />
      <Routes />
    </Provider>
  );
}

export default App;
