import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import Postform from './components/Postform';
import { store } from './store';

export default class Traversy extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='container'>
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    )
  }
}

