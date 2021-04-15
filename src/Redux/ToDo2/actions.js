import * as actionTypes from './actionTypes';

export const updateTodo = todo => {
  return { type: actionTypes.UPDATE_TODO, todo };
};

export const createTodo = todo => {
  return { type: actionTypes.CREATE_TODO, todo };
};
