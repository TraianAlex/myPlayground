import * as actionTypes from './actionTypes';

const initialState = {
  page: 1
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.PREV:
      return {
        page: Math.max(1, state.page - 1)
      }
    case actionTypes.NEXT:
      return {
        page: state.page + 1
      }
    default:
      return state;
  }
}
