import { configureStore } from '@reduxjs/toolkit';
//import { combineReducers } from 'redux';

const errors = (state = { errors: [] }, action) => {
  switch(action.type) {
    case 'ADD':
      return {errors: [...state.errors, action.payload]};
    case 'RESET':
      return {errors: []};
    default:
      return state;
  };
};

const store2 = configureStore(errors);
//const store2 = createStore(errors);
store2.subscribe(() => console.log(store2.getState()));

store2.dispatch({
  type: 'ADD',
  payload: {
    id: Math.random(),
    message: 'Oops... Something bad happened 😱',
    severity: 'critical'
  }
});

export default store2;