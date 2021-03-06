const initialState = {
  someData: "test!!",
};

const ACTION_HANDLERS = {};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
