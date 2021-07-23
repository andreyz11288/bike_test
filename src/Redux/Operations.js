import * as localforage from 'localforage';
import {
  addStart,
  deleteStart,
  addSuccess,
  addError,
  deleteSuccess,
  deleteError,
  getSuccess,
  getError,
  getStart,
} from './Actions';

const addData = credentials => async dispatch => {
  dispatch(addStart());
  console.log(credentials);
  try {
    const response = await localforage.setItem('data', credentials);
    console.log(response);
    dispatch(addSuccess(response));
  } catch (error) {
    dispatch(addError(error.message));
  }
};
const getData = () => async dispatch => {
  dispatch(getStart());
  try {
    const response = await localforage.getItem('data');
    console.log(response);
    dispatch(getSuccess(response));
  } catch (error) {
    dispatch(getError(error.message));
  }
};
const deleteData = (credentials, data) => async dispatch => {
  dispatch(deleteStart());
  const filterData = data.filter(e => e.id !== credentials);

  try {
    const response = await localforage.setItem('data', filterData);
    console.log(response);
    dispatch(deleteSuccess(response));
  } catch (error) {
    dispatch(deleteError(error.message));
  }
};
export { addData, getData, deleteData };
