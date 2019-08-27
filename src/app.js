import React, {Component} from 'react';
import AppContainer from './navigations';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import appReducers from './redux/reducers';
export const store = createStore(appReducers);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <AppContainer/>
      </Provider>
    );
  }
}
