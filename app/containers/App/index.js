/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import GlobalStyle from '../../global-styles';
import { getIsLoggedIN } from './redux/selector';
import AppRoute from './AppRoutes';
import AuthRoute from './AuthRoutes';

const AppWrapper = styled.div`
  margin: 0;
`;

const App = ({ isLoggedIN }) => (
  <AppWrapper>
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    {isLoggedIN ? <AppRoute /> : <AuthRoute />}
    <GlobalStyle />
  </AppWrapper>
);
App.propTypes = {
  isLoggedIN: PropTypes.bool,
};
export default connect(
  createStructuredSelector({
    isLoggedIN: getIsLoggedIN(),
  }),
)(App);
