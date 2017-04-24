import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Router from 'react-native-simple-router';
import { StyleSheet } from 'react-native';

import * as reducers from '../reducers';
import CounterApp from './counterApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


const firstRoute = {
 name: 'Home',
 component: CounterApp,
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec',
  },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router
          firstRoute={firstRoute}
          headerStyle={styles.header}
        />
      </Provider>
    );
  }
}