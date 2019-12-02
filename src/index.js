/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

function App() {
  console.tron.log('teste');

  return (
    <>
      <StatusBar backgroundColor="#9A24D4" />
      <Routes />
    </>
  );
}

export default App;
