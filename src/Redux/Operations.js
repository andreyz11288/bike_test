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
  upSuccess,
  upError,
  upStart,
  idSuccess,
  idError,
  idStart,
} from './Actions';

const addData = credentials => async dispatch => {
  dispatch(addStart());
  try {
    const response = await localforage.setItem('data', credentials);
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
    dispatch(deleteSuccess(response));
  } catch (error) {
    dispatch(deleteError(error.message));
  }
};

const upData = (id, value, state) => async dispatch => {
  dispatch(upStart());
  const filterData = state.filter(e => e.id !== id);
  const indexDataOne = state.findIndex(e => e.id === id);
  const [{ name, type, color, Wheel, price, Description }] = state.filter(
    e => e.id === id,
  );
  const newObj = {
    name,
    type,
    color,
    Wheel,
    price,
    id: id,
    Description,
    status: value,
  };
  filterData.splice(indexDataOne, 0, newObj);
  try {
    const response = await localforage.setItem('data', filterData);
    dispatch(upSuccess(response));
  } catch (error) {
    dispatch(upError(error.message));
  }
};

const idData = id => async dispatch => {
  dispatch(idStart());
  try {
    // const response = await localforage.setItem('data', credentials);
    dispatch(idSuccess(id));
  } catch (error) {
    dispatch(idError(error.message));
  }
};

export { addData, getData, deleteData, upData, idData };
