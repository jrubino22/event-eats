import React from 'react'
import Main from './components/MainComponent'
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore'
import { PersistGate } from './components/LoadingComponent'

const { persistor, store } = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Main/>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
