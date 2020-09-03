import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './Navigation';
import store from './store';
import codePush from 'react-native-code-push';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

export default codePush(codePushOptions)(App);
