import React from 'react';
import { Route, Switch } from 'react-router-dom';
import States from './containers/States';
import App from './containers/App';

export default () => {
  return (<Switch>
    <Route exact path='/' component={App} />
    <Route exact path='/states' component={States} />
  </Switch>);
};
