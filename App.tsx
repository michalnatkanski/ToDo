import React from 'react';

import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
//components
import Todo from './src/components/todo';

import rootReducer from './src/redux/reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger));

const App = () => {

  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

export default App;
