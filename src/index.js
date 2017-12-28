import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';

import PostIndex from './containers/post_list';
import PostNew from './containers/post_new';
import PostShow from './containers/post_show';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/posts/new" component={PostNew} />
        <Route path="/posts/:id" component={PostShow} />
        <Route path="/" component={PostIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
