import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
const AuthRoute = () => (
  <Switch>
    <Redirect exact from="/" to="/login" />
    <Redirect exact from="/home" to="/login" />
    <Route exact path="/login" component={LoginPage} />
    <Route path="" component={NotFoundPage} />
  </Switch>
);
export default AuthRoute;
