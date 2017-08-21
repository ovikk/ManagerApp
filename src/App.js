import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
     apiKey: 'AIzaSyDjXJ5-QaTmxhSYjBGCkD9kX59TMP45N08',
     authDomain: 'manager-98aed.firebaseapp.com',
     databaseURL: 'https://manager-98aed.firebaseio.com',
     projectId: 'manager-98aed',
     storageBucket: '',
     messagingSenderId: '996084813581'
   };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;

