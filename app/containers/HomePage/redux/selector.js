/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const homeState = state => state.home || initialState;

const getSchedules = () =>
  createSelector(
    homeState,
    state => state.data,
  );
const getTotalNumSchedules = () =>
  createSelector(
    homeState,
    state => state.total,
  );
export { homeState, getSchedules, getTotalNumSchedules };
