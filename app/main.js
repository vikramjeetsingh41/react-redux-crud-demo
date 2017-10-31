import React from 'react';
import {render} from 'react-dom';
var ReactDOM = require('react-dom');
import { Route, HashRouter, BrowserRouter } from "react-router-dom";

import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
import { createUser } from './redux/actions/userActions';


import Home from "./containers/Home/Home";
import Users from "./containers/Users/Users";

const store = configureStore();

// Dispatch actions to load initial state.
//store.dispatch(loadCourses());

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route path="/users/:id" component={Users} />
        <Route path="/user" component={Users} />
    </div>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root"));

