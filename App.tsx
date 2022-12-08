import React from 'react';

import {Provider} from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
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
