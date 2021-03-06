import React from 'react'
import Login from './components/LoginComponent'
import Main from './components/MainComponent'
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore'
import { PersistGate } from 'redux-persist/es/integration/react'

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


