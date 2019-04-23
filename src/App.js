import React, { Component } from 'react';
import App from './containers/App';
import './App.css'
import './bootstrap-cyborg.css'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'


let store = createStore(rootReducer)

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
