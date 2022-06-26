import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
const AuthRoute = () => (
  <Switch>
    <Redirect exact from="/login" to="/home" />
    <Redirect exact from="/" to="/home" />
    <Route exact path="/home" component={HomePage} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);
export default AuthRoute;
