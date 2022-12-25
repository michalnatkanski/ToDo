import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Todo from './src/components/todo';
import { store, persistor } from './src/redux/reducers/rootReducer';
import { Text } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Todo />
      </PersistGate>
    </Provider>
  );
};

export default App;
