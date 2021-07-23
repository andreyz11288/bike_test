import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addSuccess,
  addError,
  deleteSuccess,
  deleteError,
  getSuccess,
  getError,
} from './Actions';

const data = createReducer([], {
  [addSuccess]: (_, { payload }) => payload,
  [deleteSuccess]: (_, { payload }) => payload,
  [getSuccess]: (_, { payload }) => payload,
});
const error = createReducer(null, {
  [addError]: (_, { payload }) => payload,
  [deleteError]: (_, { payload }) => payload,
  [getError]: (_, { payload }) => payload,
});
export default combineReducers({
  data,
  error,
});
